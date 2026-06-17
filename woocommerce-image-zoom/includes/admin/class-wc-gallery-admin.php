<?php

if (! defined('ABSPATH')) exit;

/**
 * Plugin admin pages class
 */
class WPBean_PGS_AdminPages
{
    /**
     * Class constructor
     */
    public function __construct()
    {
        add_action('admin_head', array($this, 'admin_custom_styles'));
        add_action('admin_menu', array($this, 'admin_pages_menu'));
        add_action('admin_enqueue_scripts', array($this, 'admin_pages_scripts'), 999);
        add_filter('parent_file', function ($parent_file) {
            global $submenu_file, $pagenow;

            // phpcs:ignore WordPress.Security.NonceVerification.Recommended -- read-only GET param used only for menu highlighting, no data processing
            if ('admin.php' === $pagenow && isset($_GET['page'])) { // phpcs:ignore WordPress.Security.NonceVerification.Recommended
                $page = sanitize_key($_GET['page']); // phpcs:ignore WordPress.Security.NonceVerification.Recommended

                $children = [
                    'wpbean-product-gallery-rule',
                ];

                if (in_array($page, $children, true)) {
                    $parent_file  = 'wpbean-product-gallery-rules';
                    $submenu_file = 'wpbean-product-gallery-rules';
                }
            }

            return $parent_file;
        });
    }

    /**
     * Admin Menus
     */
    public function admin_pages_menu()
    {
        add_menu_page(
            esc_html__('WPBean Product Gallery for WooCommerce', 'wpbean-product-gallery-slider-for-woocommerce'),
            esc_html__('Product Gallery', 'wpbean-product-gallery-slider-for-woocommerce'),
            'manage_options',
            'wpbean-product-gallery-rules',
            function () {
                echo '<div class="wrap wpbean-pgs-wrapper" id="wpbean-pgs-settings-app"></div>';
            },
            'data:image/svg+xml;base64,' . base64_encode('<svg viewBox="0 0 22 22" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" id="svg4355" version="1.1" inkscape:version="0.92.1 r15371" sodipodi:docname="dark_zoom-fit.svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <sodipodi:namedview id="base" pagecolor="#ffffff" bordercolor="#666666" borderopacity="1.0" inkscape:pageopacity="0.0" inkscape:pageshadow="2" inkscape:zoom="23.05398" inkscape:cx="19.721777" inkscape:cy="8.8915373" inkscape:document-units="px" inkscape:current-layer="layer1" showgrid="true" width="0px" height="0px" fit-margin-top="0" fit-margin-left="0" fit-margin-right="0" fit-margin-bottom="0" inkscape:window-width="1884" inkscape:window-height="1051" inkscape:window-x="0" inkscape:window-y="0" inkscape:window-maximized="1" inkscape:showpageshadow="false"> <inkscape:grid type="xygrid" id="grid4114"></inkscape:grid> <sodipodi:guide position="2.0000011,19.999996" orientation="18,0" id="guide4120" inkscape:locked="false"></sodipodi:guide> <sodipodi:guide position="2.0000011,1.9999962" orientation="0,18" id="guide4122" inkscape:locked="false"></sodipodi:guide> <sodipodi:guide position="20.000001,1.9999962" orientation="-18,0" id="guide4124" inkscape:locked="false"></sodipodi:guide> <sodipodi:guide position="20.000001,19.999996" orientation="0,-18" id="guide4126" inkscape:locked="false"></sodipodi:guide> <sodipodi:guide position="3.0000011,18.999996" orientation="16,0" id="guide4128" inkscape:locked="false"></sodipodi:guide> <sodipodi:guide position="3.0000011,2.9999962" orientation="0,16" id="guide4130" inkscape:locked="false"></sodipodi:guide> <sodipodi:guide position="19.000001,2.9999962" orientation="-16,0" id="guide4132" inkscape:locked="false"></sodipodi:guide> <sodipodi:guide position="19.000001,18.999996" orientation="0,-16" id="guide4134" inkscape:locked="false"></sodipodi:guide> </sodipodi:namedview> <metadata id="metadata4360"> <rdf:rdf> <cc:work> <dc:format>image/svg+xml</dc:format> <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"></dc:type> <dc:title></dc:title> <dc:date>2016</dc:date> <dc:creator> <cc:agent> <dc:title>Timothée Giet</dc:title> </cc:agent> </dc:creator> <cc:license rdf:resource="http://creativecommons.org/licenses/by-sa/4.0/"></cc:license> </cc:work> <cc:license rdf:about="http://creativecommons.org/licenses/by-sa/4.0/"> <cc:permits rdf:resource="http://creativecommons.org/ns#Reproduction"></cc:permits> <cc:permits rdf:resource="http://creativecommons.org/ns#Distribution"></cc:permits> <cc:requires rdf:resource="http://creativecommons.org/ns#Notice"></cc:requires> <cc:requires rdf:resource="http://creativecommons.org/ns#Attribution"></cc:requires> <cc:permits rdf:resource="http://creativecommons.org/ns#DerivativeWorks"></cc:permits> <cc:requires rdf:resource="http://creativecommons.org/ns#ShareAlike"></cc:requires> </cc:license> </rdf:rdf> </metadata> <g inkscape:label="Capa 1" inkscape:groupmode="layer" id="layer1" transform="translate(-544.571 -742.934)"> <path style="opacity:1;fill:rgba(240,246,252,.6);fill-opacity:1;stroke:none" d="M547.571 745.934v4h1v-3h3v-1h-3z" id="path4162" inkscape:connector-curvature="0" sodipodi:nodetypes="ccccccccc"></path> <path style="opacity:1;fill:rgba(240,246,252,.6);fill-opacity:1;stroke:none" d="M562.571 757.934v3h-3v1h4v-4z" id="rect4134" inkscape:connector-curvature="0" sodipodi:nodetypes="cccccccc"></path> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" id="path4170" d="M563.571 745.934v4h-1v-3h-3v-1h3z" style="opacity:1;fill:rgba(240,246,252,.6);fill-opacity:1;stroke:none"></path> <path sodipodi:nodetypes="cccccccc" inkscape:connector-curvature="0" id="path4172" d="M548.571 757.934v3h3v1h-4v-4z" style="opacity:1;fill:rgba(240,246,252,.6);fill-opacity:1;stroke:none"></path> <path style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:rgba(240,246,252,.6);fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:square;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;marker:none;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate" d="M6 6v10h10V6H6zm1 1h8v8H7V7z" transform="translate(544.571 742.934)" id="rect4147"></path> </g> </g></svg>'),
            80
        );

        // Rename the first submenu by adding a submenu with the same slug
        add_submenu_page(
            'wpbean-product-gallery-rules',
            esc_html__('Product Gallery Rules', 'wpbean-product-gallery-slider-for-woocommerce'),
            esc_html__('Rules', 'wpbean-product-gallery-slider-for-woocommerce'),
            'manage_options',
            'wpbean-product-gallery-rules',
        );

        // Setting Details page — hidden submenu (no visible link needed)
        add_submenu_page(
            'wpbean-product-gallery-rules',                               // null = hidden from menu
            esc_html__('Product Gallery Rule', 'wpbean-product-gallery-slider-for-woocommerce'),
            null,
            'manage_options',
            'wpbean-product-gallery-rule',           // menu slug
            function () {
                // Pass the id to React via a data attribute — clean, no wp_localize_script globals
                // phpcs:ignore WordPress.Security.NonceVerification.Recommended -- read-only GET param passed as a data attribute to React; no form data processed
                $id = isset($_GET['id']) ? absint($_GET['id']) : 0; // phpcs:ignore WordPress.Security.NonceVerification.Recommended
                echo '<div class="wrap wpbean-pgs-wrapper" id="wpbean-pgs-setting-rule-app" data-id="' . esc_attr($id) . '"></div>';
            }
        );
    }

