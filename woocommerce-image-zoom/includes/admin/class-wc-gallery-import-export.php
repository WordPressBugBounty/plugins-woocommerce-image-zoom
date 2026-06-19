<?php

defined( 'ABSPATH' ) || exit;
/**
 * Handles the Import & Export admin page.
 *
 * Export: downloads all non-trashed setting rules as a signed JSON file.
 * Import: validates and imports rules from an exported JSON file.
 */
class WPBean_PGS_Import_Export {
    const ACTION_EXPORT = 'wpbean_pgs_export';

    const ACTION_IMPORT = 'wpbean_pgs_import';

    const NONCE_EXPORT = 'wpbean_pgs_export_nonce';

    const NONCE_IMPORT = 'wpbean_pgs_import_nonce';

    const FORMAT_VERSION = 1;

    const MAX_UPLOAD_BYTES = 5242880;

    // 5 MB
    private $repo;

    public function __construct() {
        $this->repo = new WPBean_PGS_Rules_Repository();
        add_action( 'admin_menu', [$this, 'register_submenu'], 20 );
        add_action( 'admin_post_' . self::ACTION_EXPORT, [$this, 'handle_export'] );
        add_action( 'admin_post_' . self::ACTION_IMPORT, [$this, 'handle_import'] );
    }

    /*--------------------------------------------------------------
      # MENU
      --------------------------------------------------------------*/
    public function register_submenu() {
        add_submenu_page(
            'wpbean-product-gallery-rules',
            esc_html__( 'Import & Export Product Gallery Rules', 'wpbean-product-gallery-slider-for-woocommerce' ),
            esc_html__( 'Import & Export', 'wpbean-product-gallery-slider-for-woocommerce' ),
            'manage_options',
            'wpbean-product-gallery-import-export',
            [$this, 'render_page']
        );
    }

    /*--------------------------------------------------------------
      # PAGE RENDER
      --------------------------------------------------------------*/
    public function render_page() {
        if ( !current_user_can( 'manage_options' ) ) {
            wp_die( esc_html__( 'You do not have permission to access this page.', 'wpbean-product-gallery-slider-for-woocommerce' ) );
        }
        $is_premium = wpbean_pgs_fs()->can_use_premium_code__premium_only();
        $notice = $this->get_notice();
        $this->clear_notice();
        ?>
        <div class="wrap wpbean-pgs-io">
            <?php 
        $this->inline_styles();
        ?>

            <?php 
        /*
         * h1 + .wp-header-end must be direct children of .wrap.
         * WordPress admin JS (common.js) and WooCommerce both look for
         * .wp-header-end and teleport any .notice elements to after it.
         * Without this marker they fall back to anchoring on the first
         * <h1> they find — which was inside our styled header, breaking it.
         */
        ?>
            <h1 class="screen-reader-text"><?php 
        esc_html_e( 'Import &amp; Export', 'wpbean-product-gallery-slider-for-woocommerce' );
        ?></h1>
            <hr class="wp-header-end">

            <?php 
        if ( $notice ) {
            ?>
                <div class="wpbean-pgs-io__notice wpbean-pgs-io__notice--<?php 
            echo esc_attr( $notice['type'] );
            ?>" role="alert">
                    <span class="wpbean-pgs-io__notice-icon">
                        <?php 
            if ( 'success' === $notice['type'] ) {
                ?>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <path d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        <?php 
            } elseif ( 'error' === $notice['type'] ) {
                ?>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <path d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                            </svg>
                        <?php 
            } else {
                ?>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.008v.008H12v-.008Z" />
                            </svg>
                        <?php 
            }
            ?>
                    </span>
                    <span><?php 
            echo esc_html( $notice['message'] );
            ?></span>
                </div>
            <?php 
        }
        ?>

            <div class="wpbean-pgs-io__page-header">
                <div class="wpbean-pgs-io__page-header-inner">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
                    </svg>
                    <div>
                        <p class="wpbean-pgs-io__page-title"><?php 
        esc_html_e( 'Import &amp; Export Product Gallery Rules', 'wpbean-product-gallery-slider-for-woocommerce' );
        ?></p>
                        <p class="wpbean-pgs-io__page-subtitle"><?php 
        esc_html_e( 'Migrate your gallery setting rules between sites using JSON files.', 'wpbean-product-gallery-slider-for-woocommerce' );
        ?></p>
                    </div>
                </div>
            </div>

            <?php 
        if ( !$is_premium ) {
            $upgrade_url = 'https://wpbean.com/woocommerce-product-gallery/?utm_content=WPBean+Product+Gallery+Slider&utm_campaign=adminlink&utm_medium=dash-settings&utm_source=FreeVersion';
            ?>
                <div class="wpbean-pgs-io__pro-notice">
                    <div class="wpbean-pgs-io__pro-notice-icon">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                        </svg>
                    </div>
                    <div class="wpbean-pgs-io__pro-notice-content">
                        <p class="wpbean-pgs-io__pro-notice-title"><?php 
            esc_html_e( 'Import &amp; Export — Pro Feature', 'wpbean-product-gallery-slider-for-woocommerce' );
            ?></p>
                        <p class="wpbean-pgs-io__pro-notice-desc"><?php 
            esc_html_e( 'Upgrade to Pro to back up your gallery rules as portable JSON files and restore them on any site.', 'wpbean-product-gallery-slider-for-woocommerce' );
            ?></p>
                    </div>
                    <a href="<?php 
            echo esc_url( $upgrade_url );
            ?>" class="wpbean-pgs-io__pro-notice-btn" target="_blank" rel="noopener">
                        <?php 
            esc_html_e( 'Upgrade to Pro', 'wpbean-product-gallery-slider-for-woocommerce' );
            ?>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                </div>
            <?php 
        }
        ?>

            <div class="wpbean-pgs-io__grid">
                <?php 
        $this->render_export_card( $is_premium );
        ?>
                <?php 
        $this->render_import_card( $is_premium );
        ?>
            </div>
        </div>
    <?php 
        $this->inline_scripts();
    }

