<?php

if ( !defined( 'ABSPATH' ) ) {
    exit;
}
/**
 * Metabox for adding YouTube, Vimeo, or hosted videos to WC product galleries.
 *
 * Stores data as `_wcpg_videos` post meta — a JSON-encoded array of objects:
 *   [{ type, url, attachment_id, thumb_id, thumb_url, title }, …]
 *
 * PHP helper methods (get_embed_url, get_thumb_url) are static so the loader
 * can call them without instantiating the class.
 */
class WPBean_PGS_Video_Meta {
    public function __construct() {
        add_action( 'add_meta_boxes', [$this, 'add_meta_box'] );
        add_action(
            'save_post_product',
            [$this, 'save_meta'],
            10,
            2
        );
        add_action( 'admin_enqueue_scripts', [$this, 'enqueue_scripts'] );
    }

    // ── Meta box registration ─────────────────────────────────────────────────
    public function add_meta_box() {
        add_meta_box(
            'wpbean-pgs-videos',
            __( 'Product Gallery Videos', 'wpbean-product-gallery-slider-for-woocommerce' ),
            [$this, 'render_meta_box'],
            'product',
            'side',
            'default'
        );
    }

    public function enqueue_scripts( $hook ) {
        $screen = get_current_screen();
        if ( !$screen || $screen->id !== 'product' ) {
            return;
        }
        wp_enqueue_media();
        wp_enqueue_style(
            'wpbean-pgs-video-meta',
            WPBean_PGS_URL . '/includes/admin/assets/css/video-meta.css',
            [],
            WPBean_PGS_VERSION
        );
        wp_enqueue_script(
            'wpbean-pgs-video-meta',
            WPBean_PGS_URL . '/includes/admin/assets/js/video-meta.js',
            ['jquery'],
            WPBean_PGS_VERSION,
            true
        );
        wp_localize_script( 'wpbean-pgs-video-meta', 'wcpgVideoMeta', [
            'nonce'     => wp_create_nonce( 'wpbean_pgs_videos_save' ),
            'isPremium' => wpbean_pgs_fs()->can_use_premium_code__premium_only(),
            'l10n'      => [
                'chooseVideo' => __( 'Choose Video File', 'wpbean-product-gallery-slider-for-woocommerce' ),
                'useVideo'    => __( 'Use this video', 'wpbean-product-gallery-slider-for-woocommerce' ),
                'chooseThumb' => __( 'Choose Thumbnail', 'wpbean-product-gallery-slider-for-woocommerce' ),
                'useThumb'    => __( 'Use this image', 'wpbean-product-gallery-slider-for-woocommerce' ),
                'remove'      => __( 'Remove', 'wpbean-product-gallery-slider-for-woocommerce' ),
                'addVideo'    => __( '+ Add Video', 'wpbean-product-gallery-slider-for-woocommerce' ),
            ],
        ] );
        // Pass attachment IDs that already have a video so JS can show
        // the video badge on gallery thumbnails without an extra AJAX call.
        $post_id = ( isset( $_GET['post'] ) ? intval( $_GET['post'] ) : 0 );
        // phpcs:ignore WordPress.Security.NonceVerification
        $video_att_ids = [];
        if ( $post_id ) {
            $product = wc_get_product( $post_id );
            if ( $product ) {
                $att_ids = array_filter( array_merge( [$product->get_image_id()], $product->get_gallery_image_ids() ) );
                foreach ( $att_ids as $att_id ) {
                    if ( get_post_meta( $att_id, '_wcpg_image_video_url', true ) || get_post_meta( $att_id, '_wcpg_image_video_id', true ) ) {
                        $video_att_ids[] = intval( $att_id );
                    }
                }
            }
        }
        wp_add_inline_script( 'wpbean-pgs-video-meta', 'window.wcpgVideoAttIds = ' . wp_json_encode( $video_att_ids ) . ';', 'before' );
    }

