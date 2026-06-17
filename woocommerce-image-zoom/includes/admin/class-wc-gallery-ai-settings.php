<?php
defined('ABSPATH') || exit;

/**
 * AI Settings admin page.
 *
 * Provides a plugin-level fallback for storing AI provider credentials when the
 * site is on WordPress < 7.0 (no native Connectors API).  On WP 7.0+ a notice
 * guides users to the centralized Settings → Connectors page instead, but keys
 * stored here still work as a secondary fallback.
 *
 * Stored options:
 *   wpbean_pgs_ai_provider      — active provider slug ('openai'|'anthropic'|'google'|'mimo')
 *   wpbean_pgs_ai_openai_key    — OpenAI API key
 *   wpbean_pgs_ai_anthropic_key — Anthropic API key
 *   wpbean_pgs_ai_google_key    — Google Gemini API key
 *   wpbean_pgs_ai_mimo_key      — Xiaomi MiMo API key
 */
class WPBean_PGS_AI_Settings
{
    const ACTION_SAVE   = 'wpbean_pgs_ai_save';
    const NONCE_SAVE    = 'wpbean_pgs_ai_save_nonce';
    const OPT_PROVIDER  = 'wpbean_pgs_ai_provider';
    const OPT_OPENAI    = 'wpbean_pgs_ai_openai_key';
    const OPT_ANTHROPIC = 'wpbean_pgs_ai_anthropic_key';
    const OPT_GOOGLE    = 'wpbean_pgs_ai_google_key';
    const OPT_MIMO      = 'wpbean_pgs_ai_mimo_key';

    public function __construct()
    {
        add_action('admin_menu', [$this, 'register_submenu'], 90);
        add_action('admin_post_' . self::ACTION_SAVE, [$this, 'handle_save']);
    }

    /*--------------------------------------------------------------
    # MENU
    --------------------------------------------------------------*/

    public function register_submenu()
    {
        add_submenu_page(
            'wpbean-product-gallery-rules',
            esc_html__('AI Settings — Product Gallery', 'wpbean-product-gallery-slider-for-woocommerce'),
            esc_html__('AI Settings', 'wpbean-product-gallery-slider-for-woocommerce'),
            'manage_options',
            'wpbean-product-gallery-ai-settings',
            [$this, 'render_page']
        );
    }

    /*--------------------------------------------------------------
    # SAVE HANDLER
    --------------------------------------------------------------*/

    public function handle_save()
    {
        if (! current_user_can('manage_options')) {
            wp_die(esc_html__('Permission denied.', 'wpbean-product-gallery-slider-for-woocommerce'));
        }

        check_admin_referer(self::NONCE_SAVE);

        $provider = sanitize_key($_POST['ai_provider'] ?? 'openai');
        if (! in_array($provider, ['openai', 'anthropic', 'google', 'mimo'], true)) {
            $provider = 'openai';
        }

        update_option(self::OPT_PROVIDER, $provider, false);

        // Save keys — only update when a non-empty value is submitted
        // (empty field = keep existing; "clear" checkbox = delete)
        foreach (
            [
                'openai'    => self::OPT_OPENAI,
                'anthropic' => self::OPT_ANTHROPIC,
                'google'    => self::OPT_GOOGLE,
                'mimo'      => self::OPT_MIMO,
            ] as $slug => $option
        ) {
            $clear_field = 'clear_' . $slug . '_key';
            $key_field   = $slug . '_api_key';

            if (! empty($_POST[$clear_field])) {
                delete_option($option);
                continue;
            }

            $submitted = sanitize_text_field(wp_unslash($_POST[$key_field] ?? ''));
            if ('' !== $submitted) {
                update_option($option, $submitted, false);
            }
        }

        $this->set_notice('success', __('AI settings saved.', 'wpbean-product-gallery-slider-for-woocommerce'));

        wp_safe_redirect(admin_url('admin.php?page=wpbean-product-gallery-ai-settings'));
        exit;
    }

    /*--------------------------------------------------------------
    # PAGE RENDER
    --------------------------------------------------------------*/

