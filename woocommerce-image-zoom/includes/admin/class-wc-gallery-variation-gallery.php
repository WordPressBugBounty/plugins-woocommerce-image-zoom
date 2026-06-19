<?php

if (!defined('ABSPATH')) exit;

/**
 * Handles variation gallery images:
 *  - Admin UI field (add / reorder / remove extra images per variation)
 *  - Saving post-meta on each variation post
 *  - Injecting gallery data into woocommerce_available_variation for the frontend
 */
class WPBean_PGS_Variation_Gallery
{

    public function __construct()
    {
        // Admin: render gallery field right below the variation image (priority 1 = first item)
        add_action('woocommerce_product_after_variable_attributes', [$this, 'render_field'], 1, 3);

        // Admin: save gallery IDs when the product is saved
        add_action('woocommerce_save_product_variation', [$this, 'save_field'], 10, 2);

        // Admin: enqueue our JS + CSS on product edit screens
        add_action('admin_enqueue_scripts', [$this, 'enqueue_scripts']);

        // Allow the media library AJAX handler to filter by specific attachment IDs
        // when the Edit Gallery button passes a wcpg_ids query arg.
        add_filter('ajax_query_attachments_args', [$this, 'filter_media_query']);

        // Frontend: inject variation gallery data into the variation payload
        // Priority 15 runs after inject_variation_image_sizes (priority 10)
        add_filter('woocommerce_available_variation', [$this, 'inject_gallery_data'], 15, 3);
    }

    // ─────────────────────────────────────────────────────────────
    // Admin enqueue
    // ─────────────────────────────────────────────────────────────

    public function enqueue_scripts($hook)
    {
        global $post;

        // Only on the product add/edit screen
        if (!in_array($hook, ['post.php', 'post-new.php'], true)) return;
        if (!isset($post->post_type) || $post->post_type !== 'product') return;

        wp_enqueue_media();

        wp_enqueue_script(
            'wpbean-pgs-variation-gallery',
            WPBean_PGS_URL . '/includes/admin/assets/js/variation-gallery-admin.js',
            ['jquery', 'jquery-ui-sortable'],
            WPBean_PGS_VERSION,
            true
        );

        wp_localize_script('wpbean-pgs-variation-gallery', 'wcpgVarGallery', [
            'selectImages'  => __('Select Gallery Images', 'wpbean-product-gallery-slider-for-woocommerce'),
            'addToGallery'  => __('Add to Gallery', 'wpbean-product-gallery-slider-for-woocommerce'),
            'editGallery'   => __('Edit Gallery', 'wpbean-product-gallery-slider-for-woocommerce'),
            'updateGallery' => __('Update Gallery', 'wpbean-product-gallery-slider-for-woocommerce'),
            'removeTitle'   => __('Remove image', 'wpbean-product-gallery-slider-for-woocommerce'),
            'removeAllTitle' => __('Remove All Images', 'wpbean-product-gallery-slider-for-woocommerce'),
            'removeAllMsg'  => __('All gallery images for this variation will be removed. This cannot be undone.', 'wpbean-product-gallery-slider-for-woocommerce'),
            'removeAllBtn'  => __('Remove All', 'wpbean-product-gallery-slider-for-woocommerce'),
            'cancel'        => __('Cancel', 'wpbean-product-gallery-slider-for-woocommerce'),
        ]);

        wp_enqueue_style(
            'wpbean-pgs-variation-gallery',
            WPBean_PGS_URL . '/includes/admin/assets/css/variation-gallery-admin.css',
            [],
            WPBean_PGS_VERSION
        );
    }

    // ─────────────────────────────────────────────────────────────
    // Admin: render gallery field
    // ─────────────────────────────────────────────────────────────