    /*--------------------------------------------------------------
      # EXPORT CARD
      --------------------------------------------------------------*/
    private function render_export_card( bool $is_premium = true ) {
        $count = $this->get_rules_count();
        ?>
        <div class="wpbean-pgs-io__card<?php 
        echo ( $is_premium ? '' : ' wpbean-pgs-io__card--locked' );
        ?>">
            <div class="wpbean-pgs-io__card-header">
                <div class="wpbean-pgs-io__card-icon wpbean-pgs-io__card-icon--export">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <path d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                </div>
                <div>
                    <h2 class="wpbean-pgs-io__card-title"><?php 
        esc_html_e( 'Export Rules', 'wpbean-product-gallery-slider-for-woocommerce' );
        ?></h2>
                    <p class="wpbean-pgs-io__card-desc"><?php 
        esc_html_e( 'Download all your setting rules as a JSON backup file.', 'wpbean-product-gallery-slider-for-woocommerce' );
        ?></p>
                </div>
            </div>

            <div class="wpbean-pgs-io__card-body">
                <?php 
        if ( $count > 0 ) {
            ?>
                    <div class="wpbean-pgs-io__rule-count">
                        <span class="wpbean-pgs-io__rule-count-number"><?php 
            echo esc_html( $count );
            ?></span>
                        <span class="wpbean-pgs-io__rule-count-label">
                            <?php 
            echo esc_html( _n(
                'setting rule ready to export',
                'setting rules ready to export',
                $count,
                'wpbean-product-gallery-slider-for-woocommerce'
            ) );
            ?>
                        </span>
                    </div>
                <?php 
        } else {
            ?>
                    <p class="wpbean-pgs-io__empty-msg"><?php 
            esc_html_e( 'No setting rules found. Create your first rule before exporting.', 'wpbean-product-gallery-slider-for-woocommerce' );
            ?></p>
                <?php 
        }
        ?>

                <ul class="wpbean-pgs-io__checklist">
                    <li class="wpbean-pgs-io__checklist-item wpbean-pgs-io__checklist-item--yes">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <path d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <?php 
        esc_html_e( 'Rule names, status &amp; apply-to setting', 'wpbean-product-gallery-slider-for-woocommerce' );
        ?>
                    </li>
                    <li class="wpbean-pgs-io__checklist-item wpbean-pgs-io__checklist-item--yes">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <path d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <?php 
        esc_html_e( 'All gallery &amp; lightbox configuration', 'wpbean-product-gallery-slider-for-woocommerce' );
        ?>
                    </li>
                    <li class="wpbean-pgs-io__checklist-item wpbean-pgs-io__checklist-item--yes">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <path d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <?php 
        esc_html_e( 'Product &amp; category assignment IDs', 'wpbean-product-gallery-slider-for-woocommerce' );
        ?>
                    </li>
                    <li class="wpbean-pgs-io__checklist-item wpbean-pgs-io__checklist-item--warn">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.008v.008H12v-.008Z" />
                        </svg>
                        <?php 
        esc_html_e( 'Assignment IDs are site-specific — review them after importing on a different site.', 'wpbean-product-gallery-slider-for-woocommerce' );
        ?>
                    </li>
                </ul>
            </div>

            <div class="wpbean-pgs-io__card-footer">
                <form method="post" action="<?php 
        echo esc_url( admin_url( 'admin-post.php' ) );
        ?>">
                    <?php 
        wp_nonce_field( self::NONCE_EXPORT, '_wpnonce' );
        ?>
                    <input type="hidden" name="action" value="<?php 
        echo esc_attr( self::ACTION_EXPORT );
        ?>">
                    <button
                        type="submit"
                        class="button button-primary wpbean-pgs-io__btn"
                        <?php 
        disabled( $count === 0 || !$is_premium, true );
        ?>>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <path d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>
                        <?php 
        esc_html_e( 'Export All Rules', 'wpbean-product-gallery-slider-for-woocommerce' );
        ?>
                    </button>
                </form>
            </div>
        </div>
    <?php 
    }

