<?php

if ( !defined( 'ABSPATH' ) ) {
    exit;
}
/**
 * Adds a "Gallery Video" field to the WordPress attachment edit panel
 * (the sidebar shown when editing an image in the media library or in the
 * wp.media modal on the product edit screen).
 *
 * Single combined input: paste a YouTube/Vimeo URL, or click the upload
 * button at the right edge of the field to pick a hosted video file.
 *
 * Stored meta keys (per attachment):
 *   _wcpg_image_video_url  — YouTube / Vimeo / direct video URL (typed)
 *   _wcpg_image_video_id   — WP attachment ID of an uploaded video file
 *
 * The frontend loader reads these keys and injects data-wcpg-image-video-*
 * attributes so the gallery JS shows a play button and plays the video.
 */
class WPBean_PGS_Attachment_Video {
    public function __construct() {
        add_filter(
            'attachment_fields_to_edit',
            [$this, 'add_fields'],
            10,
            2
        );
        add_filter(
            'attachment_fields_to_save',
            [$this, 'save_fields'],
            10,
            2
        );
    }

    /**
     * Returns true when we are either on the product edit screen or in an
     * AJAX call whose HTTP referer is a product edit page.
     */
    private function is_product_context() : bool {
        if ( function_exists( 'get_current_screen' ) ) {
            $screen = get_current_screen();
            if ( $screen && $screen->id === 'product' ) {
                return true;
            }
        }
        if ( wp_doing_ajax() ) {
            $referer = wp_get_referer();
            if ( $referer ) {
                wp_parse_str( (string) wp_parse_url( $referer, PHP_URL_QUERY ), $params );
                $post_id = absint( $params['post'] ?? 0 );
                if ( $post_id && 'product' === get_post_type( $post_id ) ) {
                    return true;
                }
                if ( !empty( $params['post_type'] ) && $params['post_type'] === 'product' ) {
                    return true;
                }
            }
        }
        return false;
    }