    public function render_field($loop, $variation_data, $variation)
    {
        $is_premium = wpbean_pgs_fs()->can_use_premium_code__premium_only();
?>
        <div class="wcpg-var-gallery-wrap">
            <div class="wcpg-vg-card">

                <div class="wcpg-vg-card-header">
                    <span class="wcpg-vg-card-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="3" y="3" width="18" height="18" rx="2" />
                            <circle cx="8.5" cy="8.5" r="1.5" />
                            <polyline points="21 15 16 10 5 21" />
                        </svg>
                    </span>
                    <div class="wcpg-vg-card-title">
                        <strong><?php esc_html_e('Variation Gallery', 'wpbean-product-gallery-slider-for-woocommerce'); ?></strong>
                        <span><?php echo $is_premium
                            ? esc_html__('Extra images for this variation. Drag to reorder.', 'wpbean-product-gallery-slider-for-woocommerce')
                            : esc_html__('Available in Pro — show unique images per variation.', 'wpbean-product-gallery-slider-for-woocommerce');
                        ?></span>
                    </div>
                    <?php if ($is_premium) : ?>
                    <div class="wcpg-vg-card-actions">
                        <?php
                        $gallery_ids = get_post_meta($variation->ID, '_wcpg_variation_gallery', true);
                        $gallery_ids = is_array($gallery_ids) ? array_values(array_filter(array_map('absint', $gallery_ids))) : [];
                        $has_images  = !empty($gallery_ids);
                        ?>
                        <button type="button" class="wcpg-btn-icon wcpg-vg-btn-edit<?php echo $has_images ? '' : ' wcpg-vg-hidden'; ?>" title="<?php esc_attr_e('Edit Gallery', 'wpbean-product-gallery-slider-for-woocommerce'); ?>">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                            </svg>
                        </button>
                        <button type="button" class="wcpg-btn-icon wcpg-delete-btn wcpg-vg-btn-remove-all<?php echo $has_images ? '' : ' wcpg-vg-hidden'; ?>" title="<?php esc_attr_e('Remove all images', 'wpbean-product-gallery-slider-for-woocommerce'); ?>">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="3 6 5 6 21 6" />
                                <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                                <path d="M10 11v6" />
                                <path d="M14 11v6" />
                                <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
                            </svg>
                        </button>
                    </div>
                    <?php endif; ?>
                </div>

                <?php if ($is_premium) : ?>

                <div class="wcpg-vg-card-body">
                    <?php
                    $ids_value = implode(',', $gallery_ids);
                    ?>
                    <ul class="wcpg-vg-images<?php echo $has_images ? '' : ' wcpg-vg-hidden'; ?>">
                        <?php foreach ($gallery_ids as $attachment_id) :
                            $thumb = wp_get_attachment_image_url($attachment_id, 'thumbnail');
                            if (!$thumb) continue;
                        ?>
                            <li class="wcpg-vg-item" data-id="<?php echo esc_attr($attachment_id); ?>">
                                <img src="<?php echo esc_url($thumb); ?>" alt="">
                                <button type="button" class="wcpg-vg-item-remove" title="<?php esc_attr_e('Remove', 'wpbean-product-gallery-slider-for-woocommerce'); ?>">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                                        <line x1="18" y1="6" x2="6" y2="18" />
                                        <line x1="6" y1="6" x2="18" y2="18" />
                                    </svg>
                                </button>
                            </li>
                        <?php endforeach; ?>
                    </ul>

                    <button type="button" class="wcpg-vg-add-btn">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                        <?php esc_html_e('Add Gallery Images', 'wpbean-product-gallery-slider-for-woocommerce'); ?>
                    </button>

                    <input type="hidden"
                        name="wcpg_variation_gallery[<?php echo esc_attr($loop); ?>]"
                        class="wcpg-var-gallery-ids"
                        value="<?php echo esc_attr($ids_value); ?>">
                </div>

                <?php else : ?>

                <div class="wcpg-vg-upgrade-bar">
                    <span class="wcpg-vg-upgrade-bar-badge">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7z"/><path d="M3 16h18"/></svg>
                        <?php esc_html_e('Pro', 'wpbean-product-gallery-slider-for-woocommerce'); ?>
                    </span>
                    <span class="wcpg-vg-upgrade-bar-msg"><?php esc_html_e('Assign unique images per variation. Available in Pro.', 'wpbean-product-gallery-slider-for-woocommerce'); ?></span>
                    <a href="https://wpbean.com/woocommerce-product-gallery/?utm_content=WPBean+Product+Gallery+Slider&amp;utm_campaign=adminlink&amp;utm_medium=dash-settings&amp;utm_source=FreeVersion" class="wcpg-vg-upgrade-bar-btn" target="_blank" rel="noopener"><?php esc_html_e('Upgrade', 'wpbean-product-gallery-slider-for-woocommerce'); ?> &rsaquo;</a>
                </div>

                <?php endif; ?>

            </div>
        </div>
<?php
    }

