<?php
defined('ABSPATH') || exit;

/**
 * AI generation REST controller.
 *
 * GET  /wpbean-pgs/v1/ai/status   — check whether a configured AI provider is available.
 * POST /wpbean-pgs/v1/ai/generate — generate gallery settings from a text prompt or image.
 *
 * Provider resolution order:
 *   1. WordPress 7.0 Connectors API (wp_ai_client_prompt)      — preferred
 *   2. Plugin-level API keys stored via the AI Settings page   — fallback
 *      Supported: OpenAI GPT-4o, Anthropic Claude, Google Gemini
 */
class WPBean_PGS_REST_AI_Controller extends WP_REST_Controller
{
    protected $namespace = 'wpbean-pgs/v1';
    protected $rest_base = 'ai';

    public function register_routes()
    {
        register_rest_route($this->namespace, '/ai/status', [
            'methods'             => WP_REST_Server::READABLE,
            'callback'            => [$this, 'get_status'],
            'permission_callback' => [$this, 'permissions_check'],
        ]);

        register_rest_route($this->namespace, '/ai/generate', [
            'methods'             => WP_REST_Server::CREATABLE,
            'callback'            => [$this, 'generate_settings'],
            'permission_callback' => [$this, 'permissions_check'],
        ]);
    }

    public function permissions_check()
    {
        return current_user_can('manage_woocommerce');
    }

    /*--------------------------------------------------------------
    # Status
    --------------------------------------------------------------*/

    public function get_status()
    {
        $connectors_url  = admin_url('options-connectors.php');
        $ai_settings_url = admin_url('admin.php?page=wpbean-product-gallery-ai-settings');

        // ── Try WP 7.0 Connectors first ───────────────────────────────
        if (function_exists('wp_supports_ai') && wp_supports_ai()) {
            try {
                $check        = wp_ai_client_prompt('__probe__')->is_supported_for_text_generation();
                $is_supported = ! is_wp_error($check) && true === $check;
            } catch (\Throwable $e) {
                $is_supported = false;
            }

            if ($is_supported) {
                return rest_ensure_response([
                    'available'       => true,
                    'source'          => 'connectors',
                    'connectors_url'  => $connectors_url,
                    'ai_settings_url' => $ai_settings_url,
                ]);
            }

            // WP 7.0 present but no provider configured — fall through to stored keys check
        }

        // ── Try plugin-stored keys ────────────────────────────────────
        if (class_exists('WPBean_PGS_AI_Settings') && WPBean_PGS_AI_Settings::has_any_key()) {
            $provider = WPBean_PGS_AI_Settings::get_active_provider();
            $key      = WPBean_PGS_AI_Settings::get_api_key($provider);

            if ('' !== $key) {
                return rest_ensure_response([
                    'available'       => true,
                    'source'          => 'plugin',
                    'provider'        => $provider,
                    'connectors_url'  => $connectors_url,
                    'ai_settings_url' => $ai_settings_url,
                ]);
            }
        }

        return rest_ensure_response([
            'available'       => false,
            'reason'          => 'ai_not_supported',
            'connectors_url'  => $connectors_url,
            'ai_settings_url' => $ai_settings_url,
        ]);
    }

    /*--------------------------------------------------------------
    # Generate
    --------------------------------------------------------------*/

