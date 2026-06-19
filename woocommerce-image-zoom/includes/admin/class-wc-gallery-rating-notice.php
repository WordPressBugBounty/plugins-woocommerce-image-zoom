<?php

if (! defined('ABSPATH')) exit;

/**
 * Shows a rating + upgrade prompt to free users after 7 days of installation.
 *
 * User options
 * ────────────
 * "I'll do it later"   → snooze 7 days (repeat each time)
 * "Already did"        → permanent dismiss
 * "Don't ask me again" → permanent dismiss
 */
class WPBean_PGS_Rating_Notice
{
    const AJAX_ACTION      = 'wpbean_pgs_rating_notice_action';
    const META_STATUS      = 'wpbean_pgs_rating_status';
    const META_REMIND_AT   = 'wpbean_pgs_rating_remind_at';
    const INSTALL_OPTION   = 'wpbean_pgs_installed';
    const REVIEW_URL       = 'https://wordpress.org/support/plugin/wpbean-product-gallery-slider-for-woocommerce/reviews/#new-post';
    const DISCOUNT_CODE    = 'WELCOME10';
    const INITIAL_DELAY    = WEEK_IN_SECONDS;
    const SNOOZE_DELAY     = WEEK_IN_SECONDS;

    public function __construct()
    {
        add_action('admin_notices',         [$this, 'display_notice']);
        add_action('admin_enqueue_scripts', [$this, 'enqueue_inline_script']);
        add_action('wp_ajax_' . self::AJAX_ACTION, [$this, 'handle_ajax']);
    }

    // ── Public hooks ─────────────────────────────────────────────────────────

    public function display_notice(): void
    {
        if (! $this->should_show()) {
            return;
        }

        $nonce       = wp_create_nonce(self::AJAX_ACTION);
        $upgrade_url = 'https://wpbean.com/woocommerce-product-gallery/?utm_content=WPBean+Product+Gallery+Slider&utm_campaign=adminlink&utm_medium=dash-settings&utm_source=FreeVersion';

        ?>
        <div class="notice wpbean-pgs-rating-notice"
            data-nonce="<?php echo esc_attr($nonce); ?>"
            style="padding:0;border-left-color:#7c3aed;overflow:hidden;">

            <div style="display:flex;align-items:flex-start;gap:0;">

                <!-- Accent sidebar strip -->
                <div style="width:4px;background:#7c3aed;flex-shrink:0;align-self:stretch;"></div>

                <div style="flex:1;padding:16px 18px;">

                    <p style="margin:0 0 5px;font-size:14px;font-weight:700;color:#1d2327;display:flex;align-items:center;gap:8px;">
                        <span style="font-size:20px;line-height:1;">&#9733;</span>
                        <?php esc_html_e('Enjoying WPBean Product Gallery for WooCommerce?', 'wpbean-product-gallery-slider-for-woocommerce'); ?>
                    </p>

                    <p style="margin:0 0 8px;color:#3c434a;font-size:13px;line-height:1.6;">
                        <?php esc_html_e("You've been using the plugin for a week — thank you! If it's been helpful, a quick 5-star rating on WordPress.org makes a huge difference. It takes less than a minute and helps thousands of other store owners find the plugin.", 'wpbean-product-gallery-slider-for-woocommerce'); ?>
                    </p>

                    <p style="margin:0 0 14px;color:#3c434a;font-size:13px;line-height:1.6;">
                        <?php
                        printf(
                            /* translators: 1: discount code, 2: opening <strong> tag, 3: closing </strong> tag, 4: opening upgrade link, 5: closing </a> tag */
                            esc_html__('Ready to unlock zoom, lightbox, and video Pro features? Use code %1$s%2$s%3$s for %4$s10%% off%5$s your upgrade. %6$sUpgrade to Pro &rarr;%7$s', 'wpbean-product-gallery-slider-for-woocommerce'),
                            '<code style="background:#f0f0f1;padding:2px 6px;border-radius:3px;font-weight:700;color:#1d2327;">',
                            esc_html(self::DISCOUNT_CODE),
                            '</code>',
                            '<strong>',
                            '</strong>',
                            '<a href="' . esc_url($upgrade_url) . '" target="_blank" style="color:#7c3aed;font-weight:600;text-decoration:none;" data-action="done">',
                            '</a>'
                        );
                        ?>
                    </p>

                    <div style="display:flex;flex-wrap:wrap;align-items:center;gap:10px;">

                        <!-- Primary CTA: opens review page AND marks done -->
                        <a href="<?php echo esc_url(self::REVIEW_URL); ?>"
                            target="_blank"
                            data-action="done"
                            class="button button-primary"
                            style="background:#7c3aed;border-color:#6d28d9;box-shadow:none;display:flex;align-items:center;gap:5px;text-decoration:none;">
                            &#9733;&#9733;&#9733;&#9733;&#9733;&nbsp;<?php esc_html_e('Rate 5 Stars', 'wpbean-product-gallery-slider-for-woocommerce'); ?>
                        </a>

                        <!-- Upgrade button -->
                        <a href="<?php echo esc_url($upgrade_url); ?>"
                            target="_blank"
                            data-action="done"
                            class="button"
                            style="border-color:#7c3aed;color:#7c3aed;text-decoration:none;">
                            <?php esc_html_e('Upgrade to Pro', 'wpbean-product-gallery-slider-for-woocommerce'); ?>
                        </a>

                        <span style="color:#646970;font-size:12px;display:flex;gap:14px;margin-left:4px;">
                            <a href="#" data-action="later"
                                style="color:#646970;text-decoration:none;font-size:12px;"
                                onmouseover="this.style.textDecoration='underline'"
                                onmouseout="this.style.textDecoration='none'">
                                <?php esc_html_e('I\'ll do it later', 'wpbean-product-gallery-slider-for-woocommerce'); ?>
                            </a>
                            <span style="opacity:.4;">|</span>
                            <a href="#" data-action="done"
                                style="color:#646970;text-decoration:none;font-size:12px;"
                                onmouseover="this.style.textDecoration='underline'"
                                onmouseout="this.style.textDecoration='none'">
                                <?php esc_html_e('Already did', 'wpbean-product-gallery-slider-for-woocommerce'); ?>
                            </a>
                            <span style="opacity:.4;">|</span>
                            <a href="#" data-action="dismissed"
                                style="color:#646970;text-decoration:none;font-size:12px;"
                                onmouseover="this.style.textDecoration='underline'"
                                onmouseout="this.style.textDecoration='none'">
                                <?php esc_html_e("Don't ask me again", 'wpbean-product-gallery-slider-for-woocommerce'); ?>
                            </a>
                        </span>

                    </div>

                </div><!-- /content -->

            </div><!-- /flex row -->

        </div><!-- /.wpbean-pgs-rating-notice -->
        <?php
    }