    // ── Metabox HTML ──────────────────────────────────────────────────────────
    public function render_meta_box( $post ) {
        wp_nonce_field( 'wpbean_pgs_videos_save', 'wpbean_pgs_videos_nonce' );
        $videos = get_post_meta( $post->ID, '_wcpg_videos', true );
        $videos = ( is_array( $videos ) ? array_values( $videos ) : [] );
        echo '<div id="wcpg-video-list">';
        foreach ( $videos as $i => $video ) {
            $this->render_video_row( $i, $video );
        }
        echo '</div>';
        $upgrade_url = 'https://wpbean.com/woocommerce-product-gallery/?utm_content=WPBean+Product+Gallery+Slider&utm_campaign=adminlink&utm_medium=dash-settings&utm_source=FreeVersion';
        $crown_svg = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="14" height="14"><path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7z"/><path d="M3 16h18"/></svg>';
        echo '<div id="wcpg-pro-limit-notice" class="wcpg-pro-limit-notice" style="display:none">';
        echo '<div class="wcpg-pro-notice-header">';
        echo '<span class="wcpg-pro-notice-icon">' . $crown_svg . '</span>';
        // phpcs:ignore WordPress.Security.EscapeOutput
        echo '<strong class="wcpg-pro-notice-title">' . esc_html__( 'Unlimited Videos — Pro', 'wpbean-product-gallery-slider-for-woocommerce' ) . '</strong>';
        echo '</div>';
        echo '<p class="wcpg-pro-notice-desc">' . esc_html__( 'The free plan allows 1 video per product. Upgrade to Pro to add more.', 'wpbean-product-gallery-slider-for-woocommerce' ) . '</p>';
        echo '<a href="' . esc_url( $upgrade_url ) . '" class="wcpg-pro-notice-btn" target="_blank" rel="noopener">' . esc_html__( 'Upgrade to Pro', 'wpbean-product-gallery-slider-for-woocommerce' ) . ' &rsaquo;</a>';
        echo '</div>';
        // Add video button
        echo '<button type="button" id="wcpg-add-video">' . '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" width="13" height="13"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>' . esc_html__( 'Add Video', 'wpbean-product-gallery-slider-for-woocommerce' ) . '</button>';
        // Confirm modal (shared across all items)
        echo '<div id="wcpg-confirm-modal" class="wcpg-confirm-modal">' . '<div class="wcpg-confirm-backdrop"></div>' . '<div class="wcpg-confirm-dialog">' . '<div class="wcpg-confirm-icon"></div>' . '<h4 class="wcpg-confirm-title"></h4>' . '<p class="wcpg-confirm-message"></p>' . '<div class="wcpg-confirm-actions">' . '<button type="button" class="wcpg-confirm-cancel">Cancel</button>' . '<button type="button" class="wcpg-confirm-ok">Confirm</button>' . '</div>' . '</div>' . '</div>';
        // Inline template for JS row injection
        echo '<script type="text/html" id="wcpg-video-row-tpl">';
        $this->render_video_row( '__IDX__', [] );
        echo '</script>';
        // Pass current row count to JS
        echo '<script>window.wcpgVideoIndex=' . count( $videos ) . ';</script>';
    }