    public function generate_settings($request)
    {
        $prompt_text      = sanitize_textarea_field($request['prompt'] ?? '');
        $image_data       = $request['image_data'] ?? '';
        $current_settings = $request['current_settings'] ?? [];

        if (empty($prompt_text) && empty($image_data)) {
            return new WP_Error(
                'missing_input',
                __('Please provide a prompt or upload a reference image.', 'wpbean-product-gallery-slider-for-woocommerce'),
                ['status' => 400]
            );
        }

        $schema      = $this->get_settings_schema();
        $system_text = $this->build_system_prompt($schema, is_array($current_settings) ? $current_settings : []);
        $user_prompt = $prompt_text ?: 'Analyse this product gallery image and generate matching settings.';

        $has_stored_keys = class_exists('WPBean_PGS_AI_Settings') && WPBean_PGS_AI_Settings::has_any_key();

        // ── Probe WP 7.0 Connectors availability (guarded) ───────────
        $connectors_ready = false;
        if (function_exists('wp_supports_ai') && wp_supports_ai()) {
            try {
                $check            = wp_ai_client_prompt('__probe__')->is_supported_for_text_generation();
                $connectors_ready = (! is_wp_error($check) && true === $check);
            } catch (\Throwable $e) {
                $connectors_ready = false;
            }
        }

        // ── Route to the right provider ───────────────────────────────
        if ($connectors_ready) {
            $raw = $this->generate_via_connectors($user_prompt, $image_data, $system_text);

            // If connectors fail at runtime (e.g. auth not wired up), fall back silently
            if (is_wp_error($raw) && $has_stored_keys) {
                $raw = $this->generate_via_stored_keys($user_prompt, $image_data, $system_text);
            }
        } elseif ($has_stored_keys) {
            $raw = $this->generate_via_stored_keys($user_prompt, $image_data, $system_text);
        } else {
            return new WP_Error(
                'ai_unavailable',
                __('No AI provider configured. Please add an API key in Gallery → AI Settings or configure a provider in Settings → Connectors.', 'wpbean-product-gallery-slider-for-woocommerce'),
                ['status' => 503]
            );
        }

        if (is_wp_error($raw)) {
            return $raw;
        }

        // Strip any markdown fences the model may have included
        $clean = preg_replace('/^```(?:json)?\s*/i', '', trim((string) $raw));
        $clean = preg_replace('/\s*```$/', '', $clean);

        $decoded = json_decode($clean, true);

        if (! is_array($decoded)) {
            return new WP_Error(
                'invalid_ai_response',
                __('The AI returned an unexpected response. Please try again.', 'wpbean-product-gallery-slider-for-woocommerce'),
                ['status' => 500]
            );
        }

        $validated = $this->validate_settings((array) ($decoded['settings'] ?? []), $schema);

        return rest_ensure_response([
            'title'     => isset($decoded['title'])     ? sanitize_text_field($decoded['title'])     : __('AI Gallery Rule', 'wpbean-product-gallery-slider-for-woocommerce'),
            'settings'  => $validated,
            'reasoning' => isset($decoded['reasoning']) ? sanitize_text_field($decoded['reasoning']) : '',
        ]);
    }

    /*--------------------------------------------------------------
    # Generation — WP 7.0 Connectors path
    --------------------------------------------------------------*/

    private function generate_via_connectors(string $user_prompt, string $image_data, string $system): string|WP_Error
    {
        $tmp_file = null;

        try {
            $builder = wp_ai_client_prompt($user_prompt)
                ->using_system_instruction($system)
                ->as_json_response();

            if (! empty($image_data)) {
                $matches = [];
                if (preg_match('/^data:(image\/[a-zA-Z+]+);base64,(.+)$/', $image_data, $matches)) {
                    $tmp_file    = wp_tempnam('wpbean-ai-img');
                    $binary_data = base64_decode($matches[2]);
                    // phpcs:ignore WordPress.WP.AlternativeFunctions.file_system_operations_file_put_contents
                    file_put_contents($tmp_file, $binary_data);
                    $builder = $builder->with_file($tmp_file, $matches[1]);
                }
            }

            $result = $builder->generate_text();

        } catch (\Exception $e) {
            $this->cleanup_tmp($tmp_file);
            return new WP_Error('ai_error', $e->getMessage(), ['status' => 500]);
        }

        $this->cleanup_tmp($tmp_file);

        if (is_wp_error($result)) {
            return new WP_Error('ai_generation_failed', $result->get_error_message(), ['status' => 500]);
        }

        return (string) $result;
    }

    /*--------------------------------------------------------------
    # Generation — plugin-stored keys path
    --------------------------------------------------------------*/

    private function generate_via_stored_keys(string $user_prompt, string $image_data, string $system): string|WP_Error
    {
        $provider = WPBean_PGS_AI_Settings::get_active_provider();
        $api_key  = WPBean_PGS_AI_Settings::get_api_key($provider);

        if ('' === $api_key) {
            // Active provider has no key — try others in order
            foreach (['openai', 'anthropic', 'google', 'mimo'] as $slug) {
                $key = WPBean_PGS_AI_Settings::get_api_key($slug);
                if ('' !== $key) {
                    $provider = $slug;
                    $api_key  = $key;
                    break;
                }
            }
        }

        if ('' === $api_key) {
            return new WP_Error(
                'no_api_key',
                __('No API key is configured. Please add your key in Gallery → AI Settings.', 'wpbean-product-gallery-slider-for-woocommerce'),
                ['status' => 503]
            );
        }

        switch ($provider) {
            case 'openai':
                return $this->call_openai($api_key, $user_prompt, $image_data, $system);

            case 'anthropic':
                return $this->call_anthropic($api_key, $user_prompt, $image_data, $system);

            case 'google':
                return $this->call_google($api_key, $user_prompt, $image_data, $system);

            case 'mimo':
                return $this->call_mimo($api_key, $user_prompt, $image_data, $system);

            default:
                return new WP_Error('unknown_provider', 'Unknown AI provider.', ['status' => 500]);
        }
    }