    /**
     * Admin Pages Scripts
     */
    public function admin_pages_scripts($admin_page)
    {
        // var_dump($admin_page);
        $base_url = plugin_dir_path(__FILE__) . 'assets/build/';

        $apps = array(
            array(
                'app'      => 'rulesCrud',
                'page_url' => 'toplevel_page_wpbean-product-gallery-rules'
            ),
            array(
                'app'      => 'rulesDetails',
                'page_url' => 'product-gallery_page_wpbean-product-gallery-rule'
            )
        );

        foreach ($apps as $app) {
            if ($app['page_url'] !== $admin_page) {
                continue;
            }

            $asset_file = $base_url . $app['app'] . '.asset.php';

            if (! file_exists($asset_file)) {
                continue;
            }

            $asset = include $asset_file;

            wp_enqueue_media();

            wp_enqueue_script(
                'wpbean-pgs-' . $app['page_url'] . '-script',
                plugins_url('assets/build/' . $app['app'] . '.js', __FILE__),
                $asset['dependencies'],
                $asset['version'],
                array(
                    'in_footer' => true,
                )
            );

            wp_localize_script(
                'wpbean-pgs-' . $app['page_url'] . '-script',
                'WPBean_PGS_Options',
                array(
                    'rest_root'      => esc_url_raw(rest_url()),
                    'nonce'          => wp_create_nonce('wp_rest'),
                    'adminUrl'       => admin_url(),
                    'is_premium'     => wpbean_pgs_fs()->is_paying_or_trial(),
                    'upgradeUrl'     => wpbean_pgs_fs()->get_upgrade_url(),
                    'connectorsUrl'   => admin_url('options-connectors.php'),
                    'aiSettingsUrl'   => admin_url('admin.php?page=wpbean-product-gallery-ai-settings'),
                    'aiSupported'     => (function_exists('wp_supports_ai') && wp_supports_ai())
                                          || (class_exists('WPBean_PGS_AI_Settings') && WPBean_PGS_AI_Settings::has_any_key()),
                    'version'         => WPBean_PGS_VERSION,
                )
            );

            wp_set_script_translations(
                'wpbean-pgs-' . $app['page_url'] . '-script',
                'wpbean-product-gallery-slider-for-woocommerce',
                plugin_dir_path(__FILE__) . 'languages'
            );

            wp_enqueue_style(
                'wpbean-pgs-' . $app['page_url'] . '-style',
                plugins_url('assets/build/style-' . $app['app'] . '.css', __FILE__),
                array('common', 'wp-components'), // depend on WordPress admin common styles
                $asset['version'],
            );
        }
    }

    public function admin_custom_styles()
    {
        echo '<style>
            /* Hide the default submenu item that duplicates the parent menu */
            li.toplevel_page_wpbean-product-gallery-rules .wp-submenu li:has(> a:empty) {
                display: none;
            }
        </style>';
    }
}
