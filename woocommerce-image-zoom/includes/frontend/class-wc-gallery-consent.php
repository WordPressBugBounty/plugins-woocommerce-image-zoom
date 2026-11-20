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
        return apply_filters('wpbean_pgs_video_consent_services', $services);
    }
}
