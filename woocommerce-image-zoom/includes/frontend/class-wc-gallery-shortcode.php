<?php

if (! defined('ABSPATH')) exit;

/**
 * Registers the [wpbean_product_gallery] shortcode.
 *
 * Usage:
 *   [wpbean_product_gallery]          — renders the current product's gallery.
 *   [wpbean_product_gallery id="42"]  — renders a specific product's gallery.
 */
class WPBean_PGS_WC_Gallery_Shortcode
{

    public function __construct()
    {
        add_shortcode('wpbean_product_gallery', [$this, 'render']);
    }

    /**
     * Shortcode callback — returns the gallery HTML as a string.
     *
     * @param array|string $atts Shortcode attributes.
     * @return string
     */
    public function render($atts): string
    {
        $atts       = shortcode_atts(['id' => 0], $atts, 'wpbean_product_gallery');
        $product_id = absint($atts['id']);

        // Resolve the product: explicit id attr > current global $product > current post.
        global $product;
        $restore_product = $product;

        if ($product_id) {
            $product = wc_get_product($product_id); // phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound
        } elseif (! is_a($product, 'WC_Product')) {
            $product = wc_get_product(get_the_ID()); // phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound
        }

        if (! is_a($product, 'WC_Product')) {
            $product = $restore_product; // phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound
            return '';
        }

        // Ensure JS + CSS are loaded when the shortcode is used outside a single
        // product page (where WPBean_PGS_WC_Gallery_Frontend only enqueues on is_product()).
        $this->maybe_enqueue_assets();

        // Signal to the hook-based renderer that this product's gallery is being
        // handled here, so it must not output a second gallery if
        // woocommerce_before_single_product_summary also fires (e.g. in Divi
        // Theme Builder layouts that still trigger WooCommerce hooks).
        WPBean_PGS_WC_Gallery_Loader::suppress_hook_render($product->get_id());

        ob_start();
        (new WPBean_PGS_WC_Gallery_Loader())->render_custom_gallery(true);
        $output = ob_get_clean();

        $product = $restore_product; // phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound

        return $output ?: '';
    }

    /**
     * Enqueues zoom scripts and styles when not already loaded.
     */
    private function maybe_enqueue_assets(): void
    {
        if (wp_script_is('wpbean-pgs-wc-gallery-script', 'enqueued')) {
            return;
        }

        $asset_file = plugin_dir_path(__FILE__) . 'assets/build/wpbean-wc-gallery.asset.php';

        if (! file_exists($asset_file)) {
            return;
        }

        $asset = include $asset_file;

        wp_enqueue_script(
            'wpbean-pgs-wc-gallery-script',
            plugins_url('assets/build/wpbean-wc-gallery.js', __FILE__),
            $asset['dependencies'],
            $asset['version'],
            ['in_footer' => true]
        );

        wp_enqueue_style(
            'wpbean-pgs-wc-gallery-style',
            plugins_url('assets/build/style-wpbean-wc-gallery.css', __FILE__),
            [],
            $asset['version']
        );
    }
}