    // ─────────────────────────────────────────────────────────────
    // Admin: save gallery IDs
    // ─────────────────────────────────────────────────────────────

    public function save_field($variation_id, $loop)
    {
        // phpcs:ignore WordPress.Security.NonceVerification.Missing -- nonce already verified by WooCommerce before firing woocommerce_save_product_variation
        $raw = isset($_POST['wcpg_variation_gallery'][$loop])
            // phpcs:ignore WordPress.Security.NonceVerification.Missing
            ? sanitize_text_field(wp_unslash($_POST['wcpg_variation_gallery'][$loop]))
            : '';

        if (empty($raw)) {
            delete_post_meta($variation_id, '_wcpg_variation_gallery');
            return;
        }

        $ids = array_values(array_filter(array_map('absint', explode(',', $raw))));

        if (empty($ids)) {
            delete_post_meta($variation_id, '_wcpg_variation_gallery');
        } else {
            update_post_meta($variation_id, '_wcpg_variation_gallery', $ids);
        }
    }

    // ─────────────────────────────────────────────────────────────
    // Frontend: inject gallery data into variation payload
    // ─────────────────────────────────────────────────────────────

    public function inject_gallery_data($variation_data, $product, $variation)
    {
        // Resolve active rule for this product
        $repository = new WPBean_PGS_Rules_Repository();
        $result     = $repository->get_active_config_for_product($product->get_id());

        // No active rule → plugin not active for this product
        if ($result['rule_id'] === 0) {
            return $variation_data;
        }

        // Always stamp wcpg_has_image here — this class is instantiated in all
        // contexts (including WooCommerce AJAX variation loading), whereas
        // WPBean_PGS_WC_Gallery_Loader is only instantiated on non-admin requests.
        // zoom-init.js relies on this flag to skip swapping when WooCommerce
        // falls back to the parent product image for variations with no image.
        $variation_data['image']['wcpg_has_image'] = ! empty($variation->get_image_id());

        $config = $result['config'];

        // Feature must be enabled in the settings
        if (empty($config['variationGallery'])) {
            return $variation_data;
        }

        $extra_ids = get_post_meta($variation->get_id(), '_wcpg_variation_gallery', true);
        if (empty($extra_ids) || !is_array($extra_ids)) {
            return $variation_data;
        }

        // Image size allow-list (same as loader)
        $allowed_sizes = [
            'thumbnail',
            'medium',
            'medium_large',
            'large',
            'full',
            'woocommerce_thumbnail',
            'woocommerce_single',
            'woocommerce_gallery_thumbnail',
        ];

        $main_size  = in_array($config['mainImageSize'] ?? '', $allowed_sizes, true)
            ? $config['mainImageSize'] : 'large';
        $thumb_size = in_array($config['thumbnailImageSize'] ?? '', $allowed_sizes, true)
            ? $config['thumbnailImageSize'] : 'woocommerce_gallery_thumbnail';

        $gallery = [];

        // First slot: the variation's own main image (if assigned)
        $main_image_id = $variation->get_image_id();
        if ($main_image_id) {
            $entry = $this->build_gallery_entry($main_image_id, $main_size, $thumb_size, $config);
            if ($entry) {
                $gallery[] = $entry;
            }
        }

        // Additional images stored in meta
        foreach ($extra_ids as $attachment_id) {
            $attachment_id = absint($attachment_id);
            if (!$attachment_id) continue;

            $entry = $this->build_gallery_entry($attachment_id, $main_size, $thumb_size, $config);
            if ($entry) {
                $gallery[] = $entry;
            }
        }

        if (!empty($gallery)) {
            $variation_data['wcpg_variation_gallery'] = $gallery;
        }

        return $variation_data;
    }