    /*--------------------------------------------------------------
    # Direct provider calls
    --------------------------------------------------------------*/

    /**
     * OpenAI — GPT-4o with optional vision.
     * Docs: https://platform.openai.com/docs/api-reference/chat
     */
    private function call_openai(string $api_key, string $prompt, string $image_data, string $system): string|WP_Error
    {
        $content = [['type' => 'text', 'text' => $prompt]];

        if (! empty($image_data)) {
            $content[] = [
                'type'      => 'image_url',
                'image_url' => ['url' => $image_data, 'detail' => 'high'],
            ];
        }

        $body = [
            'model'           => 'gpt-4o',
            'response_format' => ['type' => 'json_object'],
            'messages'        => [
                ['role' => 'system', 'content' => $system],
                ['role' => 'user',   'content' => $content],
            ],
        ];

        $response = wp_remote_post('https://api.openai.com/v1/chat/completions', [
            'headers' => [
                'Authorization' => 'Bearer ' . $api_key,
                'Content-Type'  => 'application/json',
            ],
            'body'    => wp_json_encode($body),
            'timeout' => 60,
        ]);

        return $this->parse_http_response($response, function (array $data): string {
            return (string) ($data['choices'][0]['message']['content'] ?? '');
        });
    }

    /**
     * Anthropic Claude — claude-3-5-sonnet-20241022 with optional vision.
     * Docs: https://docs.anthropic.com/en/api/messages
     */
    private function call_anthropic(string $api_key, string $prompt, string $image_data, string $system): string|WP_Error
    {
        $parts = [['type' => 'text', 'text' => $prompt]];

        if (! empty($image_data)) {
            $matches = [];
            if (preg_match('/^data:(image\/[a-zA-Z+]+);base64,(.+)$/', $image_data, $matches)) {
                $parts[] = [
                    'type'   => 'image',
                    'source' => [
                        'type'       => 'base64',
                        'media_type' => $matches[1],
                        'data'       => $matches[2],
                    ],
                ];
            }
        }

        $body = [
            'model'      => 'claude-3-5-sonnet-20241022',
            'max_tokens' => 2048,
            'system'     => $system,
            'messages'   => [
                ['role' => 'user', 'content' => $parts],
            ],
        ];

        $response = wp_remote_post('https://api.anthropic.com/v1/messages', [
            'headers' => [
                'x-api-key'         => $api_key,
                'anthropic-version' => '2023-06-01',
                'Content-Type'      => 'application/json',
            ],
            'body'    => wp_json_encode($body),
            'timeout' => 60,
        ]);

        return $this->parse_http_response($response, function (array $data): string {
            return (string) ($data['content'][0]['text'] ?? '');
        });
    }