    /*--------------------------------------------------------------
      # IMPORT CARD
      --------------------------------------------------------------*/
    private function render_import_card( bool $is_premium = true ) {
        ?>
        <div class="wpbean-pgs-io__card<?php 
        echo ( $is_premium ? '' : ' wpbean-pgs-io__card--locked' );
        ?>">
            <div class="wpbean-pgs-io__card-header">
                <div class="wpbean-pgs-io__card-icon wpbean-pgs-io__card-icon--import">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <path d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                    </svg>
                </div>
                <div>
                    <h2 class="wpbean-pgs-io__card-title"><?php 
        esc_html_e( 'Import Rules', 'wpbean-product-gallery-slider-for-woocommerce' );
        ?></h2>
                    <p class="wpbean-pgs-io__card-desc"><?php 
        esc_html_e( 'Upload a JSON file exported from any WPBean Product Gallery site.', 'wpbean-product-gallery-slider-for-woocommerce' );
        ?></p>
                </div>
            </div>

            <div class="wpbean-pgs-io__card-body">
                <form
                    method="post"
                    action="<?php 
        echo esc_url( admin_url( 'admin-post.php' ) );
        ?>"
                    enctype="multipart/form-data"
                    id="wpbean-pgs-import-form"
                    novalidate>
                    <?php 
        wp_nonce_field( self::NONCE_IMPORT, '_wpnonce' );
        ?>
                    <input type="hidden" name="action" value="<?php 
        echo esc_attr( self::ACTION_IMPORT );
        ?>">

                    <!-- Drop zone -->
                    <div class="wpbean-pgs-io__dropzone" id="wpbean-pgs-dropzone" tabindex="0" role="button"
                        aria-label="<?php 
        esc_attr_e( 'Upload zone: drop a JSON file here or press Enter to browse', 'wpbean-product-gallery-slider-for-woocommerce' );
        ?>">
                        <svg class="wpbean-pgs-io__dropzone-icon" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <path d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
                        </svg>
                        <p class="wpbean-pgs-io__dropzone-primary">
                            <?php 
        esc_html_e( 'Drop your JSON file here', 'wpbean-product-gallery-slider-for-woocommerce' );
        ?>
                        </p>
                        <p class="wpbean-pgs-io__dropzone-or"><?php 
        esc_html_e( 'or', 'wpbean-product-gallery-slider-for-woocommerce' );
        ?></p>
                        <label for="wpbean-pgs-file-input" class="button wpbean-pgs-io__browse-btn">
                            <?php 
        esc_html_e( 'Browse File', 'wpbean-product-gallery-slider-for-woocommerce' );
        ?>
                        </label>
                        <input
                            type="file"
                            id="wpbean-pgs-file-input"
                            name="import_file"
                            accept=".json,application/json"
                            class="wpbean-pgs-io__file-input">
                        <p class="wpbean-pgs-io__dropzone-hint"><?php 
        esc_html_e( 'Accepted: .json &nbsp;·&nbsp; Max size: 5 MB', 'wpbean-product-gallery-slider-for-woocommerce' );
        ?></p>
                        <p class="wpbean-pgs-io__file-selected" id="wpbean-pgs-file-selected" hidden></p>
                    </div>

                    <!-- Options -->
                    <div class="wpbean-pgs-io__options">
                        <h3 class="wpbean-pgs-io__options-title"><?php 
        esc_html_e( 'Import Options', 'wpbean-product-gallery-slider-for-woocommerce' );
        ?></h3>

                        <div class="wpbean-pgs-io__option-group">
                            <p class="wpbean-pgs-io__option-label"><?php 
        esc_html_e( 'If a rule with the same name already exists:', 'wpbean-product-gallery-slider-for-woocommerce' );
        ?></p>
                            <label class="wpbean-pgs-io__radio-label">
                                <input type="radio" name="duplicate_action" value="create_new" checked>
                                <span><?php 
        esc_html_e( 'Create a new rule anyway', 'wpbean-product-gallery-slider-for-woocommerce' );
        ?></span>
                            </label>
                            <label class="wpbean-pgs-io__radio-label">
                                <input type="radio" name="duplicate_action" value="skip">
                                <span><?php 
        esc_html_e( 'Skip — do not import if title already exists', 'wpbean-product-gallery-slider-for-woocommerce' );
        ?></span>
                            </label>
                        </div>

                        <div class="wpbean-pgs-io__option-group">
                            <label class="wpbean-pgs-io__checkbox-label">
                                <input type="checkbox" name="import_assignments" value="1" checked>
                                <span><?php 
        esc_html_e( 'Import product &amp; category assignments', 'wpbean-product-gallery-slider-for-woocommerce' );
        ?></span>
                            </label>
                            <p class="wpbean-pgs-io__option-hint">
                                <?php 
        esc_html_e( 'Product and category IDs are site-specific. Assignments may need updating if importing to a different site.', 'wpbean-product-gallery-slider-for-woocommerce' );
        ?>
                            </p>
                        </div>
                    </div>

                    <div class="wpbean-pgs-io__card-footer wpbean-pgs-io-no-padding">
                        <button
                            type="submit"
                            class="button button-primary wpbean-pgs-io__btn"
                            id="wpbean-pgs-import-btn"
                            disabled>
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <path d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                            </svg>
                            <?php 
        esc_html_e( 'Import Rules', 'wpbean-product-gallery-slider-for-woocommerce' );
        ?>
                        </button>
                        <p class="wpbean-pgs-io__file-required" id="wpbean-pgs-file-required" hidden>
                            <?php 
        esc_html_e( 'Please select a JSON file first.', 'wpbean-product-gallery-slider-for-woocommerce' );
        ?>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    <?php 
    }

