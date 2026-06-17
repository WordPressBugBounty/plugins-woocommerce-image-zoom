<?php

if (! defined('ABSPATH')) exit;

/**
 * Renders server-side loading skeletons for each gallery layout type.
 *
 * Called before any JS runs so the page has a correctly-shaped placeholder,
 * eliminating layout shift. JS removes the skeleton element synchronously once
 * the gallery DOM has been built (the element carries data-wcpg-skeleton).
 */
class WPBean_PGS_WC_Gallery_Skeleton
{

    /**
     * Render the appropriate skeleton for the active gallery type.
     *
     * @param array  $config         Active plugin config.
     * @param array  $attachment_ids Gallery attachment IDs (main image first).
     * @param array  $video_items    Product video items from post meta.
     * @param string $main_size      Resolved WP image size for the main viewer.
     */
    public static function render(array $config, array $attachment_ids, array $video_items, string $main_size): void
    {
        // Ensure sequential integer keys throughout — the methods below rely on
        // array index access to correlate images with loop counters.
        $attachment_ids = array_values($attachment_ids);
        $gallery_type   = $config['galleryType'] ?? 'thumbnail';
        $bp             = max(0, (int) ($config['mobileBreakpoint'] ?? 768));

        // When there is no mobile breakpoint, or the desktop layout is already
        // a carousel (nothing to swap), render a single skeleton and exit.
        if ($bp <= 0 || $gallery_type === 'thumbnail') {
            self::_dispatch($gallery_type, $config, $attachment_ids, $video_items, $main_size);
            return;
        }

        // For every non-carousel desktop layout the JS collapses to a standard
        // carousel below mobileBreakpoint.  Emit both skeletons and use an
        // inline <style> with media queries — matching the exact px boundary JS
        // uses for _mobileLayoutActive — to show only the right one.
        // JS removes every [data-wcpg-skeleton] element once the gallery is built.
        $uid = wp_unique_id('sk');

        echo '<style>'
            . '@media(max-width:' . ($bp - 1) . 'px){[data-wcpg-sk-d="' . esc_attr($uid) . '"]{display:none!important}}' // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
            . '@media(min-width:' . $bp . 'px){[data-wcpg-sk-m="' . esc_attr($uid) . '"]{display:none!important}}' // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
            . '</style>';

        // Desktop skeleton — hidden below the breakpoint.
        ob_start();
        self::_dispatch($gallery_type, $config, $attachment_ids, $video_items, $main_size);
        $desktop_html = ob_get_clean();

        echo str_replace( // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
            'data-wcpg-skeleton',
            'data-wcpg-skeleton data-wcpg-sk-d="' . esc_attr($uid) . '"',
            $desktop_html
        );

        // Mobile carousel skeleton — hidden at and above the breakpoint.
        $mob_config = self::_apply_mobile_overrides($config);

        ob_start();
        self::_render_carousel($mob_config, $attachment_ids, $video_items, $main_size);
        $mobile_html = ob_get_clean();

        echo str_replace( // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
            'data-wcpg-skeleton',
            'data-wcpg-skeleton data-wcpg-sk-m="' . esc_attr($uid) . '"',
            $mobile_html
        );
    }

    /**
     * Dispatch to the correct desktop skeleton renderer.
     */
    private static function _dispatch(string $gallery_type, array $config, array $attachment_ids, array $video_items, string $main_size): void
    {
        switch ($gallery_type) {
            case 'anchor':
                self::_render_stacked($config, $attachment_ids, $video_items, $main_size);
                break;
            case 'sticky-split':
                self::_render_sticky_split($config, $attachment_ids, $video_items, $main_size);
                break;
            case 'hierarchy-grid':
                self::_render_hierarchy_grid($config, $attachment_ids, $video_items, $main_size);
                break;
            default:
                self::_render_carousel($config, $attachment_ids, $video_items, $main_size);
                break;
        }
    }