    // ── Attachment edit fields ────────────────────────────────────────────────
    public function add_fields( array $fields, \WP_Post $post ) : array {
        // Only show the field when editing from a product page.
        if ( !$this->is_product_context() ) {
            return $fields;
        }
        // Only image attachments need a video option.
        if ( strpos( $post->post_mime_type, 'image/' ) !== 0 ) {
            return $fields;
        }
        $video_url = get_post_meta( $post->ID, '_wcpg_image_video_url', true );
        $video_id = intval( get_post_meta( $post->ID, '_wcpg_image_video_id', true ) );
        // Resolve what to show in the text input.
        // Priority: stored URL → URL of uploaded file → empty.
        // We always show a real URL so that filter_var(FILTER_VALIDATE_URL) passes
        // on save regardless of which path was used to store the value.
        $display_value = '';
        $is_file = false;
        if ( $video_url ) {
            $display_value = $video_url;
        } elseif ( $video_id ) {
            $display_value = ( wp_get_attachment_url( $video_id ) ?: '' );
            $is_file = (bool) $display_value;
        }
        $upgrade_url = 'https://wpbean.com/woocommerce-product-gallery/?utm_content=WPBean+Product+Gallery+Slider&utm_campaign=adminlink&utm_medium=dash-settings&utm_source=FreeVersion';
        $crown_svg = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" ' . 'stroke-linecap="round" stroke-linejoin="round" width="11" height="11" aria-hidden="true">' . '<path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7z"/>' . '<path d="M3 16h18"/>' . '</svg>';
        $html = '<span class="wcpg-att-upgrade">';
        $html .= '<span class="wcpg-att-upgrade-badge">' . $crown_svg . ' ' . esc_html__( 'Pro', 'wpbean-product-gallery-slider-for-woocommerce' ) . '</span>';
        $html .= '<span class="wcpg-att-upgrade-msg">' . esc_html__( 'Link a video to this image — plays inline in the gallery.', 'wpbean-product-gallery-slider-for-woocommerce' ) . '</span>';
        $html .= '<a href="' . esc_url( $upgrade_url ) . '" class="wcpg-att-upgrade-btn" target="_blank" rel="noopener">' . esc_html__( 'Upgrade to Pro', 'wpbean-product-gallery-slider-for-woocommerce' ) . ' &rsaquo;</a>';
        $html .= '</span>';
        $fields['wcpg_image_video_url'] = [
            'label'         => __( 'Gallery Video', 'wpbean-product-gallery-slider-for-woocommerce' ),
            'input'         => 'html',
            'html'          => $html,
            'show_in_edit'  => true,
            'show_in_modal' => true,
        ];
        return $fields;
        $has_value = $display_value !== '';
        $field_id = 'attachments-' . $post->ID . '-wcpg_image_video_url';
        // ── Upload icon (inline SVG, no font-icon dependency) ─────────────────
        $svg_upload = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" ' . 'stroke-linecap="round" stroke-linejoin="round" width="14" height="14" aria-hidden="true">' . '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>' . '<polyline points="17 8 12 3 7 8"/>' . '<line x1="12" y1="3" x2="12" y2="15"/>' . '</svg>';
        // ── Field HTML (goes into <td class="field"> via 'html' input type) ───
        // We avoid the 'helps' key so WordPress does not inject help text inside
        // the <th> label column (which would push the label up and mis-align it).
        // Instead, the description is placed below the input inside the <td>.
        $html = '<span class="wcpg-att-field">';
        $html .= '<input type="text"' . ' id="' . esc_attr( $field_id ) . '"' . ' name="attachments[' . $post->ID . '][wcpg_image_video_url]"' . ' class="wcpg-att-vid-url"' . ' value="' . esc_attr( $display_value ) . '"' . (( $is_file ? ' data-is-file="1"' : '' )) . '>';
        $html .= '<input type="hidden"' . ' name="attachments[' . $post->ID . '][wcpg_image_video_id]"' . ' class="wcpg-att-vid-id"' . ' value="' . esc_attr( $video_id ) . '"' . '>';
        $html .= '<button type="button" class="wcpg-att-vid-pick" title="' . esc_attr__( 'Select video file from media library', 'wpbean-product-gallery-slider-for-woocommerce' ) . '" data-post-id="' . esc_attr( $post->ID ) . '">' . $svg_upload . '</button>';
        $html .= '</span>';
        // Remove link — hidden when no video is set
        $html .= '<a href="#" class="wcpg-att-vid-remove"' . (( $has_value ? '' : ' style="display:none"' )) . '>' . esc_html__( 'Remove video', 'wpbean-product-gallery-slider-for-woocommerce' ) . '</a>';
        // Description placed inside the <td>, not in `helps`, so it does not
        // appear in the <th> label column and disrupt alignment on narrow screens.
        $html .= '<p class="wcpg-att-description">' . esc_html__( 'Paste a YouTube / Vimeo URL, or click the upload icon to select a video file.', 'wpbean-product-gallery-slider-for-woocommerce' ) . '</p>';
        $fields['wcpg_image_video_url'] = [
            'label'         => __( 'Gallery Video', 'wpbean-product-gallery-slider-for-woocommerce' ),
            'input'         => 'html',
            'html'          => $html,
            'show_in_edit'  => true,
            'show_in_modal' => true,
        ];
        return $fields;
    }

    // ── Save ──────────────────────────────────────────────────────────────────
    public function save_fields( array $post, array $attachment ) : array {
        // No context check here: the context gate in add_fields() already ensures
        // these fields are only rendered on product pages. If they are present in
        // $attachment it means they were submitted from a valid context. The
        // null/null early return below handles every other case safely.
        $vid_id = ( isset( $attachment['wcpg_image_video_id'] ) ? intval( $attachment['wcpg_image_video_id'] ) : null );
        $raw_url = ( isset( $attachment['wcpg_image_video_url'] ) ? trim( $attachment['wcpg_image_video_url'] ) : null );
        if ( $vid_id === null && $raw_url === null ) {
            // Neither field submitted — do not touch saved meta.
            return $post;
        }
        if ( $vid_id > 0 ) {
            // A video file was picked via the media library — store the attachment ID.
            update_post_meta( $post['ID'], '_wcpg_image_video_id', $vid_id );
            delete_post_meta( $post['ID'], '_wcpg_image_video_url' );
        } elseif ( $raw_url && filter_var( $raw_url, FILTER_VALIDATE_URL ) ) {
            // A valid URL was typed (YouTube, Vimeo, or direct).
            update_post_meta( $post['ID'], '_wcpg_image_video_url', esc_url_raw( $raw_url ) );
            delete_post_meta( $post['ID'], '_wcpg_image_video_id' );
        } else {
            // Both cleared — remove any stored video.
            delete_post_meta( $post['ID'], '_wcpg_image_video_url' );
            delete_post_meta( $post['ID'], '_wcpg_image_video_id' );
        }
        return $post;
    }

    // Scripts for the attachment video field are handled by video-meta.js,
    // which is enqueued by WPBean_PGS_Video_Meta on the product edit screen.
    // No additional enqueuing is needed here.
}
