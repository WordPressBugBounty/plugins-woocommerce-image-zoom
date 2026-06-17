<?php

if (! defined('ABSPATH')) exit;

/**
 * Orchestrates the custom gallery output on single product pages.
 *
 * Responsibilities:
 *   – Remove the default WooCommerce product gallery hook.
 *   – Inject correctly-sized image URLs into WooCommerce variation data.
 *   – Render the gallery wrapper, loading skeleton, and hidden item data.
 *
 * Heavy lifting is delegated to:
 *   WPBean_PGS_WC_Gallery_Skeleton       – per-layout loading skeletons
 *   WPBean_PGS_WC_Gallery_Gallery_Items  – hidden <img> data carriers
 */
class WPBean_PGS_WC_Gallery_Loader
{

    public function __construct()
    {
        // Hook registration is deferred to the template_include filter so we can
        // inspect the *actual* template file WordPress resolves to.
        //
        // Page builders (Divi Theme Builder, Elementor, Beaver Builder Themer, …)
        // replace WooCommerce's single-product.php with their own file. Checking
        // the resolved template path is more reliable than querying each builder's
        // internal API: if WC's template is loading, we inject our gallery hook;
        // if any builder has swapped it out, we stay out of the way and let the
        // builder's widget / shortcode handle the gallery output instead.
        add_filter('template_include', [$this, 'maybe_register_gallery_hook'], PHP_INT_MAX);

        // Variation image-size injection runs during WooCommerce AJAX calls, not
        // inside the template loop, so it is needed regardless of template type.
        add_filter('woocommerce_available_variation', [$this, 'inject_variation_image_sizes'], 10, 3);
    }

    /**
     * Registers the hook-based gallery only when the resolved template is
     * WooCommerce's own single-product template (WC plugin copy or a
     * theme / child-theme override of it).
     *
     * When a page builder has replaced that file with its own template this
     * method is a transparent pass-through — the hook is never registered.
     *
     * @param  string $template Absolute path to the template file about to load.
     * @return string           Unchanged template path.
     */
    public function maybe_register_gallery_hook(string $template): string
    {
        if (is_product() && $this->is_wc_single_product_template($template)) {
            remove_action('woocommerce_before_single_product_summary', 'woocommerce_show_product_images', 20);
            add_action('woocommerce_before_single_product_summary', [$this, 'render_custom_gallery'], 20);
        }

        return $template;
    }

    /**
     * Returns true when $template is WooCommerce's own single-product template
     * or a WC-compatible theme / child-theme override of it.
     *
     * Builders like Divi Theme Builder return a different file (e.g. page.php
     * or a custom path), so this returns false for them.
     *
     * @param  string $template Absolute path being evaluated.
     * @return bool
     */
    private function is_wc_single_product_template(string $template): bool
    {
        // WC plugin's own copy.
        if (defined('WC_ABSPATH') && $template === WC_ABSPATH . 'templates/single-product.php') {
            return true;
        }

        // Theme or child-theme WC override (standard WC override location).
        foreach ([get_stylesheet_directory(), get_template_directory()] as $dir) {
            if ($template === $dir . '/woocommerce/single-product.php') {
                return true;
            }
        }

        return false;
    }

    /**
     * Adds wcpg_main_src and wcpg_thumb_src to the variation image object.
     *
     * @param array                $variation_data Variation data passed to JS.
     * @param WC_Product           $product        Parent product.
     * @param WC_Product_Variation $variation      The variation.
     * @return array
     */
    public function inject_variation_image_sizes($variation_data, $product, $variation)
    {
        $attachment_id = $variation->get_image_id();

        // Always flag whether this variation has its own image so that
        // zoom-init.js can skip swapping when WC falls back to the parent image.
        $variation_data['image']['wcpg_has_image'] = ! empty($attachment_id);

        if (! $attachment_id) {
            return $variation_data;
        }

        $repository = new WPBean_PGS_Rules_Repository();
        $result     = $repository->get_active_config_for_product($product->get_id());

        // No active rule → plugin is not running for this product; skip.
        if ($result['rule_id'] === 0) {
            return $variation_data;
        }

        [$main_size, $thumb_size] = self::_resolve_image_sizes($result['config']);

        $main_url  = wp_get_attachment_image_url($attachment_id, $main_size);
        $thumb_url = wp_get_attachment_image_url($attachment_id, $thumb_size);

        if ($main_url)  $variation_data['image']['wcpg_main_src']  = $main_url;
        if ($thumb_url) $variation_data['image']['wcpg_thumb_src'] = $thumb_url;

        return $variation_data;
    }

    /**
     * Product IDs whose gallery has been rendered via shortcode or block.
     * Used to suppress a redundant hook-based render in the same request
     * (e.g. a Divi template where both a [wpbean_product_gallery] shortcode
     * and the woocommerce_before_single_product_summary hook fire).
     *
     * @var array<int,true>
     */
    private static array $shortcode_rendered_pids = [];

    /**
     * Mark that a product's gallery has been rendered via shortcode/block so
     * that any subsequent hook-based render is suppressed for the same request.
     *
     * Called by WPBean_PGS_WC_Gallery_Shortcode before it outputs the gallery.
     */
    public static function suppress_hook_render(int $product_id): void
    {
        self::$shortcode_rendered_pids[$product_id] = true;
    }