    public function enqueue_inline_script(): void
    {
        if (! $this->should_show()) {
            return;
        }

        wp_add_inline_script(
            'jquery',
            sprintf(
                'jQuery(function($){' .
                '  $(document).on("click",".wpbean-pgs-rating-notice [data-action]",function(e){' .
                '    var $btn=$(this);' .
                '    var action=$btn.data("action");' .
                '    var $n=$btn.closest(".wpbean-pgs-rating-notice");' .
                '    var isRealLink=($btn.is("a")&&$btn.attr("href")!=="#");' .
                '    if(!isRealLink){e.preventDefault();}' .
                '    $n.slideUp(300);' .
                '    $.post(ajaxurl,{action:%s,type:action,nonce:$n.data("nonce")});' .
                '  });' .
                '});',
                wp_json_encode(self::AJAX_ACTION)
            )
        );
    }

    public function handle_ajax(): void
    {
        check_ajax_referer(self::AJAX_ACTION, 'nonce');

        if (! current_user_can('manage_options')) {
            wp_send_json_error('Unauthorized', 403);
        }

        $type = sanitize_key(wp_unslash($_POST['type'] ?? ''));
        $uid  = get_current_user_id();

        switch ($type) {
            case 'later':
                update_user_meta($uid, self::META_STATUS, 'later');
                update_user_meta($uid, self::META_REMIND_AT, time() + self::SNOOZE_DELAY);
                break;

            case 'done':
            case 'dismissed':
                update_user_meta($uid, self::META_STATUS, $type);
                delete_user_meta($uid, self::META_REMIND_AT);
                break;

            default:
                wp_send_json_error('Invalid action', 400);
        }

        wp_send_json_success();
    }

    // ── Display guard ─────────────────────────────────────────────────────────

    private function should_show(): bool
    {
        if (! current_user_can('manage_options')) {
            return false;
        }

        // Only for free / non-paying users.
        if (function_exists('wpbean_pgs_fs') && wpbean_pgs_fs()->is_paying_or_trial()) {
            return false;
        }

        $uid    = get_current_user_id();
        $status = get_user_meta($uid, self::META_STATUS, true);

        if (in_array($status, ['done', 'dismissed'], true)) {
            return false;
        }

        if ($status === 'later') {
            $remind_at = (int) get_user_meta($uid, self::META_REMIND_AT, true);
            if ($remind_at && time() < $remind_at) {
                return false;
            }
        }

        $installed = (int) get_option(self::INSTALL_OPTION, 0);

        return $installed && (time() - $installed) >= self::INITIAL_DELAY;
    }
}