    /**
     * Build a config copy with mobile-specific thumbnail overrides applied,
     * ready to pass to _render_carousel() for the mobile skeleton.
     */
    private static function _apply_mobile_overrides(array $config): array
    {
        $mob                    = $config;
        $mob['thumbnailShow']   = wp_validate_boolean($config['mobileShowThumbs'] ?? false);
        $mob_pos                = $config['mobileThumbnailPosition'] ?? 'bottom';
        if (in_array($mob_pos, ['bottom', 'top', 'left', 'right'], true)) {
            $mob['thumbnailPosition'] = $mob_pos;
        }
        $mob_tw = (int) ($config['mobileThumbnailWidth']  ?? 0);
        $mob_th = (int) ($config['mobileThumbnailHeight'] ?? 0);
        if ($mob_tw > 0) $mob['thumbnailWidth']  = $mob_tw;
        if ($mob_th > 0) $mob['thumbnailHeight'] = $mob_th;
        return $mob;
    }

    // ── Stacked layout (Anchor Navigation) ───────────────────────────────────

    private static function _render_stacked(array $config, array $attachment_ids, array $video_items, string $main_size): void
    {
        $sk_m_brad   = (int) ($config['mainImageBorderRadius'] ?? 6);
        $sk_m_bg     = $config['mainImageBackground'] ?? '#f7f7f7';
        $sk_st_gap   = (int) ($config['stackedItemGap'] ?? 24);
        $sk_nav_type = $config['stackedNavigationType'] ?? 'dots';

        // One block per image, preserving each image's aspect ratio.
        $sk_items_html = '';
        foreach ($attachment_ids as $at_id) {
            $at_src = wp_get_attachment_image_src($at_id, $main_size);
            $at_w   = $at_src ? (int) $at_src[1] : 0;
            $at_h   = $at_src ? (int) $at_src[2] : 0;
            $ar     = ($at_w > 0 && $at_h > 0) ? $at_w . '/' . $at_h : '1/1';
            $sk_items_html .= '<div class="wcpg-sk-stacked-item" style="aspect-ratio:' . esc_attr($ar) . ';background:' . esc_attr($sk_m_bg) . ';border-radius:' . $sk_m_brad . 'px;width:100%;"></div>';
        }
        foreach ($video_items as $v) {
            $sk_items_html .= '<div class="wcpg-sk-stacked-item" style="aspect-ratio:16/9;background:#111;border-radius:' . $sk_m_brad . 'px;width:100%;"></div>';
        }

        $sk_st_col_style = 'display:flex;flex-direction:column;gap:' . $sk_st_gap . 'px;flex:1;min-width:0;';

        if ($sk_nav_type === 'thumbs') {
            // Thumbnail navigation: side thumb strip beside the stacked items.
            $sk_tw     = (int) ($config['thumbnailWidth']        ?? 80);
            $sk_th     = (int) ($config['thumbnailHeight']       ?? 80);
            $sk_t_sgap = (int) ($config['thumbnailStripGap']     ?? 8);
            $sk_tgap   = (int) ($config['thumbnailGap']          ?? 8);
            $sk_t_brad = (int) ($config['thumbnailBorderRadius'] ?? 4);
            $sk_pos    = in_array($config['thumbnailPosition'] ?? 'left', ['left', 'right'], true)
                ? $config['thumbnailPosition']
                : 'left';

            $total_items    = count($attachment_ids) + count($video_items);
            $sk_thumb_n     = min($total_items, 5);
            $sk_thumb_items = '';
            for ($i = 0; $i < $sk_thumb_n; $i++) {
                $sk_thumb_items .= '<div class="wcpg-sk-thumb" style="width:' . $sk_tw . 'px;height:' . $sk_th . 'px;border-radius:' . $sk_t_brad . 'px;flex-shrink:0;"></div>';
            }

            $sk_strip       = '<div class="wcpg-sk-thumbs wcpg-sk-thumbs-v" style="display:flex;flex-direction:column;gap:' . $sk_tgap . 'px;flex-shrink:0;" aria-hidden="true">' . $sk_thumb_items . '</div>';
            $sk_stacked_col = '<div style="' . esc_attr($sk_st_col_style) . '">' . $sk_items_html . '</div>';
            $sk_inner       = ($sk_pos === 'left') ? $sk_strip . $sk_stacked_col : $sk_stacked_col . $sk_strip;

            echo '<div class="wcpg-skeleton wcpg-sk-' . esc_attr($sk_pos) . '" style="display:flex;flex-direction:row;gap:' . $sk_t_sgap . 'px;align-items:flex-start;" data-wcpg-skeleton aria-hidden="true">' . $sk_inner . '</div>'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
        } else {
            // Dot navigation: plain stacked column.
            $sk_st_style = 'display:flex;flex-direction:column;gap:' . $sk_st_gap . 'px;width:100%;';
            echo '<div class="wcpg-skeleton" style="' . esc_attr($sk_st_style) . '" data-wcpg-skeleton aria-hidden="true">' . $sk_items_html . '</div>'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
        }
    }