    /**
     * Google Gemini — gemini-1.5-pro with optional inline image.
     * Docs: https://ai.google.dev/api/generate-content
     */
    private function call_google(string $api_key, string $prompt, string $image_data, string $system): string|WP_Error
    {
        $parts = [['text' => $prompt]];

        if (! empty($image_data)) {
            $matches = [];
            if (preg_match('/^data:(image\/[a-zA-Z+]+);base64,(.+)$/', $image_data, $matches)) {
                $parts[] = [
                    'inline_data' => [
                        'mime_type' => $matches[1],
                        'data'      => $matches[2],
                    ],
                ];
            }
        }

        $body = [
            'contents'           => [
                ['role' => 'user', 'parts' => $parts],
            ],
            'generationConfig'   => [
                'responseMimeType' => 'application/json',
            ],
            'systemInstruction'  => [
                'parts' => [['text' => $system]],
            ],
        ];

        $url = add_query_arg('key', $api_key, 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent');

        $response = wp_remote_post($url, [
            'headers' => ['Content-Type' => 'application/json'],
            'body'    => wp_json_encode($body),
            'timeout' => 60,
        ]);

        return $this->parse_http_response($response, function (array $data): string {
            return (string) ($data['candidates'][0]['content']['parts'][0]['text'] ?? '');
        });
    }

    /**
     * Xiaomi MiMo — mimo-v2.5 (vision) / mimo-v2.5-pro (text-only).
     * Docs: https://mimo.mi.com/docs/en-US/api/chat/openai-api
     * Auth: api-key header (OpenAI-compatible response format).
     */
    private function call_mimo(string $api_key, string $prompt, string $image_data, string $system): string|WP_Error
    {
        // Use the multimodal model when an image is present
        $model   = empty($image_data) ? 'mimo-v2.5-pro' : 'mimo-v2.5';
        $content = [['type' => 'text', 'text' => $prompt]];

        if (! empty($image_data)) {
            $content[] = [
                'type'      => 'image_url',
                'image_url' => ['url' => $image_data],
            ];
        }

        $body = [
            'model'                 => $model,
            'messages'              => [
                ['role' => 'system', 'content' => $system],
                ['role' => 'user',   'content' => $content],
            ],
            'max_completion_tokens' => 2048,
            'temperature'           => 1.0,
            'stream'                => false,
        ];

        $response = wp_remote_post('https://api.xiaomimimo.com/v1/chat/completions', [
            'headers' => [
                'api-key'      => $api_key,
                'Content-Type' => 'application/json',
            ],
            'body'    => wp_json_encode($body),
            'timeout' => 60,
        ]);

        return $this->parse_http_response($response, function (array $data): string {
            return (string) ($data['choices'][0]['message']['content'] ?? '');
        });
    }

    /**
     * Parse a wp_remote_post() response.
     *
     * @param mixed    $response wp_remote_post result
     * @param callable $extractor takes decoded array, returns content string
     */
    private function parse_http_response($response, callable $extractor): string|WP_Error
    {
        if (is_wp_error($response)) {
            return new WP_Error('http_error', $response->get_error_message(), ['status' => 502]);
        }

        $code = wp_remote_retrieve_response_code($response);
        $body = wp_remote_retrieve_body($response);
        $data = json_decode($body, true);

        if ($code < 200 || $code >= 300) {
            $api_msg = '';
            if (is_array($data)) {
                // OpenAI style
                $api_msg = $data['error']['message'] ?? '';
                // Anthropic style
                if (! $api_msg) {
                    $api_msg = $data['error']['message'] ?? $data['message'] ?? '';
                }
                // Google style
                if (! $api_msg && isset($data['error']['message'])) {
                    $api_msg = $data['error']['message'];
                }
            }
            $msg = $api_msg ?: sprintf(
                /* translators: %d: HTTP status code */
                __('AI provider returned HTTP %d. Check your API key in Gallery → AI Settings.', 'wpbean-product-gallery-slider-for-woocommerce'),
                $code
            );

            return new WP_Error('provider_error', $msg, ['status' => 502]);
        }

        if (! is_array($data)) {
            return new WP_Error('invalid_provider_response', __('Unexpected response from AI provider.', 'wpbean-product-gallery-slider-for-woocommerce'), ['status' => 502]);
        }

        return $extractor($data);
    }

    /*--------------------------------------------------------------
    # Schema helpers
    --------------------------------------------------------------*/

    private function build_system_prompt(array $schema, array $current_settings): string
    {
        $schema_text  = $this->build_schema_description($schema);
        $current_text = '';

        if (! empty($current_settings)) {
            $current_text = "\n\nThe user's current settings (only suggest changes that improve on these):\n"
                          . wp_json_encode($current_settings, JSON_PRETTY_PRINT);
        }

        return <<<SYSTEM
You are an expert WooCommerce product gallery designer. Generate configuration settings for a WordPress product gallery plugin based on the user's design brief or reference image.

Return ONLY a valid JSON object with this structure (no markdown, no extra text):
{
  "title": "Short descriptive rule name (3–5 words)",
  "settings": {
    // Include only the settings you want to set; omit settings you want to keep at their defaults
  },
  "reasoning": "One sentence explaining your main design choices"
}

Available settings (use only these keys and values exactly as listed):
{$schema_text}{$current_text}

Rules:
- Only include settings you actually want to set
- Use exact enum values — never invent new values
- For boolean settings, use true or false
- Respond with valid JSON only
SYSTEM;
    }

    /**
     * Returns the settings schema used both for the AI prompt and for response validation.
     * Each entry: [ type, allowed_values_or_range_or_null, human_label ]
     */
    private function get_settings_schema(): array
    {
        return [
            // ── Gallery layout ────────────────────────────────────────────────
            'galleryType'                   => ['string',  ['thumbnail', 'anchor', 'sticky-split', 'hierarchy-grid', 'tiles'], 'Gallery layout type'],
            // ── Thumbnail strip ───────────────────────────────────────────────
            'thumbnailShow'                 => ['boolean', null,                                                              'Show thumbnail strip'],
            'thumbnailPosition'             => ['string',  ['bottom', 'top', 'left', 'right'],                               'Thumbnail strip position'],
            'thumbnailLayout'               => ['string',  ['slider', 'grid'],                                               'Thumbnail arrangement'],
            'thumbnailWidth'                => ['integer', [40, 200],                                                        'Thumbnail width (px)'],
            'thumbnailHeight'               => ['integer', [40, 200],                                                        'Thumbnail height (px)'],
            'thumbnailGap'                  => ['integer', [0, 40],                                                          'Gap between thumbnails (px)'],
            'thumbnailBorderRadius'         => ['integer', [0, 20],                                                          'Thumbnail corner radius (px)'],
            'thumbnailFitToImage'           => ['boolean', null,                                                              'Fit thumbnails to main image size'],
            'thumbnailActiveBorderColor'    => ['string',  null,                                                              'Active thumbnail border color (CSS)'],
            'thumbnailActiveBorderWidth'    => ['integer', [1, 6],                                                           'Active thumbnail border width (px)'],
            'thumbnailSliderButtons'        => ['boolean', null,                                                              'Show arrows on thumbnail slider'],
            'thumbnailAnimation'            => ['boolean', null,                                                              'Fade-in animation for thumbnails'],
            'thumbnailTrigger'              => ['string',  ['click', 'hover'],                                               'What triggers thumbnail image swap'],
            // ── Main image ────────────────────────────────────────────────────
            'mainImageFit'                  => ['string',  ['contain', 'cover'],                                             'How main image fills its container'],
            'mainImageHeightMode'           => ['string',  ['lock', 'adaptive', 'fixed'],                                   'Gallery height management'],
            'mainImageBackground'           => ['string',  null,                                                              'Background behind main image (CSS color)'],
            'mainImageBorderRadius'         => ['integer', [0, 32],                                                          'Main image corner radius (px)'],
            'mainImageBorderWidth'          => ['integer', [0, 8],                                                           'Main image border thickness (px)'],
            'mainImageShadow'               => ['boolean', null,                                                              'Drop shadow on main image'],
            'mainImageArrows'               => ['boolean', null,                                                              'Show prev/next arrows'],
            'mainImagePagination'           => ['boolean', null,                                                              'Show pagination indicator'],
            'mainImagePaginationType'       => ['string',  ['dots', 'progressbar'],                                         'Pagination style'],
            'mainImageSwipe'                => ['boolean', null,                                                              'Swipe/drag to navigate images'],
            'mainImageTransition'           => ['string',  ['fade', 'slide', 'zoom', 'none'],                               'Image switch animation'],
            'mainImageSlideDirection'       => ['string',  ['horizontal', 'vertical'],                                       'Slide animation direction'],
            'mainImageTransitionDuration'   => ['integer', [100, 2000],                                                      'Transition duration (ms)'],
            // ── Zoom ──────────────────────────────────────────────────────────
            'zoomOnHover'                   => ['boolean', null,                                                              'Enable zoom on mouse hover'],
            'zoomType'                      => ['string',  ['lens', 'window', 'inner'],                                      'Zoom display mode'],
            'zoomLevel'                     => ['number',  [1, 10],                                                          'Zoom magnification factor'],
            'zoomCursor'                    => ['string',  ['crosshair', 'zoom-in', 'default'],                             'Cursor style while hovering'],
            // ── Lightbox ──────────────────────────────────────────────────────
            'lightbox'                      => ['boolean', null,                                                              'Enable full-screen lightbox'],
            'lightboxOpenOnImageClick'      => ['boolean', null,                                                              'Open lightbox on image click'],
            'lightboxShowThumbnails'        => ['boolean', null,                                                              'Show thumbnails in lightbox'],
            'lightboxPaginationType'        => ['string',  ['thumbs', 'dots'],                                              'Lightbox pagination style'],
            'lightboxTransition'            => ['string',  ['slide', 'fade', 'zoom', 'none'],                               'Lightbox image transition'],
            'lightboxZoomIn'                => ['boolean', null,                                                              'Zoom buttons in lightbox toolbar'],
            'lightboxFullscreen'            => ['boolean', null,                                                              'Fullscreen button in lightbox'],
            'lightboxShowCaption'           => ['boolean', null,                                                              'Show image captions in lightbox'],
            // ── Mobile ────────────────────────────────────────────────────────
            'touchZoom'                     => ['boolean', null,                                                              'Pinch-to-zoom on touch devices'],
            // ── Anchor/Stacked layout ─────────────────────────────────────────
            'stackedNavigationType'         => ['string',  ['dots', 'thumbs'],                                              'Navigation type for anchor layout'],
            'anchorZoom'                    => ['boolean', null,                                                              'Enable zoom in anchor layout'],
            'stackedItemGap'                => ['integer', [8, 100],                                                         'Gap between stacked images (px)'],
            // ── Sticky Split layout ───────────────────────────────────────────
            'stickySplitMainSide'           => ['string',  ['left', 'right'],                                               'Sticky image viewer column side'],
            'stickySplitMainWidthPercent'   => ['integer', [30, 70],                                                         'Sticky column width (%)'],
            // ── Hierarchy Grid layout ─────────────────────────────────────────
            'hierarchyGridColumns'          => ['integer', [2, 5],                                                           'Columns in hierarchy grid'],
            // ── Tiles layout ──────────────────────────────────────────────────
            'tilesColumns'                  => ['integer', [2, 5],                                                           'Columns in tiles grid'],
            'tilesShowMoreEnabled'          => ['boolean', null,                                                              'Show "Load More" button in tiles'],
            // ── Performance / misc ────────────────────────────────────────────
            'preloadImages'                 => ['boolean', null,                                                              'Preload all gallery images on page load'],
            'spinner'                       => ['boolean', null,                                                              'Show loading spinner'],
            'variationImageChange'          => ['boolean', null,                                                              'Swap image when variation selected'],
        ];
    }

    private function build_schema_description(array $schema): string
    {
        $lines = [];
        foreach ($schema as $key => [$type, $values, $label]) {
            if ($type === 'boolean') {
                $lines[] = "- {$key} (boolean): {$label}";
            } elseif ($type === 'string' && is_array($values)) {
                $lines[] = '- ' . $key . ' (string, one of: ' . implode(', ', $values) . '): ' . $label;
            } elseif (in_array($type, ['integer', 'number'], true) && is_array($values)) {
                $lines[] = "- {$key} ({$type}, {$values[0]}–{$values[1]}): {$label}";
            } else {
                $lines[] = "- {$key} ({$type}): {$label}";
            }
        }
        return implode("\n", $lines);
    }

    private function validate_settings(array $raw, array $schema): array
    {
        $validated = [];

        foreach ($raw as $key => $value) {
            if (! isset($schema[$key])) {
                continue;
            }

            [$type, $allowed] = $schema[$key];

            switch ($type) {
                case 'boolean':
                    $validated[$key] = (bool) $value;
                    break;

                case 'string':
                    $str = sanitize_text_field((string) $value);
                    if (is_array($allowed) && ! in_array($str, $allowed, true)) {
                        break;
                    }
                    $validated[$key] = $str;
                    break;

                case 'integer':
                    $int = (int) $value;
                    if (is_array($allowed)) {
                        $int = max($allowed[0], min($allowed[1], $int));
                    }
                    $validated[$key] = $int;
                    break;

                case 'number':
                    $num = (float) $value;
                    if (is_array($allowed)) {
                        $num = max((float) $allowed[0], min((float) $allowed[1], $num));
                    }
                    $validated[$key] = $num;
                    break;
            }
        }

        return $validated;
    }

    private function cleanup_tmp(?string $path): void
    {
        if ($path && file_exists($path)) {
            // phpcs:ignore WordPress.WP.AlternativeFunctions.unlink_unlink
            @unlink($path);
        }
    }
}