    private function render_video_row( $i, $video ) {
        $type = ( isset( $video['type'] ) ? esc_attr( $video['type'] ) : 'youtube' );
        $url = ( isset( $video['url'] ) ? esc_attr( $video['url'] ) : '' );
        $title = ( isset( $video['title'] ) ? esc_attr( $video['title'] ) : '' );
        $thumb_id = ( isset( $video['thumb_id'] ) ? intval( $video['thumb_id'] ) : 0 );
        $attachment_id = ( isset( $video['attachment_id'] ) ? intval( $video['attachment_id'] ) : 0 );
        $thumb_url_stored = ( isset( $video['thumb_url'] ) ? esc_attr( $video['thumb_url'] ) : '' );
        // Resolve thumbnail preview URL
        $thumb_preview = '';
        if ( $thumb_id ) {
            $thumb_preview = ( wp_get_attachment_image_url( $thumb_id, 'thumbnail' ) ?: '' );
        } elseif ( $thumb_url_stored ) {
            $thumb_preview = $thumb_url_stored;
        }
        // Resolve video file name for upload type
        $video_filename = '';
        if ( $type === 'upload' && $attachment_id ) {
            $video_filename = basename( ( get_attached_file( $attachment_id ) ?: '' ) );
        }
        $style_url = ( $type !== 'upload' ? '' : 'display:none' );
        $style_upload = ( $type === 'upload' ? '' : 'display:none' );
        $type_labels = [
            'youtube' => 'YouTube',
            'vimeo'   => 'Vimeo',
            'upload'  => 'Video File',
        ];
        $type_label = $type_labels[$type] ?? 'Video';
        $header_title = ( (( (( $title ?: $url )) ?: $video_filename )) ?: '' );
        // SVG icons used inline
        $icon_grip = '<svg width="10" height="16" viewBox="0 0 10 16" fill="currentColor"><circle cx="2" cy="2" r="1.4"/><circle cx="8" cy="2" r="1.4"/><circle cx="2" cy="8" r="1.4"/><circle cx="8" cy="8" r="1.4"/><circle cx="2" cy="14" r="1.4"/><circle cx="8" cy="14" r="1.4"/></svg>';
        $icon_copy = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>';
        $icon_trash = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>';
        $icon_chevron = '<svg class="wcpg-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>';
        $icon_video = '<svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>';
        $icon_image = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>';
        $icon_upload = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="12" height="12"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>';
        $icon_file = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="12" height="12"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>';
        ?>
        <div class="wcpg-video-item" data-idx="<?php 
        echo esc_attr( $i );
        ?>">

            <!-- ── Accordion Header ── -->
            <div class="wcpg-item-header">

                <div class="wcpg-drag-handle" draggable="true" title="<?php 
        esc_attr_e( 'Drag to reorder', 'wpbean-product-gallery-slider-for-woocommerce' );
        ?>">
                    <?php 
        echo $icon_grip;
        // phpcs:ignore WordPress.Security.EscapeOutput
        ?>
                </div>

                <div class="wcpg-header-thumb">
                    <?php 
        if ( $thumb_preview ) {
            ?>
                        <img src="<?php 
            echo esc_url( $thumb_preview );
            ?>" alt="">
                    <?php 
        } else {
            ?>
                        <div class="wcpg-header-thumb-icon"><?php 
            echo $icon_video;
            // phpcs:ignore WordPress.Security.EscapeOutput
            ?></div>
                    <?php 
        }
        ?>
                </div>

                <div class="wcpg-header-info">
                    <span class="wcpg-type-badge wcpg-type-<?php 
        echo esc_attr( $type );
        ?>"><?php 
        echo esc_html( $type_label );
        ?></span>
                    <span class="wcpg-header-title <?php 
        echo ( $header_title ? '' : 'wcpg-header-title-empty' );
        ?>">
                        <?php 
        echo esc_html( ( $header_title ?: __( 'New Video', 'wpbean-product-gallery-slider-for-woocommerce' ) ) );
        ?>
                    </span>
                </div>

                <div class="wcpg-item-controls">
                    <button type="button" class="wcpg-btn-icon wcpg-duplicate-btn" title="<?php 
        esc_attr_e( 'Duplicate', 'wpbean-product-gallery-slider-for-woocommerce' );
        ?>">
                        <?php 
        echo $icon_copy;
        // phpcs:ignore WordPress.Security.EscapeOutput
        ?>
                    </button>
                    <button type="button" class="wcpg-btn-icon wcpg-delete-btn" title="<?php 
        esc_attr_e( 'Delete', 'wpbean-product-gallery-slider-for-woocommerce' );
        ?>">
                        <?php 
        echo $icon_trash;
        // phpcs:ignore WordPress.Security.EscapeOutput
        ?>
                    </button>
                    <button type="button" class="wcpg-btn-icon wcpg-toggle-btn" title="<?php 
        esc_attr_e( 'Toggle', 'wpbean-product-gallery-slider-for-woocommerce' );
        ?>">
                        <?php 
        echo $icon_chevron;
        // phpcs:ignore WordPress.Security.EscapeOutput
        ?>
                    </button>
                </div>

            </div><!-- /.wcpg-item-header -->

            <!-- ── Accordion Body ── -->
            <div class="wcpg-item-body">

                <div class="wcpg-field-row">
                    <label><?php 
        esc_html_e( 'Type', 'wpbean-product-gallery-slider-for-woocommerce' );
        ?></label>
                    <select name="wcpg_videos[<?php 
        echo esc_attr( $i );
        ?>][type]" class="wcpg-video-type">
                        <option value="youtube" <?php 
        selected( $type, 'youtube' );
        ?>><?php 
        esc_html_e( 'YouTube', 'wpbean-product-gallery-slider-for-woocommerce' );
        ?></option>
                        <option value="vimeo" <?php 
        selected( $type, 'vimeo' );
        ?>><?php 
        esc_html_e( 'Vimeo', 'wpbean-product-gallery-slider-for-woocommerce' );
        ?></option>
                        <option value="upload" <?php 
        selected( $type, 'upload' );
        ?>><?php 
        esc_html_e( 'Video File (Upload)', 'wpbean-product-gallery-slider-for-woocommerce' );
        ?></option>
                    </select>
                </div>