    // ── Carousel layout (Thumbnail Gallery) ──────────────────────────────────

    private static function _render_carousel(array $config, array $attachment_ids, array $video_items, string $main_size): void
    {
        $sk_m_brad    = (int) ($config['mainImageBorderRadius']  ?? 6);
        $sk_m_bg      = $config['mainImageBackground']            ?? '#f7f7f7';
        $sk_pos       = $config['thumbnailPosition']              ?? 'bottom';
        $sk_tw        = (int) ($config['thumbnailWidth']         ?? 80);
        $sk_th        = (int) ($config['thumbnailHeight']        ?? 80);
        $sk_gap       = (int) ($config['thumbnailGap']           ?? 8);
        $sk_strip_gap = (int) ($config['thumbnailStripGap']      ?? 8);
        $sk_t_brad    = (int) ($config['thumbnailBorderRadius']  ?? 4);
        $sk_m_height  = (int) ($config['mainImageHeight']        ?? 0);
        $sk_is_side   = in_array($sk_pos, ['left', 'right'], true);
        $sk_visible   = max(1, (int) ($config['thumbnailVisible'] ?? 5));
        $sk_show_thumbs = wp_validate_boolean($config['thumbnailShow'] ?? true);
        $total_items    = count($attachment_ids) + count($video_items);
        $sk_has_thumbs  = $total_items > 1;

        // Cap skeleton thumb count: visible-count for horizontal, 5 for vertical.
        $sk_thumb_n = $sk_has_thumbs
            ? ($sk_is_side ? min($total_items, 5) : min($total_items, $sk_visible))
            : 0;

        // Aspect ratio from the first image's resolved dimensions.
        $first_main = wp_get_attachment_image_src($attachment_ids[0], $main_size);
        $sk_ar_w    = $first_main ? (int) $first_main[1] : 0;
        $sk_ar_h    = $first_main ? (int) $first_main[2] : 0;

        $sk_main_style = 'background:' . esc_attr($sk_m_bg) . ';border-radius:' . $sk_m_brad . 'px;';
        if ($sk_m_height > 0) {
            $sk_main_style .= 'height:' . $sk_m_height . 'px;';
        } elseif ($sk_ar_w > 0 && $sk_ar_h > 0) {
            $sk_main_style .= 'aspect-ratio:' . $sk_ar_w . '/' . $sk_ar_h . ';';
        } else {
            $sk_main_style .= 'aspect-ratio:1/1;';
        }

        $sk_thumb_items = '';
        $sk_thumb_style = 'width:' . $sk_tw . 'px;height:' . $sk_th . 'px;border-radius:' . $sk_t_brad . 'px;';
        for ($i = 0; $i < $sk_thumb_n; $i++) {
            $sk_thumb_items .= '<div class="wcpg-sk-thumb" style="' . $sk_thumb_style . '"></div>';
        }

        $sk_strip_style = $sk_is_side
            ? 'flex-direction:column;gap:' . $sk_gap . 'px;'
            : 'gap:' . $sk_gap . 'px;';
        $sk_alignment   = in_array($config['thumbnailAlignment'] ?? 'left', ['left', 'center', 'right'], true)
            ? ($config['thumbnailAlignment'] ?? 'left')
            : 'left';
        $sk_strip_class = $sk_is_side
            ? 'wcpg-sk-thumbs wcpg-sk-thumbs-v wcpg-sk-align-' . $sk_alignment
            : 'wcpg-sk-thumbs wcpg-sk-thumbs-h wcpg-sk-align-' . $sk_alignment;
        $sk_strip = ($sk_show_thumbs && $sk_thumb_n > 0)
            ? '<div class="' . $sk_strip_class . '" style="' . $sk_strip_style . '" aria-hidden="true">' . $sk_thumb_items . '</div>'
            : '';

        $sk_main = '<div class="wcpg-sk-main" style="' . $sk_main_style . '"></div>';
        if ($sk_is_side) {
            $sk_inner      = ($sk_pos === 'left') ? $sk_strip . $sk_main : $sk_main . $sk_strip;
            $sk_wrap_style = 'flex-direction:row;gap:' . $sk_strip_gap . 'px;';
        } else {
            $sk_inner      = ($sk_pos === 'top') ? $sk_strip . $sk_main : $sk_main . $sk_strip;
            $sk_wrap_style = 'flex-direction:column;gap:' . $sk_strip_gap . 'px;';
        }

        echo '<div class="wcpg-skeleton wcpg-sk-' . esc_attr($sk_pos) . '" style="' . esc_attr($sk_wrap_style) . '" data-wcpg-skeleton aria-hidden="true">' . $sk_inner . '</div>'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
    }

