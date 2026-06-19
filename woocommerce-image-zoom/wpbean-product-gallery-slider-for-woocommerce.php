<?php

/**
 * Plugin Name: WPBean Product Gallery Slider for WooCommerce
 * Description: A powerful and user-friendly plugin that transforms your WooCommerce product galleries into stunning sliders, enhancing the visual appeal of your online store and providing an engaging shopping experience for your customers.
 * Version: 3.0.1
 * Author: WPBean
 * Author URI: https://wpbean.com
 * Text Domain: wpbean-product-gallery-slider-for-woocommerce
 * Domain Path: /languages
 * Requires at least: 5.8
 * Tested up to: 6.9
 * Requires PHP: 7.4
 * Requires Plugins: woocommerce
 * WC requires at least: 7.0
 * WC tested up to: 10.4.3
 * License: GPL v2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 *
 * @package WPBean Product Gallery Slider for WooCommerce
 */

if (!defined('ABSPATH')) {
    exit;
}

if (function_exists('wpbean_pgs_fs')) {
    wpbean_pgs_fs()->set_basename(true, __FILE__);
} else {
    /**
     * DO NOT REMOVE THIS IF, IT IS ESSENTIAL FOR THE
     * `function_exists` CALL ABOVE TO PROPERLY WORK.
     */
    if (!function_exists('wpbean_pgs_fs')) {
        require_once __DIR__ . '/includes/freemius.php';
    }

    /**
     * The main plugin class
     */
    if (! class_exists('WPBean_PGS_Plugin')) {
        final class WPBean_PGS_Plugin
        {
            /**
             * Plugin version
             *
             * @var string
             */
            const version = '3.0.1';

            /**
             * Class construcotr
             */
            private function __construct()
            {
                $this->define_constants();

                include_once ABSPATH . 'wp-admin/includes/plugin.php';

                if (is_plugin_active('woocommerce/woocommerce.php')) {
                    add_action('before_woocommerce_init', array($this, 'hpos_compatibility'));
                    register_activation_hook(__FILE__, array($this, 'activate'));
                    add_action('plugins_loaded', array($this, 'init_plugin'));
                    add_action('init', array($this, 'init_hook'), apply_filters('wpbean_pgs_plugin_init_hook_priotity', 9));
                } else {
                    add_action('admin_notices', array($this, 'dependency_admin_notices'));
                }
            }

            /**
             * Initializes a singleton instance
             *
             * @return \WPBean_PGS_Plugin
             */
            public static function init()
            {
                static $instance = false;

                if (! $instance) {
                    $instance = new self();
                }

                return $instance;
            }

            /**
             * Define the required plugin constants
             *
             * @return void
             */
            public function define_constants()
            {
                define('WPBean_PGS_DB_VERSION', '1.1.0');
                define('WPBean_PGS_VERSION', self::version);
                define('WPBean_PGS_FILE', __FILE__);
                define('WPBean_PGS_PATH', __DIR__);
                define('WPBean_PGS_URL', plugins_url('', WPBean_PGS_FILE));
                define('WPBean_PGS_ASSETS', WPBean_PGS_URL . '/assets');
                define('WPBean_PGS_PREMIUM', plugin_basename(__FILE__));
                define('WPBean_PGS_PRO_PLUGIN_PATH', trailingslashit(plugin_dir_path(__FILE__)));
            }

            /**
             * Add plugin action links
             *
             * @return array
             */
            public function plugin_actions($links)
            {
                $links[] = '<a href="' . esc_url(admin_url('/admin.php?page=wpbean-product-gallery-rules', false)) . '">' . esc_html__('Settings', 'wpbean-product-gallery-slider-for-woocommerce') . '</a>';
                $links[] = '<a href="https://wpbean.com/support/" target="_blank">' . esc_html__('Support', 'wpbean-product-gallery-slider-for-woocommerce') . '</a>';
                $links[] = '<a href="https://docs.wpbean.com/docs/ai-product-gallery-slider-for-woocommerce/" target="_blank">' . esc_html__('Documentation', 'wpbean-product-gallery-slider-for-woocommerce') . '</a>';

                return $links;
            }

            /**
             * Load the plugin's text domain for translations.
             */
            public function load_textdomain()
            {
                load_plugin_textdomain( // phpcs:ignore PluginCheck.CodeAnalysis.DiscouragedFunctions.load_plugin_textdomainFound
                    'wpbean-product-gallery-slider-for-woocommerce',
                    false,
                    dirname(plugin_basename(__FILE__)) . '/languages'
                );
            }

            /**
             * Initialize the plugin
             *
             * @return void
             */
            public function init_plugin()
            {
                add_action('init', array($this, 'load_textdomain'));
                $this->file_includes();
                $this->classes_initializer();
            }

            /**
             * Init Hook
             *
             * @return void
             */
            public function init_hook()
            {
                add_filter('plugin_action_links_' . plugin_basename(__FILE__), array($this, 'plugin_actions'));
            }

            /**
             * Do stuff upon plugin activation
             *
             * @return void
             */
            public function activate()
            {
                $installed = get_option('wpbean_pgs_installed');
                if (! $installed) {
                    update_option('wpbean_pgs_installed', time());
                }
                update_option('WPBean_PGS_VERSION', self::version);
            }

            public function file_includes()
            {

                include_once __DIR__ . '/includes/class-wc-gallery-template-context.php';
                include_once __DIR__ . '/includes/frontend/class-wc-gallery-frontend.php';
                include_once __DIR__ . '/includes/frontend/class-wc-gallery-skeleton.php';
                include_once __DIR__ . '/includes/frontend/class-wc-gallery-items.php';
                include_once __DIR__ . '/includes/frontend/class-wc-gallery-loader.php';
                include_once __DIR__ . '/includes/frontend/class-wc-gallery-shortcode.php';
                include_once __DIR__ . '/includes/frontend/class-wc-gallery-theme-compat.php';

                // Database classes
                include_once __DIR__ . '/includes/admin/database/class-schema.php';
                include_once __DIR__ . '/includes/admin/database/class-migrator.php';
                include_once __DIR__ . '/includes/admin/database/class-rules-repository.php';

                // admin-specific classes
                include_once __DIR__ . '/includes/admin/class-wc-gallery-admin.php';
                include_once __DIR__ . '/includes/admin/class-wc-gallery-video-meta.php';
                include_once __DIR__ . '/includes/admin/class-wc-gallery-attachment-video.php';
                include_once __DIR__ . '/includes/admin/class-wc-gallery-variation-gallery.php';
                include_once __DIR__ . '/includes/admin/class-wc-gallery-compat-notice.php';
                include_once __DIR__ . '/includes/admin/class-wc-gallery-block.php';
                include_once __DIR__ . '/includes/admin/elementor/class-wc-gallery-elementor-widget.php';

                // Import & Export
                include_once __DIR__ . '/includes/admin/class-wc-gallery-import-export.php';

                // AI Settings (fallback credential store)
                include_once __DIR__ . '/includes/admin/class-wc-gallery-ai-settings.php';

                // Rating + upgrade notice for free users
                include_once __DIR__ . '/includes/admin/class-wc-gallery-rating-notice.php';


                // REST API controllers
                include_once __DIR__ . '/includes/admin/rest/class-rest-settings-controller.php';
                include_once __DIR__ . '/includes/admin/rest/class-rest-ai-controller.php';
            }

            /**
             * Plugin classes initializer
             *
             * @return void
             */
            public function classes_initializer()
            {
                // Initialize database migrator
                WPBean_PGS_Migrator::init();

                // Register cache-invalidation hooks for the template-context detector.
                // Runs on every request so the Elementor transient is cleared as soon
                // as a template is saved, regardless of whether the request is admin or frontend.
                WPBean_PGS_Template_Context::register_cache_hooks();

                // Block registration runs on `init` — must be outside is_admin() so
                // the block renders correctly on the frontend in block templates.
                new WPBean_PGS_Block();

                // Shortcode — registered via add_shortcode so must be outside
                // is_admin() to fire on frontend and REST block-preview requests.
                new WPBean_PGS_WC_Gallery_Shortcode();

                // Elementor widget — hooks into elementor/widgets/register. Safe to
                // instantiate unconditionally; the action never fires if Elementor
                // is not active.
                new WPBean_PGS_Elementor_Widget();

                // Register the frontend hook-conflict detector unconditionally so it
                // runs on real product page requests (where !is_admin() plugins have
                // registered their hooks) and caches results for the admin notice.
                WPBean_PGS_Compat_Notice::register_frontend_detector();

                if (is_admin()) {
                    new WPBean_PGS_AdminPages();
                    new WPBean_PGS_Import_Export();
                    new WPBean_PGS_AI_Settings();
                    new WPBean_PGS_Attachment_Video();
                    new WPBean_PGS_Video_Meta();

                    new WPBean_PGS_Compat_Notice();
                    new WPBean_PGS_Rating_Notice();
                }

                // Variation gallery: admin UI + frontend data injection
                new WPBean_PGS_Variation_Gallery();

                // Init REST API controllers
                add_action('rest_api_init', function () {
                    (new WPBean_PGS_REST_Settings_Controller())->register_routes();
                    (new WPBean_PGS_REST_AI_Controller())->register_routes();
                });

                if (!is_admin()) {
                    new WPBean_PGS_Theme_Compat();
                    new WPBean_PGS_WC_Gallery_Frontend();
                    new WPBean_PGS_WC_Gallery_Loader();
                } elseif (wp_doing_ajax()) {
                    // Register the variation image-size filter for AJAX-loaded
                    // variation data (WordPress sets is_admin()=true for AJAX).
                    new WPBean_PGS_WC_Gallery_Loader();
                }
            }

            /**
             * Admin notices for dependency.
             */
            public function dependency_admin_notices()
            {
?>
                <div class="notice notice-error is-dismissible">
                    <p><b><?php esc_html_e('WPBean Product Gallery Slider for WooCommerce', 'wpbean-product-gallery-slider-for-woocommerce'); ?></b><?php esc_html_e(' required ', 'wpbean-product-gallery-slider-for-woocommerce'); ?><b><a href="https://wordpress.org/plugins/woocommerce/" target="_blank"><?php esc_html_e('WooCommerce', 'wpbean-product-gallery-slider-for-woocommerce'); ?></a></b><?php esc_html_e(' plugin to work with.', 'wpbean-product-gallery-slider-for-woocommerce'); ?></p>
                </div>
<?php
            }

            /**
             * WooCommerce High-Performance Order Storage compatibility
             *
             * @return void
             */
            public function hpos_compatibility()
            {
                if (class_exists(\Automattic\WooCommerce\Utilities\FeaturesUtil::class)) {
                    \Automattic\WooCommerce\Utilities\FeaturesUtil::declare_compatibility('custom_order_tables', __FILE__, true);
                }
            }
        }
    }

    /**
     * Initializes the main plugin
     *
     * @return \WPBean_PGS_Plugin
     */
    if (!function_exists('wpbean_pgs_plugin_init')) {
        function wpbean_pgs_plugin_init()
        {
            return WPBean_PGS_Plugin::init();
        }
    }
    wpbean_pgs_plugin_init();
}
