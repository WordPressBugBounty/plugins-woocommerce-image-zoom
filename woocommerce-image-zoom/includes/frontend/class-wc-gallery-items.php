<?php

if (! defined('ABSPATH')) exit;

/**
 * Renders the hidden <img> data-carrier elements that JS reads to build the gallery.
 *
 * Each element is hidden via inline style="display:none" and carries all the
 * information the frontend needs via data-wcpg-* attributes:
 *   data-wcpg-image        – main display URL (configured image size)
 *   data-zoom-image        – full-resolution URL for zoom
 *   data-wcpg-thumb        – thumbnail URL
 *   data-caption           – caption text
 *   data-wcpg-placeholder  – tiny blur-up placeholder (thumbnail size)
 *   data-wcpg-w / -h       – natural dimensions of the main-size image
 *   data-wcpg-type         – "video" | "youtube" | "vimeo" (video items only)
 *   data-wcpg-video        – hosted video URL (video items / linked video)
 *   data-wcpg-embed        – pre-built iframe src (YouTube / Vimeo)
 *   data-wcpg-image-video-* – linked video fields on image items
 */
class WPBean_PGS_WC_Gallery_Gallery_Items
{

    /**
     * Output hidden <img> elements for all gallery image attachments.
     *
     * @param array  $attachment_ids Ordered attachment IDs.
     * @param string $main_size      WP image size for the main viewer.
     * @param string $thumb_size     WP image size for thumbnails.
     * @param array  $config         Active plugin config (needed for linked video URLs).
     */
    public static function render_images(array $attachment_ids, string $main_size, string $thumb_size, array $config): void
    {
        foreach ($attachment_ids as $attachment_id) {
            $full_url        = wp_get_attachment_image_url($attachment_id, 'full');
            $large_url       = wp_get_attachment_image_url($attachment_id, $main_size);
            $thumb_url       = wp_get_attachment_image_url($attachment_id, $thumb_size);
            $alt_text        = get_post_meta($attachment_id, '_wp_attachment_image_alt', true);
            $caption         = wp_get_attachment_caption($attachment_id);
            $placeholder_url = wp_get_attachment_image_url($attachment_id, 'thumbnail');
            $main_src        = wp_get_attachment_image_src($attachment_id, $main_size);
            $img_w           = $main_src ? (int) $main_src[1] : 0;
            $img_h           = $main_src ? (int) $main_src[2] : 0;
            $video_attrs     = self::_resolve_linked_video_attrs((int) $attachment_id, $config);

            printf(
                '<img style="display:none" data-wcpg-image="%1$s" data-zoom-image="%2$s" data-wcpg-thumb="%3$s" data-caption="%4$s" alt="%5$s" data-wcpg-placeholder="%6$s" data-wcpg-w="%7$s" data-wcpg-h="%8$s"%9$s>',
                esc_url($large_url),
                esc_url($full_url),
                esc_url($thumb_url),
                esc_attr($caption),
                esc_attr($alt_text),
                esc_url($placeholder_url),
                esc_attr($img_w),
                esc_attr($img_h),
                $video_attrs // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
            );
        }
    }

    /**
     * Output hidden <img> elements for all product video items.
     *
     * @param array $video_items Video items array from _wcpg_videos post meta.
     * @param array $config      Active plugin config (needed to build embed URLs).
     */
    public static function render_videos(array $video_items, array $config, string $thumb_size = 'woocommerce_gallery_thumbnail'): void
    {
        foreach ($video_items as $video) {
            $v_type = $video['type'] ?? '';
            if (! in_array($v_type, ['youtube', 'vimeo', 'upload'], true)) {
                continue;
            }

            $v_thumb = WPBean_PGS_Video_Meta::get_thumb_url($video, $thumb_size);
            $v_title = esc_attr($video['title'] ?? '');

            if ($v_type === 'upload') {
                $v_url = WPBean_PGS_Video_Meta::get_video_url($video);
                if (! $v_url) continue;
                printf(
                    '<img style="display:none" data-wcpg-type="video" data-wcpg-video="%1$s" data-wcpg-thumb="%2$s" alt="%3$s">',
                    esc_url($v_url),
                    esc_url($v_thumb),
                    $v_title // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
                );
            } else {
                $v_embed = WPBean_PGS_Video_Meta::get_embed_url($video, $config);
                if (! $v_embed) continue;
                printf(
                    '<img style="display:none" data-wcpg-type="%1$s" data-wcpg-embed="%2$s" data-wcpg-thumb="%3$s" alt="%4$s">',
                    esc_attr($v_type),
                    esc_url($v_embed),
                    esc_url($v_thumb),
                    $v_title // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
                );
            }
        }
    }

    /**
     * Build the data-wcpg-image-video-* attribute string for an image attachment
     * that has an associated video (linked via the WP media attachment panel).
     *
     * Returns an empty string when no video is linked.
     */
    private static function _resolve_linked_video_attrs(int $attachment_id, array $config): string
    {
        $type  = '';
        $embed = '';
        $src   = '';

        $raw_url = get_post_meta($attachment_id, '_wcpg_image_video_url', true);
        $raw_id  = intval(get_post_meta($attachment_id, '_wcpg_image_video_id', true));

        if ($raw_url) {
            $yt_id = WPBean_PGS_Video_Meta::extract_youtube_id($raw_url);
            if ($yt_id) {
                $type  = 'youtube';
                $embed = WPBean_PGS_Video_Meta::get_embed_url(['type' => 'youtube', 'url' => $raw_url], $config);
            } else {
                $vimeo_id = WPBean_PGS_Video_Meta::extract_vimeo_id($raw_url);
                if ($vimeo_id) {
                    $type  = 'vimeo';
                    $embed = WPBean_PGS_Video_Meta::get_embed_url(['type' => 'vimeo', 'url' => $raw_url], $config);
                } else {
                    $type = 'hosted';
                    $src  = esc_url_raw($raw_url);
                }
            }
        } elseif ($raw_id) {
            $att_url = wp_get_attachment_url($raw_id);
            if ($att_url) {
                $type = 'hosted';
                $src  = $att_url;
            }
        }

        if (! $type) return '';

        $attrs = ' data-wcpg-image-video-type="' . esc_attr($type) . '"';
        if ($embed) $attrs .= ' data-wcpg-image-video-embed="' . esc_attr($embed) . '"';
        if ($src)   $attrs .= ' data-wcpg-image-video="' . esc_url($src) . '"';
        return $attrs;
    }
}