    public function render_page()
    {
        if (! current_user_can('manage_options')) {
            wp_die(esc_html__('You do not have permission to access this page.', 'wpbean-product-gallery-slider-for-woocommerce'));
        }

        $notice           = $this->get_notice();
        $has_wp7_connectors = function_exists('wp_supports_ai') && wp_supports_ai();
        $active_provider  = get_option(self::OPT_PROVIDER, 'openai');

        $keys = [
            'openai'    => (string) get_option(self::OPT_OPENAI, ''),
            'anthropic' => (string) get_option(self::OPT_ANTHROPIC, ''),
            'google'    => (string) get_option(self::OPT_GOOGLE, ''),
            'mimo'      => (string) get_option(self::OPT_MIMO, ''),
        ];

        $this->clear_notice();

        $providers = [
            'openai' => [
                'label'       => 'OpenAI',
                'model'       => 'GPT-4o',
                'description' => __('Text and image analysis with the latest GPT-4o model. Supports both prompt and reference-image inputs.', 'wpbean-product-gallery-slider-for-woocommerce'),
                'key_url'     => 'https://platform.openai.com/api-keys',
                'color'       => '#10a37f',
                'bg'          => '#e6f7f3',
                'icon_path'   => 'M11.5 2C6.25 2 2 6.25 2 11.5S6.25 21 11.5 21 21 16.75 21 11.5 16.75 2 11.5 2zm0 2c4.69 0 8.5 3.81 8.5 8.5S16.19 20 11.5 20 3 16.19 3 11.5 6.81 4 11.5 4z',
            ],
            'anthropic' => [
                'label'       => 'Anthropic Claude',
                'model'       => 'Claude 3.5 Sonnet',
                'description' => __('Intelligent gallery design suggestions from Anthropic\'s Claude. Excellent at following detailed instructions and analysing images.', 'wpbean-product-gallery-slider-for-woocommerce'),
                'key_url'     => 'https://platform.claude.com/settings/keys',
                'color'       => '#d4693d',
                'bg'          => '#fdf0e8',
                'icon_path'   => 'M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm0 2a8 8 0 1 1 0 16A8 8 0 0 1 12 4zm-1 4v4H7l5 6 5-6h-4V8h-2z',
            ],
            'google' => [
                'label'       => 'Google Gemini',
                'model'       => 'Gemini 1.5 Pro',
                'description' => __('Multimodal AI from Google. Great for visual reference analysis with Gemini\'s vision capabilities.', 'wpbean-product-gallery-slider-for-woocommerce'),
                'key_url'     => 'https://aistudio.google.com/app/apikey',
                'color'       => '#4285f4',
                'bg'          => '#e8f0fe',
                'icon_path'   => 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z',
            ],
            'mimo' => [
                'label'       => 'Xiaomi MiMo',
                'model'       => 'MiMo-V2.5',
                'description' => __('Multimodal AI from Xiaomi. Supports text, image, audio and video with the MiMo-V2.5 vision model.', 'wpbean-product-gallery-slider-for-woocommerce'),
                'key_url'     => 'https://mimo.mi.com/docs/en-US/quick-start/summary/welcome',
                'color'       => '#FF6900',
                'bg'          => '#fff3e0',
                'icon_path'   => 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 2c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8zm-1 4v4H7l5 5 5-5h-4V8h-2z',
            ],
        ];
?>
        <div class="wrap wpbean-pgs-ai">
            <?php $this->inline_styles(); ?>

            <h1 class="screen-reader-text"><?php esc_html_e('AI Settings', 'wpbean-product-gallery-slider-for-woocommerce'); ?></h1>
            <hr class="wp-header-end">

            <?php if ($notice) : ?>
                <div class="wpbean-pgs-ai__notice wpbean-pgs-ai__notice--<?php echo esc_attr($notice['type']); ?>" role="alert">
                    <span class="wpbean-pgs-ai__notice-icon">
                        <?php if ('success' === $notice['type']) : ?>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <path d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        <?php else : ?>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <path d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                            </svg>
                        <?php endif; ?>
                    </span>
                    <span><?php echo esc_html($notice['message']); ?></span>
                </div>
            <?php endif; ?>

            <!-- Page header -->
            <div class="wpbean-pgs-ai__page-header">
                <div class="wpbean-pgs-ai__page-header-inner">
                    <div class="wpbean-pgs-ai__page-header-icon">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <path d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
                        </svg>
                    </div>
                    <div>
                        <p class="wpbean-pgs-ai__page-title"><?php esc_html_e('AI Settings', 'wpbean-product-gallery-slider-for-woocommerce'); ?></p>
                        <p class="wpbean-pgs-ai__page-subtitle"><?php esc_html_e('Connect an AI provider to generate gallery settings from text prompts or reference images.', 'wpbean-product-gallery-slider-for-woocommerce'); ?></p>
                    </div>
                </div>
            </div>

            <?php if ($has_wp7_connectors) : ?>
                <!-- WP 7.0+ Connectors notice -->
                <div class="wpbean-pgs-ai__wp7-notice">
                    <div class="wpbean-pgs-ai__wp7-notice-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </div>
                    <div class="wpbean-pgs-ai__wp7-notice-body">
                        <p class="wpbean-pgs-ai__wp7-notice-title"><?php esc_html_e('WordPress Connectors available', 'wpbean-product-gallery-slider-for-woocommerce'); ?></p>
                        <p class="wpbean-pgs-ai__wp7-notice-desc">
                            <?php
                            printf(
                                /* translators: %s: link to wp-admin/options-connectors.php */
                                esc_html__('Your site runs WordPress 7.0+. You can manage AI provider credentials centrally on the %s page — keys stored there are used automatically and shared across all plugins.', 'wpbean-product-gallery-slider-for-woocommerce'),
                                '<a href="' . esc_url(admin_url('options-connectors.php')) . '" target="_blank" rel="noopener">' . esc_html__('Settings → Connectors', 'wpbean-product-gallery-slider-for-woocommerce') . '</a>'
                            );
                            ?>
                        </p>
                        <p class="wpbean-pgs-ai__wp7-notice-desc" style="margin-top:4px">
                            <?php esc_html_e('Keys entered below act as a secondary fallback if no Connector is configured.', 'wpbean-product-gallery-slider-for-woocommerce'); ?>
                        </p>
                    </div>
                    <a href="<?php echo esc_url(admin_url('options-connectors.php')); ?>"
                        target="_blank" rel="noopener"
                        class="wpbean-pgs-ai__wp7-notice-btn">
                        <?php esc_html_e('Open Connectors', 'wpbean-product-gallery-slider-for-woocommerce'); ?>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                </div>
            <?php endif; ?>

            <!-- Settings form -->
            <form method="post" action="<?php echo esc_url(admin_url('admin-post.php')); ?>" id="wpbean-pgs-ai-form" novalidate>
                <?php wp_nonce_field(self::NONCE_SAVE); ?>
                <input type="hidden" name="action" value="<?php echo esc_attr(self::ACTION_SAVE); ?>">

                <!-- Active provider selector -->
                <div class="wpbean-pgs-ai__section">
                    <h2 class="wpbean-pgs-ai__section-title">
                        <?php esc_html_e('Active Provider', 'wpbean-product-gallery-slider-for-woocommerce'); ?>
                    </h2>
                    <p class="wpbean-pgs-ai__section-desc">
                        <?php esc_html_e('Select the AI provider to use for gallery settings generation. Each provider requires its own API key.', 'wpbean-product-gallery-slider-for-woocommerce'); ?>
                    </p>

                    <div class="wpbean-pgs-ai__provider-list" id="wpbean-provider-grid">
                        <?php foreach ($providers as $slug => $p) :
                            $is_active = ($active_provider === $slug);
                            $has_key   = ! empty($keys[$slug]);
                        ?>
                            <label class="wpbean-pgs-ai__prow<?php echo $is_active ? ' is-active' : ''; ?>"
                                data-slug="<?php echo esc_attr($slug); ?>">
                                <input type="radio" name="ai_provider"
                                    value="<?php echo esc_attr($slug); ?>"
                                    <?php checked($is_active); ?>
                                    class="wpbean-pgs-ai__provider-radio">

                                <!-- Radio dot -->
                                <div class="wpbean-pgs-ai__prow-dot" aria-hidden="true"></div>

                                <!-- Name + model -->
                                <div class="wpbean-pgs-ai__prow-body">
                                    <span class="wpbean-pgs-ai__prow-name"><?php echo esc_html($p['label']); ?></span>
                                    <span class="wpbean-pgs-ai__prow-model"><?php echo esc_html($p['model']); ?></span>
                                </div>

                                <!-- Key status -->
                                <div class="wpbean-pgs-ai__prow-status">
                                    <?php if ($has_key) : ?>
                                        <span class="wpbean-pgs-ai__status-badge wpbean-pgs-ai__status-badge--set">
                                            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                                            <?php esc_html_e('Key set', 'wpbean-product-gallery-slider-for-woocommerce'); ?>
                                        </span>
                                    <?php else : ?>
                                        <span class="wpbean-pgs-ai__status-badge wpbean-pgs-ai__status-badge--unset">
                                            <?php esc_html_e('No key', 'wpbean-product-gallery-slider-for-woocommerce'); ?>
                                        </span>
                                    <?php endif; ?>
                                </div>
                            </label>
                        <?php endforeach; ?>
                    </div>
                </div>

                <!-- API Key cards -->
                <div class="wpbean-pgs-ai__section">
                    <h2 class="wpbean-pgs-ai__section-title">
                        <?php esc_html_e('API Keys', 'wpbean-product-gallery-slider-for-woocommerce'); ?>
                    </h2>
                    <p class="wpbean-pgs-ai__section-desc">
                        <?php esc_html_e('Enter your API keys below. Keys are stored securely in your WordPress database and are only accessible to administrators.', 'wpbean-product-gallery-slider-for-woocommerce'); ?>
                    </p>

                    <div class="wpbean-pgs-io__grid">
                        <?php foreach ($providers as $slug => $p) :
                            $stored_key  = $keys[$slug];
                            $masked      = $this->mask_key($stored_key);
                            $field_name  = $slug . '_api_key';
                            $clear_name  = 'clear_' . $slug . '_key';
                        ?>
                            <div class="wpbean-pgs-ai__key-card" id="wpbean-key-card-<?php echo esc_attr($slug); ?>">
                                <div class="wpbean-pgs-io__card-header">
                                    <div class="wpbean-pgs-ai__card-icon" style="background:<?php echo esc_attr($p['bg']); ?>; color:<?php echo esc_attr($p['color']); ?>">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <rect x="3" y="11" width="18" height="11" rx="2" />
                                            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 class="wpbean-pgs-io__card-title"><?php echo esc_html($p['label']); ?></h3>
                                        <p class="wpbean-pgs-io__card-desc"><?php echo esc_html($p['description']); ?></p>
                                    </div>
                                </div>

                                <div class="wpbean-pgs-io__card-body">
                                    <label class="wpbean-pgs-ai__key-label" for="wpbean-key-<?php echo esc_attr($slug); ?>">
                                        <?php esc_html_e('API Key', 'wpbean-product-gallery-slider-for-woocommerce'); ?>
                                    </label>

                                    <div class="wpbean-pgs-ai__key-row">
                                        <input type="password"
                                            id="wpbean-key-<?php echo esc_attr($slug); ?>"
                                            name="<?php echo esc_attr($field_name); ?>"
                                            value=""
                                            placeholder="<?php echo $stored_key ? esc_attr($masked) : esc_attr__('Paste your API key here…', 'wpbean-product-gallery-slider-for-woocommerce'); ?>"
                                            autocomplete="off"
                                            spellcheck="false"
                                            class="wpbean-pgs-ai__key-input">
                                        <button type="button" class="wpbean-pgs-ai__key-toggle button" data-target="wpbean-key-<?php echo esc_attr($slug); ?>" title="<?php esc_attr_e('Show / hide key', 'wpbean-product-gallery-slider-for-woocommerce'); ?>">
                                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                                                <circle cx="12" cy="12" r="3" />
                                            </svg>
                                        </button>
                                    </div>

                                    <?php if ($stored_key) : ?>
                                        <div class="wpbean-pgs-ai__key-meta">
                                            <span class="wpbean-pgs-ai__key-set-hint">
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
                                                <?php echo esc_html($masked); ?>
                                                <span class="wpbean-pgs-ai__key-hint-note"><?php esc_html_e('— leave blank to keep', 'wpbean-product-gallery-slider-for-woocommerce'); ?></span>
                                            </span>
                                            <label class="wpbean-pgs-ai__key-remove" title="<?php esc_attr_e('Check to remove this API key on save', 'wpbean-product-gallery-slider-for-woocommerce'); ?>">
                                                <input type="checkbox" name="<?php echo esc_attr($clear_name); ?>" value="1" class="wpbean-pgs-ai__remove-cb">
                                                <span class="wpbean-pgs-ai__key-remove-inner">
                                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>
                                                    <?php esc_html_e('Remove key', 'wpbean-product-gallery-slider-for-woocommerce'); ?>
                                                </span>
                                            </label>
                                        </div>
                                    <?php endif; ?>

                                    <p class="wpbean-pgs-ai__key-get-hint">
                                        <?php esc_html_e('Get your API key from:', 'wpbean-product-gallery-slider-for-woocommerce'); ?>
                                        <a href="<?php echo esc_url($p['key_url']); ?>" target="_blank" rel="noopener noreferrer">
                                            <?php echo esc_url($p['key_url']); ?>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        <?php endforeach; ?>
                    </div>
                </div>

                <!-- Save footer -->
                <div class="wpbean-pgs-ai__save-row">
                    <button type="submit" class="button button-primary wpbean-pgs-io__btn">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <path d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <?php esc_html_e('Save AI Settings', 'wpbean-product-gallery-slider-for-woocommerce'); ?>
                    </button>
                </div>
            </form>
        </div>
    <?php
        $this->inline_scripts();
    }