    // ─────────────────────────────────────────────────────────────
    // Helpers
    // ─────────────────────────────────────────────────────────────

    /**
     * When JS passes wcpg_ids in the media library query (Edit Gallery mode),
     * restrict results to those attachment IDs only.
     */
    public function filter_media_query($query)
    {
        // phpcs:ignore WordPress.Security.NonceVerification.Recommended -- nonce already verified by WordPress's media AJAX handler before firing ajax_query_attachments_args
        if (!empty($_REQUEST['query']['wcpg_ids'])) {
            // phpcs:ignore WordPress.Security.NonceVerification.Recommended
            $raw = sanitize_text_field(wp_unslash($_REQUEST['query']['wcpg_ids']));
            $ids = array_values(array_filter(array_map('absint', explode(',', $raw))));
            if (!empty($ids)) {
                $query['post__in'] = $ids;
                $query['orderby']  = 'post__in';
            }
        }
        return $query;
    }

    private function build_gallery_entry($attachment_id, $main_size, $thumb_size, $config = [])
    {
        $main_src = wp_get_attachment_image_url($attachment_id, $main_size);
        if (!$main_src) return null;

        $thumb_src = wp_get_attachment_image_url($attachment_id, $thumb_size);
        $full_src  = wp_get_attachment_image_url($attachment_id, 'full');
        $main_img  = wp_get_attachment_image_src($attachment_id, $main_size);

        // ── Per-image linked video (same logic as class-wc-gallery-loader.php) ──
        $video_type  = '';
        $video_embed = '';
        $video_src   = '';

        $raw_video_url = get_post_meta($attachment_id, '_wcpg_image_video_url', true);
        $raw_video_id  = intval(get_post_meta($attachment_id, '_wcpg_image_video_id', true));

        if ($raw_video_url) {
            $yt_id = WPBean_PGS_Video_Meta::extract_youtube_id($raw_video_url);
            if ($yt_id) {
                $video_type  = 'youtube';
                $video_embed = WPBean_PGS_Video_Meta::get_embed_url(
                    ['type' => 'youtube', 'url' => $raw_video_url],
                    $config
                );
            } else {
                $vimeo_id = WPBean_PGS_Video_Meta::extract_vimeo_id($raw_video_url);
                if ($vimeo_id) {
                    $video_type  = 'vimeo';
                    $video_embed = WPBean_PGS_Video_Meta::get_embed_url(
                        ['type' => 'vimeo', 'url' => $raw_video_url],
                        $config
                    );
                } else {
                    $video_type = 'hosted';
                    $video_src  = esc_url_raw($raw_video_url);
                }
            }
        } elseif ($raw_video_id) {
            $att_url = wp_get_attachment_url($raw_video_id);
            if ($att_url) {
                $video_type = 'hosted';
                $video_src  = $att_url;
            }
        }

        return [
            'id'          => $attachment_id,
            'main_src'    => $main_src,
            'thumb_src'   => $thumb_src ?: $main_src,
            'full_src'    => $full_src  ?: $main_src,
            'caption'     => wp_get_attachment_caption($attachment_id) ?: '',
            'width'       => $main_img ? (int) $main_img[1] : 0,
            'height'      => $main_img ? (int) $main_img[2] : 0,
            'video_type'  => $video_type,
            'video_embed' => $video_embed,
            'video_src'   => $video_src,
        ];
    }
}