    /**
     * Renders the custom gallery wrapper with the zoom config embedded as a
     * data attribute, the loading skeleton, and hidden item data carriers.
     *
     * Falls back to the default WooCommerce gallery when no active rule matches
     * the current product so unassigned products are never affected.
     */
    public function render_custom_gallery(bool $is_block = false): void
    {
        global $product;

        if (! is_a($product, 'WC_Product')) {
            return;
        }

        // If a shortcode or block has already rendered this product's gallery in
        // the current request, skip the hook-based render to prevent duplicates.
        // This guards against builder layouts (e.g. Divi) where the TB template
        // fires woocommerce_before_single_product_summary AND also contains a
        // [wpbean_product_gallery] shortcode.
        if (! $is_block && isset(self::$shortcode_rendered_pids[$product->get_id()])) {
            return;
        }

        // ── Rule check ────────────────────────────────────────────────────────
        $repository = new WPBean_PGS_Rules_Repository();
        $result     = $repository->get_active_config_for_product($product->get_id());

        if ($result['rule_id'] === 0) {
            // No active zoom rule — we removed the default hook in __construct,
            // so call the function directly here to restore the default output.
            woocommerce_show_product_images();
            return;
        }

        // ── Collect gallery attachments ───────────────────────────────────────
        $attachment_ids = array_filter(array_merge(
            [$product->get_image_id()],
            $product->get_gallery_image_ids()
        ));

        if (empty($attachment_ids) || ! $attachment_ids[0]) {
            echo wp_kses_post(wc_placeholder_img());
            return;
        }

        // ── Resolve config and sizes ──────────────────────────────────────────
        $rule_id     = $result['rule_id'];
        $config      = $result['config'];
        $config_attr = wp_json_encode($config, JSON_HEX_QUOT | JSON_HEX_APOS);

        [$main_size, $thumb_size] = self::_resolve_image_sizes($config);

        $video_items    = get_post_meta($product->get_id(), '_wcpg_videos', true);
        $video_items    = is_array($video_items) ? $video_items : [];
        $video_position = ($config['videoPosition'] ?? 'end') === 'start' ? 'start' : 'end';

        // ── Build wrapper class list ──────────────────────────────────────────
        $columns           = apply_filters('woocommerce_product_thumbnails_columns', 4); // phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedHooknameFound
        $post_thumbnail_id = $product->get_image_id();
        $wrapper_classes   = apply_filters(
            'woocommerce_single_product_image_gallery_classes', // phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedHooknameFound
            [
                'woocommerce-product-gallery',
                'woocommerce-product-gallery--' . ($post_thumbnail_id ? 'with-images' : 'without-images'),
                'woocommerce-product-gallery--columns-' . absint($columns),
                'images',
            ]
        );

        // In shortcode / block context the gallery lives inside a page-builder
        // layout module. Page builders (Divi, Elementor, …) scan for
        // .woocommerce-product-gallery inside their own module containers and
        // run their own WC-gallery initialisation on those elements, which
        // destroys our event bindings before our JS can set up zoom / lightbox.
        // Stripping all WC-specific wrapper classes prevents builders from
        // treating our gallery as a native WC gallery to be managed by them.
        if ($is_block) {
            $wrapper_classes = [];
        }

        $init_class = array_merge(['wpbean-product-gallery'], $wrapper_classes);

        // ── Gallery wrapper ───────────────────────────────────────────────────
        // data-wcpg-config is read by JS at init time — no inline <script> or
        // global variables needed.  data-wcpg-rule-id is useful for debugging.
        echo '<div'
            . ' class="'           . esc_attr(implode(' ', array_map('sanitize_html_class', $init_class))) . '"'
            . ' data-columns="'    . esc_attr($columns)      . '"'
            . ' data-wcpg-rule-id="' . esc_attr($rule_id)    . '"'
            . ' data-wcpg-config="' . esc_attr($config_attr) . '"'
            . '>';

        // ── Loading skeleton ──────────────────────────────────────────────────
        WPBean_PGS_WC_Gallery_Skeleton::render($config, $attachment_ids, $video_items, $main_size);

        // ── Hidden item data carriers ─────────────────────────────────────────
        if ($video_position === 'start') {
            WPBean_PGS_WC_Gallery_Gallery_Items::render_videos($video_items, $config, $thumb_size);
        }

        WPBean_PGS_WC_Gallery_Gallery_Items::render_images($attachment_ids, $main_size, $thumb_size, $config);

        if ($video_position === 'end') {
            WPBean_PGS_WC_Gallery_Gallery_Items::render_videos($video_items, $config, $thumb_size);
        }

        echo '</div>';
    }

    /**
     * Resolve main and thumbnail image sizes from config, falling back to safe
     * defaults when the stored value is not in the allowed-sizes allowlist.
     *
     * @param array $config Active plugin config.
     * @return array { 0: string $main_size, 1: string $thumb_size }
     */
    private static function _resolve_image_sizes(array $config): array
    {
        $allowed = [
            'thumbnail',
            'medium',
            'medium_large',
            'large',
            'full',
            'woocommerce_thumbnail',
            'woocommerce_single',
            'woocommerce_gallery_thumbnail',
        ];

        $main_size  = in_array($config['mainImageSize'] ?? '', $allowed, true)
            ? $config['mainImageSize']
            : 'large';

        $thumb_size = in_array($config['thumbnailImageSize'] ?? '', $allowed, true)
            ? $config['thumbnailImageSize']
            : 'woocommerce_gallery_thumbnail';

        return [$main_size, $thumb_size];
    }
}
