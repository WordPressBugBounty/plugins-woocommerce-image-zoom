<?php

if (! defined('ABSPATH')) exit;

/**
 * Consent-plugin compatibility for gallery videos.
 *
 * Gallery iframes are created in the browser, so the Complianz cookie blocker
 * (which rewrites the page HTML on the server) never sees them. This tells the
 * frontend script which video types Complianz is blocking, so it can hold them
 * back itself. The list is empty unless Complianz is active and blocking, which
 * leaves the gallery's behaviour unchanged on every other site.
 */
class WPBean_PGS_Consent
{
    /**
     * Video types Complianz is blocking on this site.
     *
     * @return array Video type => consent category, e.g. ['youtube' => 'marketing'].
     */
    public static function get_blocked_video_services(): array
    {
        static $cache = null;
        if (null !== $cache) {
            return $cache;
        }

        $services = [];

        if (function_exists('cmplz_can_run_cookie_blocker') && cmplz_can_run_cookie_blocker()) {
            // Complianz only registers a service here when it is enabled in its
            // wizard, so this matches what it blocks in ordinary embeds.
            foreach ((array) apply_filters('cmplz_known_script_tags', []) as $tag) {
                $name = $tag['name'] ?? '';
                if (in_array($name, ['youtube', 'vimeo'], true) && ! empty($tag['category'])) {
                    $services[$name] = $tag['category'];
                }
            }
        }

        /**
         * Filter the video types held back until consent is given.
         *
         * @param array $services Video type => consent category.
         */
        $cache = (array) apply_filters('wpbean_pgs_video_consent_services', $services);
        return $cache;
    }

    /**
     * Thumbnail to show for a YouTube / Vimeo item while it is blocked.
     *
     * A thumbnail served by the provider is itself a request to that provider,
     * so the frontend holds it back until consent is given, which left an empty
     * thumbnail and a black notice. Complianz keeps a copy of the video's
     * screenshot on this site for its own placeholders; this returns that copy
     * so the gallery can show it straight away, like ordinary blocked embeds.
     *
     * @param string $type      'youtube' | 'vimeo'.
     * @param string $video_url The video URL the editor entered.
     * @param string $thumb     Thumbnail URL the gallery would otherwise use.
     * @return string Local thumbnail URL, or $thumb unchanged.
     */
    public static function get_blocked_video_thumb(string $type, string $video_url, string $thumb): string
    {
        $services = self::get_blocked_video_services();
        if (empty($services[$type]) || '' === $video_url) {
            return $thumb;
        }

        // A thumbnail hosted on this site (custom media-library image) is fine.
        if ($thumb && ! preg_match('#^(https?:)?//([^/]+\.)?(youtube\.com|ytimg\.com|vimeocdn\.com)/#i', $thumb)) {
            return $thumb;
        }

        if (! function_exists('cmplz_placeholder')) {
            return $thumb;
        }
        if (function_exists('cmplz_use_placeholder') && ! cmplz_use_placeholder($video_url)) {
            return $thumb;
        }

        $local = (string) cmplz_placeholder($type, $video_url);

        return $local ? $local : $thumb;
    }
}