    // ── Sticky Split layout ───────────────────────────────────────────────────

    private static function _render_sticky_split(array $config, array $attachment_ids, array $video_items, string $main_size): void
    {
        $main_side   = in_array($config['stickySplitMainSide'] ?? 'left', ['left', 'right'], true)
            ? ($config['stickySplitMainSide'] ?? 'left')
            : 'left';
        $main_pct    = max(20, min(80, (int) ($config['stickySplitMainWidthPercent'] ?? 65)));
        $col_gap     = (int) ($config['stickySplitGap']                    ?? 20);
        $item_gap    = (int) ($config['stickySplitScrollItemGap']          ?? 20);
        $item_radius = (int) ($config['stickySplitScrollItemBorderRadius'] ?? 6);
        $item_aspect = $config['stickySplitScrollItemAspect']               ?? 'auto';
        $main_radius = (int) ($config['mainImageBorderRadius']             ?? 6);
        $bg          = $config['mainImageBackground']                       ?? '#f7f7f7';

        // Sticky viewer block — aspect ratio derived from the first image.
        $first_src = ! empty($attachment_ids) ? wp_get_attachment_image_src($attachment_ids[0], $main_size) : null;
        $main_ar_w = $first_src ? (int) $first_src[1] : 0;
        $main_ar_h = $first_src ? (int) $first_src[2] : 0;
        $main_ar   = ($main_ar_w > 0 && $main_ar_h > 0) ? $main_ar_w . '/' . $main_ar_h : '1/1';

        // Scroll column items — cap at 3 to keep the skeleton compact.
        $all_item_count = count($attachment_ids) + count($video_items);
        $sk_item_count  = min($all_item_count, 3);
        $sk_items_html  = '';

        for ($i = 0; $i < $sk_item_count; $i++) {
            $is_video = $i >= count($attachment_ids);
            $item_bg  = $is_video ? '#111111' : $bg;

            if ($item_aspect !== 'auto') {
                $ar = $item_aspect;
            } elseif (! $is_video && isset($attachment_ids[$i])) {
                $img_src = wp_get_attachment_image_src($attachment_ids[$i], $main_size);
                $iw = $img_src ? (int) $img_src[1] : 0;
                $ih = $img_src ? (int) $img_src[2] : 0;
                $ar = ($iw > 0 && $ih > 0) ? $iw . '/' . $ih : '4/3';
            } else {
                $ar = '16/9';
            }

            $sk_items_html .= '<div style="background:' . esc_attr($item_bg) . ';border-radius:' . $item_radius . 'px;width:100%;aspect-ratio:' . esc_attr($ar) . ';flex-shrink:0;"></div>';
        }

        // Sticky column (main viewer placeholder).
        $sticky_style = 'flex:0 0 ' . $main_pct . '%;width:' . $main_pct . '%;background:' . esc_attr($bg) . ';border-radius:' . $main_radius . 'px;aspect-ratio:' . $main_ar . ';';
        $sticky_block = '<div style="' . esc_attr($sticky_style) . '"></div>';

        // Scroll column (stacked item list).
        $scroll_style = 'flex:1;display:flex;flex-direction:column;gap:' . $item_gap . 'px;min-width:0;';
        $scroll_block = '<div style="' . esc_attr($scroll_style) . '">' . $sk_items_html . '</div>';

        $row_style = 'display:flex;flex-direction:row;gap:' . $col_gap . 'px;align-items:flex-start;';
        $inner     = ($main_side === 'right') ? $scroll_block . $sticky_block : $sticky_block . $scroll_block;

        echo '<div class="wcpg-skeleton wcpg-sk-sticky-split" style="' . esc_attr($row_style) . '" data-wcpg-skeleton aria-hidden="true">' . $inner . '</div>'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
    }

