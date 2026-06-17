<?php
if (! defined('ABSPATH')) exit;

/**
 * Detects whether the classic WooCommerce hook system is the active template
 * mechanism for product pages.
 *
 * Used in two places:
 *   WPBean_PGS_WC_Gallery_Loader  – decides whether to register the hook-based
 *                                gallery injection at all.
 *   WPBean_PGS_Compat_Notice   – decides which admin notices to show (that class
 *                                adds deeper DB-query checks on top of these).
 *
 * Detection strategy per builder
 * ────────────────────────────────────────────────────────────────────────────
 * Block / FSE theme      Class/function check only — authoritative, zero false positives.
 * Elementor Pro          Class check + DB query (cached in a transient). A class-only
 *                        check causes false positives when Elementor Pro is installed but
 *                        not controlling the single product template.
 * Divi / Extra THEME     Theme name check + DB query (cached in a transient). Theme Builder
 *                        must have a published product template before Divi bypasses WC hooks.
 * Beaver Builder Themer  Class check only — FLThemeBuilderLayoutData is Themer-exclusive.
 * Oxygen Builder         Class / constant check only — Oxygen takes over all templates.
 * Bricks Builder         Class check only — Bricks replaces the WP template loader.
 */
class WPBean_PGS_Template_Context
{

	/** Transient key for the cached Elementor product-template check. */
	const EL_CACHE_KEY = 'wpbean_pgs_el_product_tpl';

	/** Transient key for the cached Divi Theme Builder product-template check. */
	const DIVI_CACHE_KEY = 'wpbean_pgs_divi_product_tpl';

	// ── Public API ──────────────────────────────────────────────────────────────

	/**
	 * Returns TRUE when the page is rendered via the classic WooCommerce template
	 * system, meaning `woocommerce_before_single_product_summary` will fire and
	 * hook-based gallery injection will work correctly.
	 *
	 * Returns FALSE for any environment known to bypass that hook.
	 *
	 * @return bool
	 */
	public static function uses_classic_wc_template()
	{

		// ── Block / FSE theme ─────────────────────────────────────────────────
		if (function_exists('wp_is_block_theme') && wp_is_block_theme()) {
			return false;
		}

		// ── Elementor Pro Theme Builder ───────────────────────────────────────
		// Guard with a confirmed DB check so that having Elementor Pro *installed*
		// but not assigned to single product pages does not produce a false positive.
		if (
			class_exists('\ElementorPro\Modules\ThemeBuilder\Module')
			&& self::elementor_has_product_template()
		) {
			return false;
		}

		// ── Divi / Extra theme ────────────────────────────────────────────────
		// Divi/Extra only bypasses the classic WC hook system when Theme Builder
		// has a published single-product template assigned. Without that, the
		// default Divi product page still fires woocommerce_before_single_product_summary
		// normally, so hook-based gallery injection works fine.
		if (
			in_array(wp_get_theme()->get_template(), ['Divi', 'Extra'], true)
			&& self::divi_has_product_template()
		) {
			return false;
		}

		// ── Beaver Builder Themer ─────────────────────────────────────────────
		// FLThemeBuilderLayoutData is the Themer-exclusive class; plain Beaver
		// Builder (page builder only) does not ship it.
		if (class_exists('FLThemeBuilderLayoutData')) {
			return false;
		}

		// ── Oxygen Builder ────────────────────────────────────────────────────
		if (class_exists('OxygenApplication') || defined('CT_VERSION')) {
			return false;
		}

		// ── Bricks Builder ────────────────────────────────────────────────────
		if (class_exists('\Bricks\Database')) {
			return false;
		}

		return true;
	}

	/**
	 * Register the hooks that keep the Elementor transient cache fresh.
	 * Call this once during plugin init (both admin and frontend contexts).
	 */
	public static function register_cache_hooks()
	{
		// Clear cached result whenever any Elementor library template is saved
		// or its publish status changes (covers template condition edits too).
		add_action('save_post_elementor_library',    [__CLASS__, 'clear_elementor_cache']);
		add_action('deleted_post',                   [__CLASS__, 'clear_elementor_cache']);

		add_action('save_post_et_theme_layout',      [__CLASS__, 'clear_divi_cache']);
		add_action('deleted_post',                   [__CLASS__, 'clear_divi_cache']);
	}

	/** Force-clear the cached Elementor product-template result. */
	public static function clear_elementor_cache()
	{
		delete_transient(self::EL_CACHE_KEY);
	}