    /*--------------------------------------------------------------
    # PUBLIC HELPERS — used by the REST controller
    --------------------------------------------------------------*/

    public static function get_active_provider(): string
    {
        return (string) get_option(self::OPT_PROVIDER, 'openai');
    }

    public static function get_api_key(string $provider): string
    {
        $map = [
            'openai'    => self::OPT_OPENAI,
            'anthropic' => self::OPT_ANTHROPIC,
            'google'    => self::OPT_GOOGLE,
            'mimo'      => self::OPT_MIMO,
        ];

        if (! isset($map[$provider])) {
            return '';
        }

        return (string) get_option($map[$provider], '');
    }

    public static function has_any_key(): bool
    {
        return (
            '' !== self::get_api_key('openai')    ||
            '' !== self::get_api_key('anthropic') ||
            '' !== self::get_api_key('google')    ||
            '' !== self::get_api_key('mimo')
        );
    }

    /*--------------------------------------------------------------
    # PRIVATE HELPERS
    --------------------------------------------------------------*/

    private function mask_key(string $key): string
    {
        if (strlen($key) <= 8) {
            return str_repeat('•', strlen($key));
        }

        return substr($key, 0, 4) . str_repeat('•', strlen($key) - 8) . substr($key, -4);
    }

    private function get_transient_key(): string
    {
        return 'wpbean_pgs_ai_notice_' . get_current_user_id();
    }