    // ── Hierarchy Grid layout ─────────────────────────────────────────────────

    private static function _render_hierarchy_grid(array $config, array $attachment_ids, array $video_items, string $main_size): void
    {
        $cols        = max(1, (int) ($config['hierarchyGridColumns']        ?? 2));
        $gap         = (int) ($config['hierarchyGridGap']                    ?? 16);
        $item_radius = (int) ($config['hierarchyGridItemBorderRadius']       ?? 6);
        $item_aspect = $config['hierarchyGridItemAspect']                     ?? '1/1';
        $bg          = $config['mainImageBackground']                         ?? '#f7f7f7';

        // Hero placeholder — use the first image's natural aspect ratio.
        $first_src = ! empty($attachment_ids) ? wp_get_attachment_image_src($attachment_ids[0], $main_size) : null;
        $hero_w    = $first_src ? (int) $first_src[1] : 0;
        $hero_h    = $first_src ? (int) $first_src[2] : 0;
        $hero_ar   = ($hero_w > 0 && $hero_h > 0) ? $hero_w . '/' . $hero_h : '4/3';

        $hero_html = '<div style="width:100%;background:' . esc_attr($bg) . ';border-radius:' . $item_radius . 'px;aspect-ratio:' . esc_attr($hero_ar) . ';"></div>';

        // Grid cells: remaining items after the hero, capped at two rows.
        $img_count     = count($attachment_ids);
        $total_items   = $img_count + count($video_items);
        $sk_grid_count = min(max(0, $total_items - 1), $cols * 2);

        $grid_html = '';
        if ($sk_grid_count > 0) {
            $cells = '';
            for ($i = 0; $i < $sk_grid_count; $i++) {
                $is_video   = ($i + 1) >= $img_count; // item index 0 is hero; grid starts at 1
                $cell_bg    = $is_video ? '#111111' : $bg;
                $cell_style = 'background:' . esc_attr($cell_bg) . ';border-radius:' . $item_radius . 'px;';
                $cell_style .= ($item_aspect !== 'auto')
                    ? 'aspect-ratio:' . esc_attr($item_aspect) . ';'
                    : 'min-height:160px;';
                $cells .= '<div style="' . $cell_style . '"></div>';
            }
            $grid_style = 'display:grid;grid-template-columns:repeat(' . $cols . ',1fr);gap:' . $gap . 'px;';
            $grid_html  = '<div style="' . esc_attr($grid_style) . '">' . $cells . '</div>';
        }

        $wrap_style = 'display:flex;flex-direction:column;gap:' . $gap . 'px;width:100%;';
        echo '<div class="wcpg-skeleton wcpg-sk-hierarchy-grid" style="' . esc_attr($wrap_style) . '" data-wcpg-skeleton aria-hidden="true">' . $hero_html . $grid_html . '</div>'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
    }
}