                <div class="wcpg-field-row wcpg-field-url" style="<?php 
        echo esc_attr( $style_url );
        ?>">
                    <label><?php 
        esc_html_e( 'URL', 'wpbean-product-gallery-slider-for-woocommerce' );
        ?></label>
                    <input type="text"
                        name="wcpg_videos[<?php 
        echo esc_attr( $i );
        ?>][url]"
                        class="wcpg-video-url"
                        value="<?php 
        echo esc_attr( $url );
        ?>"
                        placeholder="<?php 
        esc_attr_e( 'Paste YouTube or Vimeo URL…', 'wpbean-product-gallery-slider-for-woocommerce' );
        ?>" />
                </div>

                <div class="wcpg-field-row wcpg-field-upload" style="<?php 
        echo esc_attr( $style_upload );
        ?>">
                    <label><?php 
        esc_html_e( 'File', 'wpbean-product-gallery-slider-for-woocommerce' );
        ?></label>
                    <input type="hidden" name="wcpg_videos[<?php 
        echo esc_attr( $i );
        ?>][attachment_id]" class="wcpg-attachment-id" value="<?php 
        echo esc_attr( $attachment_id );
        ?>">
                    <button type="button" class="wcpg-choose-video">
                        <?php 
        if ( $video_filename ) {
            ?>
                            <?php 
            echo $icon_file;
            // phpcs:ignore WordPress.Security.EscapeOutput
            ?>
                            <span><?php 
            echo esc_html( $video_filename );
            ?></span>
                        <?php 
        } else {
            ?>
                            <?php 
            echo $icon_upload;
            // phpcs:ignore WordPress.Security.EscapeOutput
            ?>
                            <span><?php 
            esc_html_e( 'Upload Video File…', 'wpbean-product-gallery-slider-for-woocommerce' );
            ?></span>
                        <?php 
        }
        ?>
                    </button>
                </div>

                <div class="wcpg-field-row">
                    <label>
                        <?php 
        esc_html_e( 'Title', 'wpbean-product-gallery-slider-for-woocommerce' );
        ?>
                        <span class="wcpg-field-optional"><?php 
        esc_html_e( 'optional', 'wpbean-product-gallery-slider-for-woocommerce' );
        ?></span>
                    </label>
                    <input type="text"
                        name="wcpg_videos[<?php 
        echo esc_attr( $i );
        ?>][title]"
                        class="wcpg-video-title"
                        value="<?php 
        echo esc_attr( $title );
        ?>"
                        placeholder="<?php 
        esc_attr_e( 'Video title…', 'wpbean-product-gallery-slider-for-woocommerce' );
        ?>" />
                </div>

                <div class="wcpg-field-row">
                    <label><?php 
        esc_html_e( 'Thumbnail', 'wpbean-product-gallery-slider-for-woocommerce' );
        ?></label>
                    <div class="wcpg-thumb-inner">
                        <div class="wcpg-thumb-preview">
                            <?php 
        if ( $thumb_preview ) {
            ?>
                                <img src="<?php 
            echo esc_url( $thumb_preview );
            ?>" alt="">
                            <?php 
        } else {
            ?>
                                <div class="wcpg-thumb-empty"><?php 
            echo $icon_image;
            // phpcs:ignore WordPress.Security.EscapeOutput
            ?></div>
                            <?php 
        }
        ?>
                        </div>
                        <div class="wcpg-thumb-actions">
                            <input type="hidden" name="wcpg_videos[<?php 
        echo esc_attr( $i );
        ?>][thumb_id]" class="wcpg-thumb-id" value="<?php 
        echo esc_attr( $thumb_id );
        ?>">
                            <input type="hidden" name="wcpg_videos[<?php 
        echo esc_attr( $i );
        ?>][thumb_url]" class="wcpg-thumb-url" value="<?php 
        echo esc_attr( $thumb_url_stored );
        ?>">
                            <button type="button" class="wcpg-btn-secondary wcpg-choose-thumb">
                                <?php 
        echo $icon_upload;
        // phpcs:ignore WordPress.Security.EscapeOutput
        ?>
                                <?php 
        esc_html_e( 'Set Thumbnail', 'wpbean-product-gallery-slider-for-woocommerce' );
        ?>
                            </button>
                            <button type="button" class="wcpg-btn-danger-ghost wcpg-remove-thumb" <?php 
        echo ( $thumb_id || $thumb_preview ? '' : ' style="display:none"' );
        ?>>
                                <?php 
        esc_html_e( 'Remove', 'wpbean-product-gallery-slider-for-woocommerce' );
        ?>
                            </button>
                        </div>
                    </div>
                </div>

            </div><!-- /.wcpg-item-body -->

        </div><!-- /.wcpg-video-item -->
