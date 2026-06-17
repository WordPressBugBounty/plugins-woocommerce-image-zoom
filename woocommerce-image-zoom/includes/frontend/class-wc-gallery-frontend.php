<?php

if (! defined('ABSPATH')) exit;

class WPBean_PGS_WC_Gallery_Frontend
{

    const SCRIPT_HANDLE = 'wpbean-pgs-wc-gallery-script';

    /**
     * Constructor
     */
    public function __construct()
    {
        add_action('wp_enqueue_scripts', array($this, 'enqueue_scripts'));

        // Exclude our webpack IIFE bundle from every major caching plugin's
        // JS minifier / concatenator, which breaks the bundle syntax.

        // WP Rocket
        add_filter('rocket_exclude_js', array($this, 'exclude_from_cache_plugin'));
        add_filter('rocket_exclude_defer_js', array($this, 'exclude_from_cache_plugin'));
        add_filter('rocket_delay_js_exclusions', array($this, 'exclude_from_cache_plugin'));

        // Autoptimize (comma-separated string)
        add_filter('autoptimize_filter_js_exclude', array($this, 'autoptimize_exclude_js'));

        // LiteSpeed Cache
        add_filter('litespeed_optimize_js_excludes', array($this, 'exclude_from_cache_plugin'));
        add_filter('litespeed_optm_js_defer_exc', array($this, 'exclude_from_cache_plugin'));

        // SG Optimizer (SiteGround)
        add_filter('siteground_optimizer_combine_javascript_exclude', array($this, 'exclude_from_cache_plugin'));
        add_filter('siteground_optimizer_minify_javascript_exclude', array($this, 'exclude_from_cache_plugin'));

        // Jetpack Boost
        add_filter('jetpack_boost_minify_js_exclusions', array($this, 'exclude_from_cache_plugin'));

        // Swift Performance
        add_filter('swift_performance_exclude_js', array($this, 'exclude_from_cache_plugin'));

        // W3 Total Cache, WP Fastest Cache, Cloudflare Rocket Loader:
        // these don't offer filter-based exclusions — they check data-attributes
        // on the <script> tag. Only register the hook when one is actually active.
        if ($this->needs_script_tag_exclusion()) {
            add_filter('script_loader_tag', array($this, 'add_cache_exclusion_attrs'), 10, 2);
        }
    }

    /**
     * Returns true when W3 Total Cache, WP Fastest Cache, or the Cloudflare
     * plugin is active — the only systems that rely on script-tag attributes
     * for exclusion rather than a PHP filter.
     */
    private function needs_script_tag_exclusion()
    {
        return defined('W3TC_VERSION')                  // W3 Total Cache
            || class_exists('WpFastestCache')           // WP Fastest Cache
            || class_exists('CF\WordPress\Hooks');      // Cloudflare plugin
    }

    /**
     * Returns the site-root-relative path to the JS file (no scheme/host).
     * Most array-based caching filters match against this path.
     */
    private function get_js_relative_path()
    {
        return str_replace(site_url(), '', plugins_url('assets/build/wpbean-wc-gallery.js', __FILE__));
    }

    /**
     * Array-based exclusion filter used by WP Rocket, LiteSpeed Cache,
     * SG Optimizer, Jetpack Boost, Swift Performance.
     */
    public function exclude_from_cache_plugin($excluded)
    {
        $excluded[] = $this->get_js_relative_path();
        return $excluded;
    }

    /**
     * Autoptimize uses a comma-separated string, not an array.
     */
    public function autoptimize_exclude_js($excluded)
    {
        return $excluded . ', wpbean-wc-gallery.js';
    }

    /**
     * W3 Total Cache, WP Fastest Cache, and Cloudflare Rocket Loader check
     * for data-attributes on the <script> tag rather than a PHP filter.
     *
     *  data-w3tc-minify-ignore  — W3 Total Cache: skip this file during minification
     *  data-no-minify           — WP Fastest Cache: skip minification
     *  data-cfasync="false"     — Cloudflare Rocket Loader: exclude from async loading
     */
    public function add_cache_exclusion_attrs($tag, $handle)
    {
        if (self::SCRIPT_HANDLE !== $handle) {
            return $tag;
        }
        $tag = str_replace(
            '<script ',
            '<script data-w3tc-minify-ignore="1" data-no-minify="1" data-cfasync="false" ',
            $tag
        );
        return $tag;
    }

    /**
     * Enqueue scripts
     */
    public function enqueue_scripts()
    {
        $asset_file = plugin_dir_path(__FILE__) . 'assets/build/wpbean-wc-gallery.asset.php';

        if (! file_exists($asset_file)) {
            return;
        }

        $asset = include $asset_file;

        if (is_product()) {
            wp_enqueue_script(
                self::SCRIPT_HANDLE,
                plugins_url('assets/build/wpbean-wc-gallery.js', __FILE__),
                $asset['dependencies'],
                $asset['version'],
                array(
                    'in_footer' => true,
                )
            );
            wp_enqueue_style(
                'wpbean-pgs-wc-gallery-style',
                plugins_url('assets/build/style-wpbean-wc-gallery.css', __FILE__),
                array(),
                $asset['version'],
            );
        }
    }
}