    /*--------------------------------------------------------------
      # EXPORT HANDLER
      --------------------------------------------------------------*/
    public function handle_export() {
        wp_die( esc_html__( 'This feature requires a premium license.', 'wpbean-product-gallery-slider-for-woocommerce' ) );
        if ( !current_user_can( 'manage_options' ) ) {
            wp_die( esc_html__( 'Permission denied.', 'wpbean-product-gallery-slider-for-woocommerce' ) );
        }
        check_admin_referer( self::NONCE_EXPORT );
        $result = $this->repo->get_settings( [
            'per_page' => 999999,
            'page'     => 1,
        ] );
        $rules = [];
        foreach ( (array) $result['items'] as $item ) {
            $full = $this->repo->get( (int) $item['id'] );
            $assignments = $this->repo->get_assignments( (int) $item['id'] );
            if ( !$full ) {
                continue;
            }
            $rules[] = [
                'title'          => $full['title'],
                'status'         => $full['status'],
                'apply_to'       => $full['apply_to'],
                'config'         => $full['config'],
                'config_version' => (int) $full['config_version'],
                'assignments'    => [
                    'apply_to'   => $assignments['apply_to'],
                    'categories' => $assignments['categories'],
                    'products'   => $assignments['products'],
                ],
            ];
        }
        $payload = [
            'plugin'         => 'wpbean-product-gallery-slider-for-woocommerce',
            'format_version' => self::FORMAT_VERSION,
            'plugin_version' => WPBean_PGS_VERSION,
            'site_url'       => get_site_url(),
            'exported_at'    => gmdate( 'c' ),
            'count'          => count( $rules ),
            'rules'          => $rules,
        ];
        $filename = 'wpbean-pgs-rules-' . gmdate( 'Y-m-d' ) . '.json';
        // Output the JSON file as a download — no wp_send_json (it sets 200 only)
        nocache_headers();
        header( 'Content-Type: application/json; charset=utf-8' );
        header( 'Content-Disposition: attachment; filename="' . sanitize_file_name( $filename ) . '"' );
        echo wp_json_encode( $payload, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES );
        exit;
    }

    /*--------------------------------------------------------------
      # IMPORT HANDLER
      --------------------------------------------------------------*/
    public function handle_import() {
        wp_die( esc_html__( 'This feature requires a premium license.', 'wpbean-product-gallery-slider-for-woocommerce' ) );
        if ( !current_user_can( 'manage_options' ) ) {
            wp_die( esc_html__( 'Permission denied.', 'wpbean-product-gallery-slider-for-woocommerce' ) );
        }
        check_admin_referer( self::NONCE_IMPORT );
        $redirect = admin_url( 'admin.php?page=wpbean-product-gallery-import-export' );
        // ── Validate uploaded file ────────────────────────────────────────────
        $upload_error = ( isset( $_FILES['import_file']['error'] ) ? (int) $_FILES['import_file']['error'] : -1 );
        if ( $upload_error !== UPLOAD_ERR_OK ) {
            $this->set_notice( 'error', $this->upload_error_message( $upload_error ) );
            wp_safe_redirect( $redirect );
            exit;
        }
        // phpcs:ignore WordPress.Security.ValidatedSanitizedInput.InputNotSanitized -- Each field is individually handled: tmp_name is a server-generated path verified by is_uploaded_file(); name is passed through sanitize_file_name(); size and error are cast to int.
        $file = $_FILES['import_file'];
        $tmp_path = $file['tmp_name'];
        $filename = sanitize_file_name( wp_unslash( $file['name'] ) );
        if ( (int) $file['size'] > self::MAX_UPLOAD_BYTES ) {
            $this->set_notice( 'error', __( 'File is too large. Maximum allowed size is 5 MB.', 'wpbean-product-gallery-slider-for-woocommerce' ) );
            wp_safe_redirect( $redirect );
            exit;
        }
        if ( strtolower( pathinfo( $filename, PATHINFO_EXTENSION ) ) !== 'json' ) {
            $this->set_notice( 'error', __( 'Invalid file type. Only .json files are accepted.', 'wpbean-product-gallery-slider-for-woocommerce' ) );
            wp_safe_redirect( $redirect );
            exit;
        }
        if ( !is_uploaded_file( $tmp_path ) ) {
            $this->set_notice( 'error', __( 'File upload verification failed. Please try again.', 'wpbean-product-gallery-slider-for-woocommerce' ) );
            wp_safe_redirect( $redirect );
            exit;
        }
        // ── Parse JSON ────────────────────────────────────────────────────────
        // phpcs:ignore WordPress.WP.AlternativeFunctions.file_get_contents_file_get_contents
        $raw = file_get_contents( $tmp_path );
        if ( $raw === false ) {
            $this->set_notice( 'error', __( 'Could not read the uploaded file.', 'wpbean-product-gallery-slider-for-woocommerce' ) );
            wp_safe_redirect( $redirect );
            exit;
        }
        $data = json_decode( $raw, true );
        if ( json_last_error() !== JSON_ERROR_NONE || !is_array( $data ) ) {
            $this->set_notice( 'error', __( 'The file does not contain valid JSON.', 'wpbean-product-gallery-slider-for-woocommerce' ) );
            wp_safe_redirect( $redirect );
            exit;
        }
        if ( !$this->validate_import_data( $data ) ) {
            $this->set_notice( 'error', __( 'Invalid import file. Please upload a JSON file exported by this plugin.', 'wpbean-product-gallery-slider-for-woocommerce' ) );
            wp_safe_redirect( $redirect );
            exit;
        }
        // ── Options ───────────────────────────────────────────────────────────
        $duplicate_action = ( isset( $_POST['duplicate_action'] ) && sanitize_key( $_POST['duplicate_action'] ) === 'skip' ? 'skip' : 'create_new' );
        $import_assignments = !empty( $_POST['import_assignments'] );
        // ── Import ────────────────────────────────────────────────────────────
        $imported = 0;
        $skipped = 0;
        $errors = 0;
        foreach ( $data['rules'] as $raw_rule ) {
            if ( !is_array( $raw_rule ) ) {
                $errors++;
                continue;
            }
            $title = sanitize_text_field( $raw_rule['title'] ?? '' );
            if ( '' === $title ) {
                $errors++;
                continue;
            }
            if ( 'skip' === $duplicate_action && $this->title_exists( $title ) ) {
                $skipped++;
                continue;
            }
            $id = $this->repo->create( [
                'title'    => $title,
                'status'   => sanitize_key( $raw_rule['status'] ?? 'draft' ),
                'apply_to' => sanitize_key( $raw_rule['apply_to'] ?? 'all' ),
                'config'   => ( is_array( $raw_rule['config'] ?? null ) ? $raw_rule['config'] : [] ),
            ] );
            if ( !$id ) {
                $errors++;
                continue;
            }
            if ( $import_assignments && !empty( $raw_rule['assignments'] ) && is_array( $raw_rule['assignments'] ) ) {
                $a = $raw_rule['assignments'];
                $categories = array_values( array_filter( array_map( 'absint', (array) ($a['categories'] ?? []) ) ) );
                $products = array_values( array_filter( array_map( 'absint', (array) ($a['products'] ?? []) ) ) );
                $assign_apply = sanitize_key( $a['apply_to'] ?? $raw_rule['apply_to'] ?? 'all' );
                $this->repo->sync_assignments(
                    $id,
                    $categories,
                    $products,
                    $assign_apply
                );
            }
            $imported++;
        }
        // ── Build result notice ───────────────────────────────────────────────
        $parts = [];
        $parts[] = sprintf( 
            /* translators: %d: number of imported rules */
            _n(
                '%d rule imported',
                '%d rules imported',
                $imported,
                'wpbean-product-gallery-slider-for-woocommerce'
            ),
            $imported
         );
        if ( $skipped > 0 ) {
            $parts[] = sprintf( 
                /* translators: %d: number of skipped rules */
                _n(
                    '%d skipped (duplicate title)',
                    '%d skipped (duplicate titles)',
                    $skipped,
                    'wpbean-product-gallery-slider-for-woocommerce'
                ),
                $skipped
             );
        }
        if ( $errors > 0 ) {
            $parts[] = sprintf( 
                /* translators: %d: number of entries that failed */
                _n(
                    '%d entry could not be imported',
                    '%d entries could not be imported',
                    $errors,
                    'wpbean-product-gallery-slider-for-woocommerce'
                ),
                $errors
             );
        }
        $notice_type = ( $imported > 0 ? 'success' : (( $errors > 0 ? 'error' : 'warning' )) );
        $this->set_notice( $notice_type, implode( ', ', $parts ) . '.' );
        wp_safe_redirect( $redirect );
        exit;
    }

