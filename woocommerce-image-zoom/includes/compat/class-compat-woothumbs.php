<?php

if (! defined('ABSPATH')) exit;

/**
 * Read-only compatibility layer for Iconic WooThumbs for WooCommerce.
 *
 * WooThumbs stores product videos in two places:
 *   _iconic_woothumbs_media  (attachment meta) — video URL linked to a gallery
 *                                                image; the image is the poster.
 *   _iconic_woothumbs        (product meta)    — serialized array whose
 *                                                'video_url' is a single
 *                                                product-level video.
 *
 * Both are read at render time and only used as a fallback when no native
 * video exists, so ordering follows the WooCommerce gallery order and nothing
 * is ever written to the database. WooThumbs does not need to be active.
 *
 * To drop support, delete this file, its include, and the call sites
 * (search for WPBean_PGS_Compat_WooThumbs).
 */
class WPBean_PGS_Compat_WooThumbs
{
    const ATTACHMENT_META_KEY = '_iconic_woothumbs_media';
    const PRODUCT_META_KEY    = '_iconic_woothumbs';

    /** Direct video file extensions the gallery <video> element can play. */
    const HOSTED_EXTENSIONS = ['mp4', 'm4v', 'webm', 'ogv', 'ogg', 'mov'];

    /**
     * Whether WooThumbs data should be read at all.
     *
     * Usage: add_filter('wpbean_pgs_woothumbs_compat_enabled', '__return_false');
     */
    public static function is_enabled(): bool
    {
        return (bool) apply_filters('wpbean_pgs_woothumbs_compat_enabled', true);
    }

    /**
     * Returns the WooThumbs video URL linked to an image attachment, or '' when
     * there is none or it is not a format the gallery can play.
     *
     * The attachment's meta cache is normally already primed by
     * wp_get_attachment_image_url(), so this adds no database query.
     */
    public static function get_attachment_video_url(int $attachment_id): string
    {
        if (! $attachment_id || ! self::is_enabled()) return '';

        return self::sanitize_video_url((string) get_post_meta($attachment_id, self::ATTACHMENT_META_KEY, true));
    }

    /**
     * Builds a _wcpg_videos-shaped item from the WooThumbs product video, or
     * returns null when the product has none.
     *
     * @param int $product_id Product ID.
     * @param int $poster_id  Image used as the thumbnail for hosted files
     *                        (WooThumbs uses the featured image the same way).
     */
    public static function get_product_video_item(int $product_id, int $poster_id = 0): ?array
    {
        if (! $product_id || ! self::is_enabled()) return null;

        $settings = get_post_meta($product_id, self::PRODUCT_META_KEY, true);
        if (! is_array($settings) || empty($settings['video_url']) || ! is_string($settings['video_url'])) {
            return null;
        }

        $url  = self::sanitize_video_url($settings['video_url']);
        $type = $url ? self::detect_type($url) : '';
        if (! $type) return null;

        return [
            'type'          => $type === 'hosted' ? 'upload' : $type,
            'url'           => $url,
            'attachment_id' => 0,
            'thumb_id'      => $type === 'hosted' ? $poster_id : 0,
            'thumb_url'     => '',
            'title'         => '',
            'source'        => 'woothumbs',
        ];
    }

    /**
     * Appends the WooThumbs product video to native video items, unless the
     * same URL is already present.
     */
    public static function merge_product_video(array $video_items, \WC_Product $product): array
    {
        $item = self::get_product_video_item($product->get_id(), (int) $product->get_image_id());
        if (! $item) return $video_items;

        foreach ($video_items as $existing) {
            if (is_array($existing) && ($existing['url'] ?? '') === $item['url']) {
                return $video_items;
            }
        }

        $video_items[] = $item;
        return $video_items;
    }

    /**
     * Classifies a sanitized URL: 'youtube' | 'vimeo' | 'hosted' | ''.
     */
    public static function detect_type(string $url): string
    {
        if (WPBean_PGS_Video_Meta::extract_youtube_id($url)) return 'youtube';
        if (WPBean_PGS_Video_Meta::extract_vimeo_id($url))   return 'vimeo';

        $path = (string) wp_parse_url($url, PHP_URL_PATH);
        $ext  = strtolower(pathinfo($path, PATHINFO_EXTENSION));

        return in_array($ext, self::HOSTED_EXTENSIONS, true) ? 'hosted' : '';
    }

    /**
     * WooThumbs saves the attachment URL without sanitising it, so validate it
     * here: http(s) only, and only formats the gallery can actually play.
     * Anything else (e.g. generic oEmbed pages) returns ''.
     */
    public static function sanitize_video_url(string $url): string
    {
        $url = trim($url);
        if ($url === '') return '';

        if (strpos($url, '//') === 0) {
            $url = 'https:' . $url;
        }

        // Normalise the privacy-enhanced YouTube domain so the ID parser matches.
        $url = str_replace('youtube-nocookie.com', 'youtube.com', $url);

        $url = esc_url_raw($url, ['http', 'https']);
        if (! $url || ! filter_var($url, FILTER_VALIDATE_URL)) return '';

        return self::detect_type($url) ? $url : '';
    }
}