	/** Force-clear the cached Divi Theme Builder product-template result. */
	public static function clear_divi_cache()
	{
		delete_transient(self::DIVI_CACHE_KEY);
	}

	// ── Private helpers ─────────────────────────────────────────────────────────

	/**
	 * Query whether Elementor Pro has a "Single" template whose conditions
	 * target WooCommerce product pages.
	 *
	 * The result is stored in a transient (12 h TTL) so the DB query runs at
	 * most once every 12 hours per site. The transient is invalidated immediately
	 * whenever an Elementor library post is saved or deleted via register_cache_hooks().
	 *
	 * @return bool
	 */
	private static function elementor_has_product_template()
	{
		$cached = get_transient(self::EL_CACHE_KEY);

		if ($cached !== false) {
			return $cached === '1';
		}

		$posts = get_posts([
			'post_type'      => 'elementor_library',
			'post_status'    => 'publish',
			'posts_per_page' => 1,
			'fields'         => 'ids',
			'no_found_rows'  => true,
			'meta_query'     => [
				'relation' => 'AND',
				[
					'key'   => '_elementor_template_type',
					'value' => 'single',
				],
				[
					'key'     => '_elementor_conditions',
					'value'   => 'product',
					'compare' => 'LIKE',
				],
			],
		]);

		$has_template = ! empty($posts);
		set_transient(self::EL_CACHE_KEY, $has_template ? '1' : '0', 12 * HOUR_IN_SECONDS);

		return $has_template;
	}

	/**
	 * Query whether Divi Theme Builder has a published template whose conditions
	 * target WooCommerce single-product pages.
	 *
	 * The result is stored in a transient (12 h TTL) and invalidated whenever
	 * an et_theme_layout post is saved or deleted via register_cache_hooks().
	 *
	 * Divi stores template conditions across several meta keys depending on
	 * version (_et_pb_post_settings, _et_pb_template_type, _et_pb_post_metadata).
	 * The OR meta_query covers all known storage locations.
	 *
	 * @return bool
	 */
	private static function divi_has_product_template()
	{
		// ET_Theme_Builder_Request_Handler is the authoritative class for Divi's
		// Theme Builder feature. If it isn't loaded, TB cannot override any template.
		if (! class_exists('ET_Theme_Builder_Request_Handler')) {
			return false;
		}

		// On the frontend, by 'template_redirect' time (where we register our
		// gallery hook), Divi's Theme Builder has fully resolved which layouts
		// apply to the current page.
		//
		// et_theme_builder_get_template_layouts() is Divi's own runtime API;
		// we check for a body layout specifically because header/footer-only
		// overrides still leave the WooCommerce body template (and its hooks)
		// intact — only a body layout replacement bypasses WC hooks.
		if (! is_admin() && function_exists('et_theme_builder_get_template_layouts')) {
			$layouts = et_theme_builder_get_template_layouts();
			// Divi returns ['et_header_layout'=>…, 'et_body_layout'=>…, 'et_footer_layout'=>…]
			// A non-empty et_body_layout means Divi is rendering the product body.
			return ! empty($layouts['et_body_layout'])
				|| (! isset($layouts['et_body_layout']) && ! empty($layouts));
		}

		// Admin context or Divi runtime API unavailable — fall back to the
		// cached DB query (used by WPBean_PGS_Compat_Notice, for example).
		$cached = get_transient(self::DIVI_CACHE_KEY);
		if ($cached !== false) {
			return $cached === '1';
		}

		$posts = get_posts([
			'post_type'      => 'et_theme_layout',
			'post_status'    => 'publish',
			'posts_per_page' => 1,
			'fields'         => 'ids',
			'no_found_rows'  => true,
			'meta_query'     => [
				'relation' => 'OR',
				[
					'key'     => '_et_pb_template_type',
					'value'   => 'product',
					'compare' => 'LIKE',
				],
				[
					'key'     => '_et_pb_post_settings',
					'value'   => 'product',
					'compare' => 'LIKE',
				],
				[
					'key'     => '_et_pb_post_metadata',
					'value'   => 'product',
					'compare' => 'LIKE',
				],
			],
		]);

		$has_template = ! empty($posts);
		set_transient(self::DIVI_CACHE_KEY, $has_template ? '1' : '0', 12 * HOUR_IN_SECONDS);

		return $has_template;
	}
}