    private function set_notice(string $type, string $message): void
    {
        set_transient($this->get_transient_key(), compact('type', 'message'), MINUTE_IN_SECONDS);
    }

    private function get_notice(): ?array
    {
        $notice = get_transient($this->get_transient_key());
        return is_array($notice) ? $notice : null;
    }

    private function clear_notice(): void
    {
        delete_transient($this->get_transient_key());
    }

    /*--------------------------------------------------------------
    # INLINE STYLES
    --------------------------------------------------------------*/

    private function inline_styles(): void
    {
    ?>
        <style>
            /* ── Page wrapper ────────────────────────────────────────── */
            .wpbean-pgs-ai {
                max-width: 960px;
            }

            /* ── Page header ─────────────────────────────────────────── */
            .wpbean-pgs-ai__page-header {
                background: #fff;
                border: 1px solid #e2e4e7;
                border-radius: 8px;
                padding: 20px 24px;
                margin: 16px 0 24px;
            }

            .wpbean-pgs-ai__page-header-inner {
                display: flex;
                align-items: center;
                gap: 14px;
                color: #1d2327;
            }

            .wpbean-pgs-ai__page-header-icon {
                width: 48px;
                height: 48px;
                background: linear-gradient(135deg, #ede9fe, #fce7f3);
                border-radius: 12px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #7c3aed;
                flex-shrink: 0;
            }

            .wpbean-pgs-ai__page-title {
                font-size: 18px;
                font-weight: 700;
                margin: 0 0 3px;
                padding: 0;
                line-height: 1.3;
                color: #1d2327;
            }

            .wpbean-pgs-ai__page-subtitle {
                margin: 0;
                font-size: 13px;
                color: #646970;
            }

            /* ── Notice ──────────────────────────────────────────────── */
            .wpbean-pgs-ai__notice {
                display: flex;
                align-items: flex-start;
                gap: 10px;
                padding: 12px 16px;
                border-radius: 6px;
                border-left: 4px solid transparent;
                margin-bottom: 20px;
                font-size: 13px;
                line-height: 1.5;
            }

            .wpbean-pgs-ai__notice--success {
                background: #f0faf3;
                border-color: #00a32a;
                color: #1d2327;
            }

            .wpbean-pgs-ai__notice--success .wpbean-pgs-ai__notice-icon {
                color: #00a32a;
                flex-shrink: 0;
                margin-top: 1px;
            }

            .wpbean-pgs-ai__notice--error {
                background: #fcf0f1;
                border-color: #d63638;
                color: #1d2327;
            }

            .wpbean-pgs-ai__notice--error .wpbean-pgs-ai__notice-icon {
                color: #d63638;
                flex-shrink: 0;
                margin-top: 1px;
            }

            /* ── WP 7.0 info banner ──────────────────────────────────── */
            .wpbean-pgs-ai__wp7-notice {
                display: flex;
                align-items: center;
                gap: 16px;
                background: linear-gradient(135deg, #eff6ff 0%, #f5f3ff 100%);
                border: 1px solid #bfdbfe;
                border-left: 4px solid #3b82f6;
                border-radius: 8px;
                padding: 16px 20px;
                margin-bottom: 24px;
                flex-wrap: wrap;
            }

            .wpbean-pgs-ai__wp7-notice-icon {
                width: 40px;
                height: 40px;
                background: #3b82f6;
                border-radius: 10px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #fff;
                flex-shrink: 0;
            }

            .wpbean-pgs-ai__wp7-notice-body {
                flex: 1;
                min-width: 200px;
            }

            .wpbean-pgs-ai__wp7-notice-title {
                font-size: 13.5px;
                font-weight: 700;
                color: #1e3a5f;
                margin: 0 0 4px;
                padding: 0;
            }

            .wpbean-pgs-ai__wp7-notice-desc {
                font-size: 12.5px;
                color: #374151;
                margin: 0;
                padding: 0;
                line-height: 1.5;
            }

            .wpbean-pgs-ai__wp7-notice-btn {
                display: inline-flex;
                align-items: center;
                gap: 6px;
                padding: 8px 16px;
                background: #3b82f6;
                color: #fff !important;
                border-radius: 6px;
                text-decoration: none !important;
                font-size: 12.5px;
                font-weight: 600;
                white-space: nowrap;
                transition: background 0.15s;
                flex-shrink: 0;
            }

            .wpbean-pgs-ai__wp7-notice-btn:hover {
                background: #2563eb !important;
                color: #fff !important;
            }

            /* ── Sections ────────────────────────────────────────────── */
            .wpbean-pgs-ai__section {
                background: #fff;
                border: 1px solid #e2e4e7;
                border-radius: 8px;
                padding: 22px 24px;
                margin-bottom: 24px;
                box-shadow: 0 1px 3px rgba(0, 0, 0, .04);
            }

            .wpbean-pgs-ai__section-title {
                font-size: 14px;
                font-weight: 700;
                color: #1d2327;
                margin: 0 0 6px;
                padding: 0;
            }

            .wpbean-pgs-ai__section-desc {
                font-size: 12.5px;
                color: #646970;
                margin: 0 0 20px;
            }

            /* ── Provider selector list ──────────────────────────────── */
            .wpbean-pgs-ai__provider-radio {
                position: absolute;
                opacity: 0;
                width: 0;
                height: 0;
                pointer-events: none;
            }

            .wpbean-pgs-ai__provider-list {
                display: flex;
                flex-direction: column;
                border: 1px solid #e2e4e7;
                border-radius: 8px;
                overflow: hidden;
            }

            .wpbean-pgs-ai__prow {
                display: flex;
                align-items: center;
                gap: 14px;
                padding: 13px 16px;
                cursor: pointer;
                background: #fff;
                border-bottom: 1px solid #e2e4e7;
                position: relative;
                transition: background 0.12s;
                user-select: none;
            }

            .wpbean-pgs-ai__prow:last-child {
                border-bottom: none;
            }

            .wpbean-pgs-ai__prow:hover {
                background: #fafafa;
            }

            .wpbean-pgs-ai__prow.is-active {
                background: #faf7ff;
            }

            .wpbean-pgs-ai__prow.is-active::before {
                content: '';
                position: absolute;
                left: 0;
                top: 0;
                bottom: 0;
                width: 3px;
                background: #7c3aed;
                border-radius: 0 2px 2px 0;
            }

            /* Radio dot */
            .wpbean-pgs-ai__prow-dot {
                width: 17px;
                height: 17px;
                border-radius: 50%;
                border: 2px solid #c3c4c7;
                flex-shrink: 0;
                transition: border-color 0.15s;
                box-sizing: border-box;
            }

            .wpbean-pgs-ai__prow.is-active .wpbean-pgs-ai__prow-dot {
                border-color: #7c3aed;
                border-width: 5px;
                background: #7c3aed;
                box-shadow: inset 0 0 0 3px #fff;
            }

            /* Name + model */
            .wpbean-pgs-ai__prow-body {
                flex: 1;
                display: flex;
                align-items: center;
                gap: 10px;
                min-width: 0;
            }

            .wpbean-pgs-ai__prow-name {
                font-size: 13.5px;
                font-weight: 700;
                color: #1d2327;
                white-space: nowrap;
            }

            .wpbean-pgs-ai__prow-model {
                font-size: 11px;
                color: #8c8f94;
                background: #f0f0f1;
                padding: 2px 8px;
                border-radius: 999px;
                white-space: nowrap;
            }

            .wpbean-pgs-ai__prow.is-active .wpbean-pgs-ai__prow-model {
                background: #ede9fe;
                color: #6d28d9;
            }

            /* Status badge column */
            .wpbean-pgs-ai__prow-status {
                flex-shrink: 0;
            }

            .wpbean-pgs-ai__status-badge {
                display: inline-flex;
                align-items: center;
                gap: 4px;
                padding: 3px 8px;
                border-radius: 999px;
                font-size: 11px;
                font-weight: 600;
            }

            .wpbean-pgs-ai__status-badge--set {
                background: #f0faf3;
                color: #00a32a;
            }

            .wpbean-pgs-ai__status-badge--unset {
                background: #f0f0f1;
                color: #8c8f94;
            }

            /* ── Key card ────────────────────────────────────────────── */
            .wpbean-pgs-ai__key-card {
                background: #fff;
                border: 1px solid #e2e4e7;
                border-radius: 8px;
                overflow: hidden;
                display: flex;
                flex-direction: column;
                box-shadow: 0 1px 3px rgba(0, 0, 0, .04);
                transition: border-color 0.2s;
            }

            .wpbean-pgs-ai__key-card.is-active-provider {
                border-color: #7c3aed;
                box-shadow: 0 0 0 2px rgba(124, 58, 237, .1), 0 1px 3px rgba(0, 0, 0, .04);
            }

            .wpbean-pgs-ai__card-icon {
                width: 42px;
                height: 42px;
                border-radius: 10px;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-shrink: 0;
            }

            .wpbean-pgs-ai__key-label {
                display: block;
                font-size: 12px;
                font-weight: 600;
                color: #646970;
                text-transform: uppercase;
                letter-spacing: 0.04em;
                margin-bottom: 7px;
            }

            .wpbean-pgs-ai__key-row {
                display: flex;
                gap: 8px;
            }

            .wpbean-pgs-ai__key-input {
                flex: 1;
                font-size: 13px;
                font-family: monospace;
                padding: 8px 12px;
                border: 1px solid #c3c4c7;
                border-radius: 4px;
                color: #1d2327;
                background: #fafafa;
                transition: border-color 0.15s;
            }

            .wpbean-pgs-ai__key-input:focus {
                border-color: #0073aa;
                background: #fff;
                outline: none;
                box-shadow: 0 0 0 1px #0073aa;
            }

            .wpbean-pgs-ai__key-toggle {
                flex-shrink: 0;
                display: inline-flex !important;
                align-items: center;
                justify-content: center;
                width: 36px;
                padding: 0 !important;
                color: #646970;
            }

            /* ── Saved key meta row ──────────────────────────────────── */
            .wpbean-pgs-ai__key-meta {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 10px;
                margin-top: 10px;
                padding: 8px 10px;
                background: #f6fef9;
                border: 1px solid #d1fae5;
                border-radius: 6px;
            }

            .wpbean-pgs-ai__key-set-hint {
                display: flex;
                align-items: center;
                gap: 5px;
                font-size: 11.5px;
                color: #15803d;
                font-weight: 500;
                font-family: monospace;
                flex: 1;
                min-width: 0;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }

            .wpbean-pgs-ai__key-set-hint svg {
                flex-shrink: 0;
                color: #16a34a;
            }

            .wpbean-pgs-ai__key-hint-note {
                font-weight: 400;
                color: #6b7280;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
                white-space: nowrap;
            }

            /* Remove key — styled checkbox-as-button */
            .wpbean-pgs-ai__key-remove {
                display: inline-flex;
                align-items: center;
                cursor: pointer;
                flex-shrink: 0;
            }

            .wpbean-pgs-ai__remove-cb {
                position: absolute;
                opacity: 0;
                width: 0;
                height: 0;
                pointer-events: none;
            }

            .wpbean-pgs-ai__key-remove-inner {
                display: inline-flex;
                align-items: center;
                gap: 5px;
                padding: 4px 10px;
                border: 1px solid #e5e7eb;
                border-radius: 5px;
                font-size: 11.5px;
                font-weight: 500;
                color: #6b7280;
                background: #fff;
                transition: all 0.15s;
                white-space: nowrap;
            }

            .wpbean-pgs-ai__key-remove:hover .wpbean-pgs-ai__key-remove-inner {
                border-color: #fca5a5;
                background: #fff5f5;
                color: #dc2626;
            }

            /* When checkbox is checked — turn red */
            .wpbean-pgs-ai__remove-cb:checked + .wpbean-pgs-ai__key-remove-inner {
                border-color: #dc2626;
                background: #fee2e2;
                color: #dc2626;
                font-weight: 600;
            }

            .wpbean-pgs-ai__key-get-hint {
                font-size: 11.5px;
                color: #8c8f94;
                margin: 10px 0 0;
            }

            .wpbean-pgs-ai__key-get-hint a {
                color: #0073aa;
            }

            /* ── Save row ─────────────────────────────────────────────── */
            .wpbean-pgs-ai__save-row {
                padding-bottom: 24px;
            }

            /* ── Re-used io card primitives ─────────────────────────── */
            /* These classes come from the import/export CSS which is NOT
               loaded on this page, so we define them here. */
            .wpbean-pgs-ai .wpbean-pgs-io__grid {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 18px;
                align-items: start;
            }

            @media (max-width: 700px) {
                .wpbean-pgs-ai .wpbean-pgs-io__grid {
                    grid-template-columns: 1fr;
                }
            }

            .wpbean-pgs-ai .wpbean-pgs-io__card-header {
                display: flex;
                align-items: flex-start;
                gap: 14px;
                padding: 16px 18px;
                border-bottom: 1px solid #e2e4e7;
                background: #f9fafb;
            }

            .wpbean-pgs-ai .wpbean-pgs-io__card-title {
                font-size: 13.5px;
                font-weight: 700;
                color: #1d2327;
                margin: 0 0 4px;
                padding: 0;
                line-height: 1.3;
            }

            .wpbean-pgs-ai .wpbean-pgs-io__card-desc {
                font-size: 12px;
                color: #646970;
                margin: 0;
                padding: 0;
                line-height: 1.5;
            }

            .wpbean-pgs-ai .wpbean-pgs-io__card-body {
                padding: 16px 18px;
                flex: 1;
            }

            .wpbean-pgs-ai .wpbean-pgs-io__checkbox-label {
                display: flex;
                align-items: center;
                gap: 8px;
                font-size: 12.5px;
                cursor: pointer;
                color: #1d2327;
            }

            .wpbean-pgs-ai .wpbean-pgs-io__btn {
                display: inline-flex !important;
                align-items: center;
                gap: 7px;
            }
        </style>
    <?php
    }

    /*--------------------------------------------------------------
    # INLINE SCRIPTS
    --------------------------------------------------------------*/

    private function inline_scripts(): void
    {
    ?>
        <script>
            (function() {
                'use strict';

                // ── Provider list radio selection ─────────────────────────
                var grid = document.getElementById('wpbean-provider-grid');
                if (grid) {
                    grid.addEventListener('change', function(e) {
                        if (e.target.type !== 'radio') return;
                        var slug = e.target.value;

                        // Update row active state
                        grid.querySelectorAll('.wpbean-pgs-ai__prow').forEach(function(row) {
                            row.classList.toggle('is-active', row.dataset.slug === slug);
                        });

                        // Highlight the matching key card
                        document.querySelectorAll('.wpbean-pgs-ai__key-card').forEach(function(card) {
                            card.classList.toggle('is-active-provider', card.id === 'wpbean-key-card-' + slug);
                        });
                    });

                    // Init key card highlight on load
                    var checked = grid.querySelector('input[type=radio]:checked');
                    if (checked) {
                        var activeSlug = checked.value;
                        document.querySelectorAll('.wpbean-pgs-ai__key-card').forEach(function(card) {
                            card.classList.toggle('is-active-provider', card.id === 'wpbean-key-card-' + activeSlug);
                        });
                    }
                }

                // ── Show / hide key toggle ────────────────────────────────
                document.querySelectorAll('.wpbean-pgs-ai__key-toggle').forEach(function(btn) {
                    btn.addEventListener('click', function() {
                        var input = document.getElementById(btn.dataset.target);
                        if (!input) return;
                        input.type = input.type === 'password' ? 'text' : 'password';
                    });
                });
            })();
        </script>
<?php
    }
}