    /*--------------------------------------------------------------
      # PRIVATE HELPERS
      --------------------------------------------------------------*/
    private function validate_import_data( array $data ) : bool {
        return isset( $data['plugin'], $data['rules'], $data['format_version'] ) && 'wpbean-product-gallery-slider-for-woocommerce' === $data['plugin'] && is_array( $data['rules'] ) && (int) $data['format_version'] === self::FORMAT_VERSION;
    }

    private function title_exists( string $title ) : bool {
        global $wpdb;
        $cache_key = 'wpbean_pgs_title_exists_' . md5( $title );
        $cached = wp_cache_get( $cache_key, 'wpbean_pgs' );
        if ( false !== $cached ) {
            return (bool) $cached;
        }
        $table = WPBean_PGS_Schema::table_name();
        // phpcs:ignore WordPress.DB.DirectDatabaseQuery.DirectQuery -- custom table, no WP abstraction available.
        $result = $wpdb->get_var( $wpdb->prepare( 
            "SELECT id FROM {$table} WHERE title = %s AND status != 'trash' LIMIT 1",
            // phpcs:ignore WordPress.DB.PreparedSQL.InterpolatedNotPrepared -- $table is an internally-generated table name, not user input.
            $title
         ) );
        wp_cache_set(
            $cache_key,
            $result,
            'wpbean_pgs',
            30
        );
        return (bool) $result;
    }

    private function get_rules_count() : int {
        $result = $this->repo->get_settings( [
            'per_page' => 1,
            'page'     => 1,
        ] );
        return (int) ($result['total'] ?? 0);
    }

    private function get_transient_key() : string {
        return 'wpbean_pgs_io_notice_' . get_current_user_id();
    }

    private function set_notice( string $type, string $message ) : void {
        set_transient( $this->get_transient_key(), compact( 'type', 'message' ), MINUTE_IN_SECONDS );
    }

    private function get_notice() : ?array {
        $notice = get_transient( $this->get_transient_key() );
        return ( is_array( $notice ) ? $notice : null );
    }

    private function clear_notice() : void {
        delete_transient( $this->get_transient_key() );
    }

    private function upload_error_message( int $code ) : string {
        $map = [
            UPLOAD_ERR_INI_SIZE   => __( 'The file exceeds the server upload size limit.', 'wpbean-product-gallery-slider-for-woocommerce' ),
            UPLOAD_ERR_FORM_SIZE  => __( 'The file exceeds the maximum upload size allowed by the form.', 'wpbean-product-gallery-slider-for-woocommerce' ),
            UPLOAD_ERR_PARTIAL    => __( 'The file was only partially uploaded. Please try again.', 'wpbean-product-gallery-slider-for-woocommerce' ),
            UPLOAD_ERR_NO_FILE    => __( 'No file was selected for upload.', 'wpbean-product-gallery-slider-for-woocommerce' ),
            UPLOAD_ERR_NO_TMP_DIR => __( 'Server error: missing temporary upload directory.', 'wpbean-product-gallery-slider-for-woocommerce' ),
            UPLOAD_ERR_CANT_WRITE => __( 'Server error: failed to write the uploaded file to disk.', 'wpbean-product-gallery-slider-for-woocommerce' ),
            UPLOAD_ERR_EXTENSION  => __( 'The file upload was blocked by a server extension.', 'wpbean-product-gallery-slider-for-woocommerce' ),
        ];
        return $map[$code] ?? __( 'An unknown upload error occurred. Please try again.', 'wpbean-product-gallery-slider-for-woocommerce' );
    }