<?php 
    }

    // ── Save ──────────────────────────────────────────────────────────────────
    public function save_meta( $post_id, $post ) {
        if ( !isset( $_POST['wpbean_pgs_videos_nonce'] ) ) {
            return;
        }
        if ( !wp_verify_nonce( sanitize_text_field( wp_unslash( $_POST['wpbean_pgs_videos_nonce'] ) ), 'wpbean_pgs_videos_save' ) ) {
            return;
        }
        if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
            return;
        }
        if ( !current_user_can( 'edit_post', $post_id ) ) {
            return;
        }
        // Each field is sanitized individually in the foreach below
        // phpcs:disable
        $raw = ( isset( $_POST['wcpg_videos'] ) && is_array( $_POST['wcpg_videos'] ) ? wp_unslash( $_POST['wcpg_videos'] ) : [] );
        // phpcs:enable
        $videos = [];
        foreach ( $raw as $v ) {
            $type = sanitize_key( $v['type'] ?? '' );
            if ( !in_array( $type, ['youtube', 'vimeo', 'upload'], true ) ) {
                continue;
            }
            $url = esc_url_raw( $v['url'] ?? '' );
            $attachment_id = intval( $v['attachment_id'] ?? 0 );
            $thumb_id = intval( $v['thumb_id'] ?? 0 );
            $thumb_url = esc_url_raw( $v['thumb_url'] ?? '' );
            $title = sanitize_text_field( $v['title'] ?? '' );
            // Require a URL for embed types, or an attachment_id for uploads
            if ( $type !== 'upload' && empty( $url ) ) {
                continue;
            }
            if ( $type === 'upload' && !$attachment_id ) {
                continue;
            }
            $videos[] = [
                'type'          => $type,
                'url'           => $url,
                'attachment_id' => $attachment_id,
                'thumb_id'      => $thumb_id,
                'thumb_url'     => $thumb_url,
                'title'         => $title,
            ];
        }
        $videos = array_slice( $videos, 0, 1 );
        update_post_meta( $post_id, '_wcpg_videos', $videos );
    }

    // ── Static helpers (used by the frontend loader) ──────────────────────────
    /**
     * Returns the iframe embed URL for a YouTube or Vimeo video,
     * with query parameters built from the active zoom config.
     */
    public static function get_embed_url( array $video, array $config = [] ) : string {
        $type = $video['type'] ?? '';
        $url = $video['url'] ?? '';
        $autoplay = !empty( $config['videoAutoplay'] );
        $muted = !empty( $config['videoMuted'] );
        $loop = !empty( $config['videoLoop'] );
        $hide_related = ( isset( $config['videoHideRelated'] ) ? (bool) $config['videoHideRelated'] : true );
        $show_controls = ( isset( $config['videoEmbedControls'] ) ? (bool) $config['videoEmbedControls'] : true );
        if ( $type === 'youtube' ) {
            $id = self::extract_youtube_id( $url );
            if ( !$id ) {
                return '';
            }
            // Always include enablejsapi + origin (required pair — YouTube enforces
            // origin validation on live domains when enablejsapi=1 is present).
            $params = [
                'enablejsapi' => 1,
                'origin'      => home_url(),
            ];
            if ( $hide_related ) {
                $params['rel'] = 0;
            }
            if ( $autoplay ) {
                $params['autoplay'] = 1;
                if ( $muted ) {
                    $params['mute'] = 1;
                }
            }
            if ( $loop ) {
                $params['loop'] = 1;
                $params['playlist'] = $id;
                // required for YouTube loop
            }
            // controls=0 was deprecated by YouTube in 2023 and now triggers
            // Error 153 ("Video player configuration error") on production domains.
            // Only send the parameter when controls are explicitly enabled.
            if ( $show_controls ) {
                $params['controls'] = 1;
            }
            return 'https://www.youtube.com/embed/' . $id . '?' . http_build_query( $params );
        }
        if ( $type === 'vimeo' ) {
            $id = self::extract_vimeo_id( $url );
            if ( !$id ) {
                return '';
            }
            $params = array_filter( [
                'autoplay' => ( $autoplay ? 1 : 0 ),
                'muted'    => ( $autoplay && $muted ? 1 : 0 ),
                'loop'     => ( $loop ? 1 : 0 ),
                'controls' => ( $show_controls ? 1 : 0 ),
                'title'    => 0,
                'byline'   => 0,
                'portrait' => 0,
            ], function ( $v ) {
                return $v !== '';
            } );
            return 'https://player.vimeo.com/video/' . $id . '?' . http_build_query( $params );
        }
        return '';
    }

    /**
     * Returns a thumbnail URL for a video item. Priority:
     * 1. Custom WP media thumbnail (thumb_id)
     * 2. Stored auto-thumbnail URL (thumb_url) — set by admin JS for Vimeo
     * 3. YouTube standard thumbnail computed from the video ID
     * 4. Empty string (no thumbnail available yet)
     */
    public static function get_thumb_url( array $video, string $size = 'woocommerce_gallery_thumbnail' ) : string {
        // Custom thumbnail via media library
        $thumb_id = intval( $video['thumb_id'] ?? 0 );
        if ( $thumb_id ) {
            $url = wp_get_attachment_image_url( $thumb_id, $size );
            if ( $url ) {
                return $url;
            }
        }
        // Stored URL (e.g. fetched by admin JS for Vimeo)
        $stored = $video['thumb_url'] ?? '';
        if ( $stored ) {
            return esc_url( $stored );
        }
        // YouTube auto-thumbnail
        if ( ($video['type'] ?? '') === 'youtube' ) {
            $id = self::extract_youtube_id( $video['url'] ?? '' );
            // mqdefault is 320×180 (true 16:9, no letterbox bars).
            // hqdefault is 480×360 (4:3 with black bars baked in).
            if ( $id ) {
                return "https://img.youtube.com/vi/{$id}/mqdefault.jpg";
            }
        }
        // Vimeo auto-thumbnail via oEmbed API (result cached for 24 h per video ID).
        if ( ($video['type'] ?? '') === 'vimeo' ) {
            $id = self::extract_vimeo_id( $video['url'] ?? '' );
            if ( $id ) {
                $cache_key = 'wcpg_vimeo_thumb_' . $id;
                $cached = get_transient( $cache_key );
                if ( $cached !== false ) {
                    return (string) $cached;
                    // may be '' if a previous fetch failed
                }
                $response = wp_remote_get( 'https://vimeo.com/api/oembed.json?url=' . rawurlencode( 'https://vimeo.com/' . $id ), [
                    'timeout' => 5,
                ] );
                if ( !is_wp_error( $response ) && 200 === (int) wp_remote_retrieve_response_code( $response ) ) {
                    $data = json_decode( wp_remote_retrieve_body( $response ), true );
                    $thumb = ( isset( $data['thumbnail_url'] ) ? esc_url_raw( $data['thumbnail_url'] ) : '' );
                    set_transient( $cache_key, $thumb, DAY_IN_SECONDS );
                    if ( $thumb ) {
                        return $thumb;
                    }
                } else {
                    // Cache the failure briefly so a broken URL doesn't block every page load.
                    set_transient( $cache_key, '', HOUR_IN_SECONDS );
                }
            }
        }
        return '';
    }

    /**
     * Returns the direct video URL for an upload-type item.
     */
    public static function get_video_url( array $video ) : string {
        if ( ($video['type'] ?? '') !== 'upload' ) {
            return '';
        }
        $att_id = intval( $video['attachment_id'] ?? 0 );
        if ( !$att_id ) {
            return '';
        }
        return ( wp_get_attachment_url( $att_id ) ?: '' );
    }

    // ── Private parsers ───────────────────────────────────────────────────────
    public static function extract_youtube_id( string $url ) : string {
        // Matches youtube.com/watch?v=ID, youtu.be/ID, youtube.com/shorts/ID, etc.
        if ( preg_match( '/(?:youtube\\.com\\/(?:watch\\?.*v=|shorts\\/|embed\\/|v\\/)|youtu\\.be\\/)([a-zA-Z0-9_-]{11})/', $url, $m ) ) {
            return $m[1];
        }
        return '';
    }

    public static function extract_vimeo_id( string $url ) : string {
        if ( preg_match( '/vimeo\\.com\\/(?:video\\/)?(\\d+)/', $url, $m ) ) {
            return $m[1];
        }
        return '';
    }

}