    /*--------------------------------------------------------------
      # INLINE STYLES
      --------------------------------------------------------------*/
    private function inline_styles() : void {
        ?>
        <style>
            /* ── Page layout ─────────────────────────────────────────────── */
            .wpbean-pgs-io {
                max-width: 1000px;
            }

            .wpbean-pgs-io__page-header {
                background: #fff;
                border: 1px solid #e2e4e7;
                border-radius: 8px;
                padding: 20px 24px;
                margin: 16px 0 24px;
            }

            .wpbean-pgs-io__page-header-inner {
                display: flex;
                align-items: center;
                gap: 14px;
                color: #1d2327;
            }

            .wpbean-pgs-io__page-title {
                font-size: 18px;
                font-weight: 700;
                margin: 0 0 3px;
                padding: 0;
                line-height: 1.3;
                color: #1d2327;
            }

            .wpbean-pgs-io__page-subtitle {
                margin: 0;
                font-size: 13px;
                color: #646970;
            }

            /* ── Notice ──────────────────────────────────────────────────── */
            .wpbean-pgs-io__notice {
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

            .wpbean-pgs-io__notice--success {
                background: #f0faf3;
                border-color: #00a32a;
                color: #1d2327;
            }

            .wpbean-pgs-io__notice--success .wpbean-pgs-io__notice-icon {
                color: #00a32a;
                flex-shrink: 0;
                margin-top: 1px;
            }

            .wpbean-pgs-io__notice--error {
                background: #fcf0f1;
                border-color: #d63638;
                color: #1d2327;
            }

            .wpbean-pgs-io__notice--error .wpbean-pgs-io__notice-icon {
                color: #d63638;
                flex-shrink: 0;
                margin-top: 1px;
            }

            .wpbean-pgs-io__notice--warning {
                background: #fff8e1;
                border-color: #dba617;
                color: #1d2327;
            }

            .wpbean-pgs-io__notice--warning .wpbean-pgs-io__notice-icon {
                color: #dba617;
                flex-shrink: 0;
                margin-top: 1px;
            }

            /* ── Grid ────────────────────────────────────────────────────── */
            .wpbean-pgs-io__grid {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 24px;
                align-items: start;
            }

            @media (max-width: 900px) {
                .wpbean-pgs-io__grid {
                    grid-template-columns: 1fr;
                }
            }

            /* ── Card ────────────────────────────────────────────────────── */
            .wpbean-pgs-io__card {
                background: #fff;
                border: 1px solid #e2e4e7;
                border-radius: 8px;
                overflow: hidden;
                display: flex;
                flex-direction: column;
                box-shadow: 0 1px 3px rgba(0, 0, 0, .04);
            }

            .wpbean-pgs-io__card-header {
                display: flex;
                align-items: flex-start;
                gap: 14px;
                padding: 18px 22px;
                border-bottom: 1px solid #e2e4e7;
                background: #f9fafb;
            }

            .wpbean-pgs-io__card-icon {
                width: 42px;
                height: 42px;
                border-radius: 10px;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-shrink: 0;
            }

            .wpbean-pgs-io__card-icon--export {
                background: #e8f2ff;
                color: #0073aa;
            }

            .wpbean-pgs-io__card-icon--import {
                background: #e5f8ed;
                color: #00a32a;
            }

            .wpbean-pgs-io__card-title {
                font-size: 14px;
                font-weight: 700;
                margin: 0 0 3px;
                padding: 0;
                color: #1d2327;
            }

            .wpbean-pgs-io__card-desc {
                margin: 0;
                font-size: 12.5px;
                color: #646970;
                line-height: 1.4;
            }

            .wpbean-pgs-io__card-body {
                padding: 20px 22px;
                flex: 1;
            }

            .wpbean-pgs-io__card-footer {
                padding: 14px 22px;
                border-top: 1px solid #e2e4e7;
                background: #f9fafb;
                display: flex;
                align-items: center;
                gap: 12px;
                flex-wrap: wrap;
            }

            .wpbean-pgs-io__card-footer.wpbean-pgs-io-no-padding {
                padding: 0;
                background: unset;
                border: unset;
            }

            /* ── Rule count badge ────────────────────────────────────────── */
            .wpbean-pgs-io__rule-count {
                display: flex;
                align-items: center;
                gap: 10px;
                background: #f0f6fc;
                border: 1px solid #c8d9ec;
                border-radius: 6px;
                padding: 10px 14px;
                margin-bottom: 16px;
            }

            .wpbean-pgs-io__rule-count-number {
                font-size: 26px;
                font-weight: 700;
                color: #0073aa;
                line-height: 1;
            }

            .wpbean-pgs-io__rule-count-label {
                font-size: 13px;
                color: #3c434a;
            }

            .wpbean-pgs-io__empty-msg {
                font-size: 13px;
                color: #646970;
                margin: 0 0 14px;
            }

            /* ── Checklist ───────────────────────────────────────────────── */
            .wpbean-pgs-io__checklist {
                margin: 0;
                padding: 0;
                list-style: none;
            }

            .wpbean-pgs-io__checklist-item {
                display: flex;
                align-items: flex-start;
                gap: 8px;
                font-size: 12.5px;
                padding: 4px 0;
                line-height: 1.45;
                color: #3c434a;
            }

            .wpbean-pgs-io__checklist-item svg {
                flex-shrink: 0;
                margin-top: 1px;
            }

            .wpbean-pgs-io__checklist-item--yes svg {
                color: #00a32a;
            }

            .wpbean-pgs-io__checklist-item--warn {
                color: #646970;
                font-style: italic;
            }

            .wpbean-pgs-io__checklist-item--warn svg {
                color: #dba617;
            }

            /* ── Button ──────────────────────────────────────────────────── */
            .wpbean-pgs-io__btn {
                display: inline-flex !important;
                align-items: center;
                gap: 6px;
            }

            /* ── Drop zone ───────────────────────────────────────────────── */
            .wpbean-pgs-io__dropzone {
                border: 2px dashed #c3c4c7;
                border-radius: 8px;
                padding: 28px 20px 22px;
                text-align: center;
                cursor: pointer;
                transition: border-color 0.15s ease, background 0.15s ease;
                background: #fafafa;
                outline: none;
            }

            .wpbean-pgs-io__dropzone:hover,
            .wpbean-pgs-io__dropzone:focus {
                border-color: #0073aa;
                background: #f0f6fc;
            }

            .wpbean-pgs-io__dropzone.is-dragging {
                border-color: #0073aa;
                background: #e8f2ff;
                box-shadow: 0 0 0 3px rgba(0, 115, 170, 0.15);
            }

            .wpbean-pgs-io__dropzone.has-file {
                border-color: #00a32a;
                background: #f0faf3;
                border-style: solid;
            }

            .wpbean-pgs-io__dropzone-icon {
                color: #8c8f94;
                margin-bottom: 8px;
                transition: color 0.15s;
            }

            .wpbean-pgs-io__dropzone:hover .wpbean-pgs-io__dropzone-icon,
            .wpbean-pgs-io__dropzone.is-dragging .wpbean-pgs-io__dropzone-icon {
                color: #0073aa;
            }

            .wpbean-pgs-io__dropzone.has-file .wpbean-pgs-io__dropzone-icon {
                color: #00a32a;
            }

            .wpbean-pgs-io__dropzone-primary {
                margin: 0 0 4px;
                font-size: 13px;
                font-weight: 600;
                color: #1d2327;
            }

            .wpbean-pgs-io__dropzone-or {
                margin: 0 0 10px;
                font-size: 12px;
                color: #8c8f94;
            }

            .wpbean-pgs-io__browse-btn {
                display: inline-block;
                cursor: pointer;
                margin-bottom: 10px;
            }

            .wpbean-pgs-io__file-input {
                position: absolute;
                width: 1px;
                height: 1px;
                overflow: hidden;
                opacity: 0;
                pointer-events: none;
            }

            .wpbean-pgs-io__dropzone-hint {
                margin: 0;
                font-size: 11px;
                color: #8c8f94;
            }

            .wpbean-pgs-io__file-selected {
                margin: 10px 0 0;
                font-size: 13px;
                font-weight: 600;
                color: #00a32a;
            }

            .wpbean-pgs-io__file-selected.has-error {
                color: #d63638;
            }

            /* ── Options ─────────────────────────────────────────────────── */
            .wpbean-pgs-io__options {
                margin-top: 20px;
            }

            .wpbean-pgs-io__options-title {
                font-size: 12.5px;
                font-weight: 700;
                color: #1d2327;
                margin: 0 0 12px;
                padding: 0;
                text-transform: uppercase;
                letter-spacing: 0.04em;
            }

            .wpbean-pgs-io__option-group {
                margin-bottom: 14px;
                padding: 12px 14px;
                background: #f9fafb;
                border: 1px solid #e2e4e7;
                border-radius: 6px;
            }

            .wpbean-pgs-io__option-label {
                font-size: 12px;
                font-weight: 600;
                color: #646970;
                margin: 0 0 6px;
                text-transform: uppercase;
                letter-spacing: 0.03em;
            }

            .wpbean-pgs-io__radio-label,
            .wpbean-pgs-io__checkbox-label {
                display: flex;
                align-items: center;
                gap: 7px;
                font-size: 13px;
                color: #3c434a;
                padding: 3px 0;
                cursor: pointer;
            }

            .wpbean-pgs-io__option-hint {
                font-size: 11.5px;
                color: #8c8f94;
                margin: 6px 0 0;
                line-height: 1.45;
            }

            /* ── Footer helpers ──────────────────────────────────────────── */
            .wpbean-pgs-io__file-required {
                font-size: 12px;
                color: #d63638;
                margin: 0;
            }

            /* ── Pro upgrade notice ──────────────────────────────────────── */
            .wpbean-pgs-io__pro-notice {
                display: flex;
                align-items: center;
                gap: 16px;
                background: linear-gradient(135deg, #f5f3ff 0%, #fdf4ff 100%);
                border: 1px solid #e9d5ff;
                border-left: 4px solid #7c3aed;
                border-radius: 8px;
                padding: 16px 20px;
                margin-bottom: 24px;
                flex-wrap: wrap;
            }

            .wpbean-pgs-io__pro-notice-icon {
                width: 44px;
                height: 44px;
                background: #7c3aed;
                border-radius: 10px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #fff;
                flex-shrink: 0;
            }

            .wpbean-pgs-io__pro-notice-content {
                flex: 1;
                min-width: 200px;
            }

            .wpbean-pgs-io__pro-notice-title {
                font-size: 14px;
                font-weight: 700;
                color: #4c1d95;
                margin: 0 0 4px;
                padding: 0;
            }

            .wpbean-pgs-io__pro-notice-desc {
                font-size: 12.5px;
                color: #6b7280;
                margin: 0;
                padding: 0;
                line-height: 1.5;
            }

            .wpbean-pgs-io__pro-notice-btn {
                display: inline-flex;
                align-items: center;
                gap: 7px;
                padding: 9px 18px;
                background: #7c3aed;
                color: #fff !important;
                border-radius: 6px;
                text-decoration: none !important;
                font-size: 13px;
                font-weight: 600;
                white-space: nowrap;
                transition: background 0.15s, box-shadow 0.15s;
                flex-shrink: 0;
                box-shadow: 0 2px 8px rgba(124, 58, 237, 0.3);
            }

            .wpbean-pgs-io__pro-notice-btn:hover,
            .wpbean-pgs-io__pro-notice-btn:focus {
                background: #6d28d9 !important;
                color: #fff !important;
                box-shadow: 0 4px 12px rgba(124, 58, 237, 0.45);
                outline: none;
            }

            .wpbean-pgs-io__pro-notice-btn svg {
                flex-shrink: 0;
            }

            /* ── Locked cards (free plan) ────────────────────────────────── */
            .wpbean-pgs-io__card--locked {
                transition: opacity 0.2s ease;
            }

            .wpbean-pgs-io__card--locked:hover {
                opacity: 0.72;
            }

            .wpbean-pgs-io__card--locked form,
            .wpbean-pgs-io__card--locked .button,
            .wpbean-pgs-io__card--locked .wpbean-pgs-io__dropzone,
            .wpbean-pgs-io__card--locked label.wpbean-pgs-io__browse-btn {
                pointer-events: none;
                cursor: default;
            }
        </style>
    <?php 
    }

    /*--------------------------------------------------------------
      # INLINE SCRIPTS
      --------------------------------------------------------------*/
    private function inline_scripts() : void {
        ?>
        <script>
            (function() {
                'use strict';

                var dropzone = document.getElementById('wpbean-pgs-dropzone');
                var fileInput = document.getElementById('wpbean-pgs-file-input');
                var fileMsg = document.getElementById('wpbean-pgs-file-selected');
                var importBtn = document.getElementById('wpbean-pgs-import-btn');
                var fileReq = document.getElementById('wpbean-pgs-file-required');
                var importForm = document.getElementById('wpbean-pgs-import-form');

                if (!dropzone || !fileInput) return;

                function formatBytes(bytes) {
                    if (bytes < 1024) return bytes + ' B';
                    if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
                    return (bytes / 1048576).toFixed(1) + ' MB';
                }

                function setFile(file) {
                    if (!file) return;

                    if (!file.name.match(/\.json$/i)) {
                        fileMsg.textContent = '<?php 
        echo esc_js( __( 'Invalid file type. Only .json files are accepted.', 'wpbean-product-gallery-slider-for-woocommerce' ) );
        ?>';
                        fileMsg.classList.add('has-error');
                        fileMsg.hidden = false;
                        dropzone.classList.remove('has-file');
                        importBtn.disabled = true;
                        return;
                    }

                    fileMsg.textContent = '✓ ' + file.name + ' (' + formatBytes(file.size) + ')';
                    fileMsg.classList.remove('has-error');
                    fileMsg.hidden = false;
                    dropzone.classList.add('has-file');
                    importBtn.disabled = false;
                    if (fileReq) fileReq.hidden = true;
                }

                // File input → change
                fileInput.addEventListener('change', function() {
                    setFile(this.files[0] || null);
                });

                // Click dropzone (but not the label/input themselves)
                dropzone.addEventListener('click', function(e) {
                    if (e.target.tagName !== 'LABEL' && e.target.tagName !== 'INPUT') {
                        fileInput.click();
                    }
                });

                // Keyboard accessibility
                dropzone.addEventListener('keydown', function(e) {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        fileInput.click();
                    }
                });

                // Drag events
                dropzone.addEventListener('dragover', function(e) {
                    e.preventDefault();
                    this.classList.add('is-dragging');
                });

                dropzone.addEventListener('dragleave', function(e) {
                    if (!this.contains(e.relatedTarget)) {
                        this.classList.remove('is-dragging');
                    }
                });

                dropzone.addEventListener('drop', function(e) {
                    e.preventDefault();
                    this.classList.remove('is-dragging');
                    var file = e.dataTransfer && e.dataTransfer.files[0];
                    if (file) {
                        try {
                            var dt = new DataTransfer();
                            dt.items.add(file);
                            fileInput.files = dt.files;
                        } catch (err) {
                            /* Safari fallback — file name only */
                        }
                        setFile(file);
                    }
                });

                // Form submit guard
                if (importForm) {
                    importForm.addEventListener('submit', function(e) {
                        if (!fileInput.files || !fileInput.files[0]) {
                            e.preventDefault();
                            if (fileReq) fileReq.hidden = false;
                            dropzone.style.borderColor = '#d63638';
                            dropzone.focus();
                        }
                    });
                }
            })();
        </script>
<?php 
    }

}
