<?php

if (! defined('ABSPATH')) exit;

/**
 * Detects environments where the plugin's hook-based gallery injection may fail
 * and shows targeted, dismissible admin notices with step-by-step remediation.
 *
 * Detected scenarios
 * ──────────────────
 * 1. Block / FSE theme + WooCommerce single-product block template active
 * 2. Block / FSE theme (generic — WC Blocks likely injects a template automatically)
 * 3. Elementor Pro Theme Builder with a single-product template assigned
 * 4. Divi / Extra Theme Builder with a product template assigned
 * 5. Beaver Builder Themer with a singular/product layout assigned
 * 6. Oxygen Builder with a single-product template assigned
 * 7. Bricks Builder with a product template assigned
 *
 * Why hook-based injection breaks:
 *   Our gallery is rendered via `woocommerce_before_single_product_summary`. Block
 *   templates and page-builder overrides bypass WordPress's classic template loader,
 *   so that hook either never fires or fires inside an unrelated context — causing a
 *   duplicate gallery or a missing gallery.
 */
class WPBean_PGS_Compat_Notice
{

	const AJAX_ACTION    = 'wpbean_pgs_dismiss_compat_notice';
	const USER_META_KEY  = 'wpbean_pgs_dismissed_compat_notices';
	const TRANSIENT_KEY  = 'wpbean_pgs_hook_conflicts';
	const TRANSIENT_TTL  = DAY_IN_SECONDS;

	/** @var array<string, array{type: string, title: string, message: string, steps: string[]}> */
	private $issues = [];

	public function __construct()
	{
		add_action('admin_init',            [$this, 'run_checks']);
		add_action('admin_notices',         [$this, 'display_notices']);
		add_action('admin_enqueue_scripts', [$this, 'maybe_enqueue_dismiss_js']);
		add_action('wp_ajax_' . self::AJAX_ACTION, [$this, 'handle_ajax_dismiss']);
	}

	// ── Frontend detector (static, runs outside admin) ─────────────────────────

	/**
	 * Register a low-priority callback on woocommerce_before_single_product_summary
	 * so we can inspect all other plugins' callbacks when a real product page loads.
	 *
	 * Call this unconditionally from the plugin bootstrap (not inside is_admin()).
	 */
	public static function register_frontend_detector(): void
	{
		add_action('woocommerce_before_single_product_summary', [self::class, 'detect_hook_conflicts'], 1);
	}

	/**
	 * Runs at priority 1 on woocommerce_before_single_product_summary on the frontend.
	 *
	 * At this point $wp_filter already contains every callback that will fire on this
	 * hook during the current request — including those registered only when
	 * !is_admin(). We walk those callbacks, skip our own and WooCommerce's default,
	 * resolve each one back to its plugin via Reflection, and store the list in a
	 * short-lived transient that the admin notice reads.
	 */
	public static function detect_hook_conflicts(): void
	{
		global $wp_filter;
		$hook = 'woocommerce_before_single_product_summary';

		if (empty($wp_filter[$hook]) || ! is_a($wp_filter[$hook], 'WP_Hook')) {
			return;
		}

		$conflicts = [];

		foreach ($wp_filter[$hook]->callbacks as $priority_callbacks) {
			foreach ($priority_callbacks as $callback_data) {
				$fn = $callback_data['function'] ?? null;
				if (! $fn) {
					continue;
				}

				// Skip WooCommerce's own default gallery function.
				if (is_string($fn) && $fn === 'woocommerce_show_product_images') {
					continue;
				}

				// Skip our own render callback.
				if (
					is_array($fn)
					&& isset($fn[0], $fn[1])
					&& is_a($fn[0], 'WPBean_PGS_WC_Gallery_Loader')
					&& $fn[1] === 'render_custom_gallery'
				) {
					continue;
				}

				// Skip our own detector (priority 1).
				if (
					is_array($fn)
					&& isset($fn[0], $fn[1])
					&& $fn[0] === self::class
					&& $fn[1] === 'detect_hook_conflicts'
				) {
					continue;
				}

				$file = self::reflect_callback_file($fn);
				if (! $file) {
					continue;
				}

				$info = self::identify_plugin_from_file($file);
				if ($info && ! isset($conflicts[$info['name']])) {
					$conflicts[$info['name']] = $info['developer'];
				}
			}
		}

		// Always overwrite so the transient reflects current state on every product
		// page visit — including after a conflicting plugin is deactivated.
		set_transient(self::TRANSIENT_KEY, $conflicts, self::TRANSIENT_TTL);
	}

	// ── Public hooks ────────────────────────────────────────────────────────────

	/**
	 * Run all compatibility checks and populate the internal issues list.
	 * Bails early if the current user cannot manage WooCommerce.
	 */
	public function run_checks()
	{
		if (! current_user_can('manage_woocommerce')) {
			return;
		}

		$this->check_block_fse_theme();
		$this->check_elementor_pro();
		$this->check_divi_builder();
		$this->check_beaver_themer();
		$this->check_oxygen_builder();
		$this->check_bricks_builder();
		$this->check_conflicting_gallery_plugins();
	}

	/**
	 * Render any non-dismissed notices on relevant admin screens.
	 */
	public function display_notices()
	{
		if (empty($this->issues) || ! $this->is_relevant_screen()) {
			return;
		}

		$dismissed = $this->get_dismissed_keys();

		foreach ($this->issues as $key => $issue) {
			if (in_array($key, $dismissed, true)) {
				continue;
			}
			$this->render_notice($key, $issue);
		}
	}

	/**
	 * Enqueue the tiny inline dismiss script only when notices will be shown.
	 */
	public function maybe_enqueue_dismiss_js()
	{
		if (empty($this->issues) || ! $this->is_relevant_screen()) {
			return;
		}

		$dismissed   = $this->get_dismissed_keys();
		$has_visible = false;
		foreach ($this->issues as $key => $issue) {
			if (! in_array($key, $dismissed, true)) {
				$has_visible = true;
				break;
			}
		}

		if (! $has_visible) {
			return;
		}

		// jQuery is always available in wp-admin; attach a tiny inline handler.
		wp_add_inline_script(
			'jquery',
			sprintf(
				'jQuery(function($){' .
					'  $(document).on("click",".wpbean-pgs-compat-notice .wpbean-pgs-dismiss-btn",function(){' .
					'    var $n=$(this).closest(".wpbean-pgs-compat-notice");' .
					'    $n.slideUp(200);' .
					'    $.post(ajaxurl,{action:%s,notice_key:$n.data("key"),nonce:$n.data("nonce")});' .
					'  });' .
					'});',
				wp_json_encode(self::AJAX_ACTION)
			)
		);
	}

	/**
	 * AJAX handler: persist a dismissed notice key in the current user's meta.
	 */
	public function handle_ajax_dismiss()
	{
		check_ajax_referer(self::AJAX_ACTION, 'nonce');

		if (! current_user_can('manage_woocommerce')) {
			wp_send_json_error('Unauthorized', 403);
		}

		$key = sanitize_key(wp_unslash($_POST['notice_key'] ?? ''));
		if (! $key) {
			wp_send_json_error('Missing notice key', 400);
		}

		$dismissed   = $this->get_dismissed_keys();
		$dismissed[] = $key;
		update_user_meta(get_current_user_id(), self::USER_META_KEY, array_unique($dismissed));

		wp_send_json_success();
	}

	// ── Compatibility checks ────────────────────────────────────────────────────

	/**
	 * Block / Full-Site-Editor themes.
	 *
	 * When a block theme is active, WooCommerce (via the Blocks package) automatically
	 * registers a `single-product.html` block template. WordPress serves this template
	 * instead of the classic `single-product.php` loop, meaning the classic
	 * `woocommerce_before_single_product_summary` hook never fires.
	 *
	 * We raise a *warning* when we can confirm a product block template is present,
	 * and a softer *info* notice otherwise (because WC Blocks injects a template
	 * automatically for all block themes — the user just may not have visited yet).
	 */
	private function check_block_fse_theme()
	{
		if (! function_exists('wp_is_block_theme') || ! wp_is_block_theme()) {
			return;
		}

		$has_confirmed_template = $this->theme_has_block_product_template()
			|| $this->wc_provides_block_product_template();

		if ($has_confirmed_template) {
			$this->add_issue(
				'block_fse_with_template',
				'warning',
				__('Block (FSE) Theme + Single Product Block Template Detected', 'wpbean-product-gallery-slider-for-woocommerce'),
				sprintf(
					/* translators: %s: hook name */
					__('Your active theme uses the <strong>Full Site Editor (FSE)</strong> and a block-based <em>Single Product</em> template is active. WooCommerce serves this template directly, bypassing the classic <code>%s</code> hook — so the plugin\'s gallery may be invisible or may appear alongside the default WooCommerce gallery.', 'wpbean-product-gallery-slider-for-woocommerce'),
					'woocommerce_before_single_product_summary'
				),
				[
					__('Go to <strong>Appearance → Editor → Templates → WooCommerce</strong>.', 'wpbean-product-gallery-slider-for-woocommerce'),
					__('Open the <strong>Single Product</strong> template.', 'wpbean-product-gallery-slider-for-woocommerce'),
					__('Remove the default WooCommerce <strong>Product Gallery</strong> block from the template.', 'wpbean-product-gallery-slider-for-woocommerce'),
					__('Add the <strong>WPBean Product Gallery</strong> block in its place.', 'wpbean-product-gallery-slider-for-woocommerce'),
					__('Save the template.', 'wpbean-product-gallery-slider-for-woocommerce'),
				]
			);
		} else {
			$this->add_issue(
				'block_fse_generic',
				'info',
				__('Block (FSE) Theme Detected — Verify Gallery Compatibility', 'wpbean-product-gallery-slider-for-woocommerce'),
				sprintf(
					/* translators: %s: hook name */
					__('Your active theme is a <strong>block-based (FSE) theme</strong>. WooCommerce Blocks automatically provides a block template for the single product page, which can bypass the classic <code>%s</code> hook that our gallery relies on.', 'wpbean-product-gallery-slider-for-woocommerce'),
					'woocommerce_before_single_product_summary'
				),
				[
					__('Visit a product page on your site and confirm the zoom gallery is displaying correctly.', 'wpbean-product-gallery-slider-for-woocommerce'),
					__('If the gallery is missing or doubled, go to <strong>Appearance → Editor → Templates → WooCommerce → Single Product</strong>.', 'wpbean-product-gallery-slider-for-woocommerce'),
					__('Remove the default <strong>Product Gallery</strong> block and add the <strong>WPBean Product Gallery</strong> block in its place.', 'wpbean-product-gallery-slider-for-woocommerce'),
				]
			);
		}
	}

	/**
	 * Elementor Pro Theme Builder — single-product template.
	 *
	 * When Elementor Pro's Theme Builder has a template assigned to single product
	 * pages it replaces the entire page layout, including the WooCommerce template
	 * loader that fires the gallery hooks.
	 */
	private function check_elementor_pro()
	{
		if (! class_exists('\ElementorPro\Modules\ThemeBuilder\Module')) {
			return;
		}

		if (! $this->elementor_has_single_product_template()) {
			return;
		}

		$this->add_issue(
			'elementor_pro_theme_builder',
			'warning',
			__('Elementor Pro Theme Builder: Single Product Template Detected', 'wpbean-product-gallery-slider-for-woocommerce'),
			__('<strong>Elementor Pro Theme Builder</strong> is controlling the single product layout. This overrides WooCommerce\'s template system, so our gallery hook is bypassed and the gallery will not appear.', 'wpbean-product-gallery-slider-for-woocommerce'),
			[
				__('In your WordPress admin, go to <strong>Templates → Theme Builder</strong>.', 'wpbean-product-gallery-slider-for-woocommerce'),
				__('Open your <strong>Single Product</strong> template.', 'wpbean-product-gallery-slider-for-woocommerce'),
				__('Remove the default <strong>WooCommerce Product Image</strong> widget.', 'wpbean-product-gallery-slider-for-woocommerce'),
				__('Add the <strong>WPBean Product Gallery</strong> widget (available in the WPBean widget section) in its place.', 'wpbean-product-gallery-slider-for-woocommerce'),
				__('Save and publish the template.', 'wpbean-product-gallery-slider-for-woocommerce'),
			]
		);
	}

	/**
	 * Divi / Extra Theme Builder — product template.
	 */
	private function check_divi_builder()
	{
		$is_divi_theme  = in_array(wp_get_theme()->get_template(), ['Divi', 'Extra'], true);
		$is_divi_plugin = class_exists('ET_Builder_Plugin');

		if (! $is_divi_theme && ! $is_divi_plugin) {
			return;
		}

		if (! $this->divi_has_product_template()) {
			return;
		}

		$this->add_issue(
			'divi_theme_builder',
			'warning',
			__('Divi Theme Builder: Product Template Detected', 'wpbean-product-gallery-slider-for-woocommerce'),
			__('The <strong>Divi Theme Builder</strong> has a template assigned to single product pages. This replaces WooCommerce\'s default template and prevents our gallery from rendering via the standard hook.', 'wpbean-product-gallery-slider-for-woocommerce'),
			[
				__('Go to <strong>Divi → Theme Builder</strong>.', 'wpbean-product-gallery-slider-for-woocommerce'),
				__('Open the template assigned to single product pages.', 'wpbean-product-gallery-slider-for-woocommerce'),
				__('Remove the default product image module.', 'wpbean-product-gallery-slider-for-woocommerce'),
				__('Add a <strong>Code</strong> module with the shortcode <code>[wpbean_product_gallery]</code>.', 'wpbean-product-gallery-slider-for-woocommerce'),
				__('Save the template.', 'wpbean-product-gallery-slider-for-woocommerce'),
			]
		);
	}

	/**
	 * Beaver Builder Themer — singular/product layout.
	 */
	private function check_beaver_themer()
	{
		if (! class_exists('FLThemeBuilderLayoutData')) {
			return;
		}

		if (! $this->beaver_has_product_layout()) {
			return;
		}

		$this->add_issue(
			'beaver_builder_themer',
			'warning',
			__('Beaver Builder Themer: Product Layout Detected', 'wpbean-product-gallery-slider-for-woocommerce'),
			__('<strong>Beaver Builder Themer</strong> has a layout assigned to single product pages. Because Themer renders the entire page, WooCommerce\'s classic product gallery hook is bypassed.', 'wpbean-product-gallery-slider-for-woocommerce'),
			[
				__('Go to <strong>Beaver Builder → Themer Layouts</strong>.', 'wpbean-product-gallery-slider-for-woocommerce'),
				__('Edit the layout assigned to product pages.', 'wpbean-product-gallery-slider-for-woocommerce'),
				__('Remove the WooCommerce product image module.', 'wpbean-product-gallery-slider-for-woocommerce'),
				__('Add a HTML module containing <code>[wpbean_product_gallery] shortcode.</code>.', 'wpbean-product-gallery-slider-for-woocommerce'),
				__('Save and publish the layout.', 'wpbean-product-gallery-slider-for-woocommerce'),
			]
		);
	}

	/**
	 * Oxygen Builder — single-product template.
	 */
	private function check_oxygen_builder()
	{
		if (! class_exists('OxygenApplication') && ! defined('CT_VERSION')) {
			return;
		}

		if (! $this->oxygen_has_product_template()) {
			return;
		}

		$this->add_issue(
			'oxygen_builder',
			'warning',
			__('Oxygen Builder: Product Template Detected', 'wpbean-product-gallery-slider-for-woocommerce'),
			__('<strong>Oxygen Builder</strong> has a template assigned to single product pages. Oxygen renders pages independently of WordPress\'s template loop, so WooCommerce\'s gallery hook does not fire.', 'wpbean-product-gallery-slider-for-woocommerce'),
			[
				__('Go to <strong>Oxygen → Templates</strong> and open your product page template.', 'wpbean-product-gallery-slider-for-woocommerce'),
				__('Remove the WooCommerce product image element.', 'wpbean-product-gallery-slider-for-woocommerce'),
				__('Add a <strong>Shortcode</strong> element and enter <code>[wpbean_product_gallery]</code>.', 'wpbean-product-gallery-slider-for-woocommerce'),
				__('Save the template.', 'wpbean-product-gallery-slider-for-woocommerce'),
			]
		);
	}

	/**
	 * Bricks Builder — product template.
	 */
	private function check_bricks_builder()
	{
		if (! class_exists('\Bricks\Database')) {
			return;
		}

		if (! $this->bricks_has_product_template()) {
			return;
		}

		$this->add_issue(
			'bricks_builder',
			'warning',
			__('Bricks Builder: Product Template Detected', 'wpbean-product-gallery-slider-for-woocommerce'),
			__('<strong>Bricks Builder</strong> has a template assigned to single product pages. Bricks renders outside WooCommerce\'s standard hook system, preventing our gallery from loading automatically.', 'wpbean-product-gallery-slider-for-woocommerce'),
			[
				__('Go to <strong>Bricks → Templates</strong>.', 'wpbean-product-gallery-slider-for-woocommerce'),
				__('Edit the template assigned to single product pages.', 'wpbean-product-gallery-slider-for-woocommerce'),
				__('Remove the WooCommerce Product Gallery element.', 'wpbean-product-gallery-slider-for-woocommerce'),
				__('Add a <strong>Shortcode</strong> element with <code>[wpbean_product_gallery]</code>.', 'wpbean-product-gallery-slider-for-woocommerce'),
				__('Save the template.', 'wpbean-product-gallery-slider-for-woocommerce'),
			]
		);
	}

	// ── Sub-detection helpers ───────────────────────────────────────────────────

	/**
	 * True when the active theme ships a `templates/single-product.html` block template.
	 */
	private function theme_has_block_product_template()
	{
		$paths = [
			get_template_directory()   . '/templates/single-product.html',
			get_stylesheet_directory() . '/templates/single-product.html',
		];
		foreach ($paths as $path) {
			if (file_exists($path)) {
				return true;
			}
		}
		return false;
	}

	/**
	 * True when WooCommerce (or WooCommerce Blocks) ships its own single-product
	 * block template that WordPress will use for FSE themes.
	 *
	 * WooCommerce 6.0+ ships a `single-product.html` in its Blocks package and
	 * registers it via `BlockTemplatesController` / `SingleProductTemplate`. The
	 * class-based check is the most forward-compatible approach.
	 */
	private function wc_provides_block_product_template()
	{
		// Class introduced in WooCommerce 7.9 (Blocks 10.x).
		if (class_exists('\Automattic\WooCommerce\Blocks\Templates\SingleProductTemplate')) {
			return true;
		}

		// Fallback: physical file presence in the WC plugin directory.
		if (function_exists('WC')) {
			$wc_block_tpl = trailingslashit(WC()->plugin_path())
				. 'templates/templates/single-product.html';
			if (file_exists($wc_block_tpl)) {
				return true;
			}
		}

		return false;
	}

	/**
	 * True when Elementor Pro has a "single" type template whose conditions
	 * reference WooCommerce product posts.
	 */
	private function elementor_has_single_product_template()
	{
		$posts = get_posts([
			'post_type'      => 'elementor_library',
			'posts_per_page' => 1,
			'fields'         => 'ids',
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

		return ! empty($posts);
	}

	/**
	 * True when Divi Theme Builder has a layout (`et_theme_layout`) whose meta
	 * targets WooCommerce product pages.
	 */
	private function divi_has_product_template()
	{
		// Divi stores layout types in `_et_theme_builder_template_type` (singular)
		// and uses various condition keys depending on the Divi version.
		$layouts = get_posts([
			'post_type'      => 'et_theme_layout',
			'posts_per_page' => 1,
			'fields'         => 'ids',
			'meta_query'     => [
				[
					'key'     => '_et_pb_built_for_post_type',
					'value'   => 'product',
					'compare' => 'LIKE',
				],
			],
		]);

		if (! empty($layouts)) {
			return true;
		}

		// Alternative meta key used by some Divi versions.
		$layouts_alt = get_posts([
			'post_type'      => 'et_theme_layout',
			'posts_per_page' => 1,
			'fields'         => 'ids',
			'meta_query'     => [
				[
					'key'     => '_et_theme_builder_template_settings',
					'value'   => 'product',
					'compare' => 'LIKE',
				],
			],
		]);

		return ! empty($layouts_alt);
	}

	/**
	 * True when Beaver Builder Themer has a layout assigned to singular product pages.
	 */
	private function beaver_has_product_layout()
	{
		if (! method_exists('FLThemeBuilderLayoutData', 'get_layouts_by_location')) {
			return false;
		}

		// Check the 'singular' location first (most common for product pages).
		$locations = ['singular', 'archive'];

		foreach ($locations as $location) {
			$layout_ids = FLThemeBuilderLayoutData::get_layouts_by_location($location);

			foreach ((array) $layout_ids as $id) {
				$rules = get_post_meta($id, '_fl_theme_layout_locations', true);
				if (! is_array($rules)) {
					continue;
				}
				foreach ($rules as $rule) {
					if (false !== strpos((string) $rule, 'product')) {
						return true;
					}
				}
			}
		}

		return false;
	}

	/**
	 * True when Oxygen Builder has a `ct_template` assigned to WooCommerce product pages.
	 */
	private function oxygen_has_product_template()
	{
		$templates = get_posts([
			'post_type'      => 'ct_template',
			'posts_per_page' => 1,
			'fields'         => 'ids',
			'meta_query'     => [
				[
					'key'     => 'ct_template_condition',
					'value'   => 'product',
					'compare' => 'LIKE',
				],
			],
		]);

		return ! empty($templates);
	}

	/**
	 * True when Bricks Builder has a `bricks_template` whose conditions target
	 * WooCommerce product pages.
	 */
	private function bricks_has_product_template()
	{
		$templates = get_posts([
			'post_type'      => 'bricks_template',
			'posts_per_page' => 1,
			'fields'         => 'ids',
			'meta_query'     => [
				[
					'key'     => '_bricks_template_conditions',
					'value'   => 'product',
					'compare' => 'LIKE',
				],
			],
		]);

		return ! empty($templates);
	}

	// ── Dismiss persistence ────────────────────────────────────────────────────

	/**
	 * Return the list of notice keys the current user has already dismissed.
	 *
	 * @return string[]
	 */
	private function get_dismissed_keys()
	{
		return (array) get_user_meta(get_current_user_id(), self::USER_META_KEY, true);
	}

	// ── Screen detection ───────────────────────────────────────────────────────

	/**
	 * Return true when the current admin screen is relevant to this plugin or
	 * WooCommerce (where gallery compatibility notices make sense to show).
	 */
	private function is_relevant_screen()
	{
		$screen = get_current_screen();
		if (! $screen) {
			return false;
		}

		// Exact screen IDs we always show on.
		$allowed = [
			'dashboard',
			'plugins',
			'themes',
			'product',
			'edit-product',
			'woocommerce_page_wc-settings',
			'woocommerce_page_wc-status',
			'wpbean-product-gallery-rules',
		];

		if (in_array($screen->id, $allowed, true)) {
			return true;
		}

		// Our plugin's own pages (screen IDs contain the plugin slug).
		if (false !== strpos($screen->id, 'wpbean')) {
			return true;
		}

		return false;
	}

	// ── Issue registry ─────────────────────────────────────────────────────────

	/**
	 * Register a detected compatibility issue.
	 *
	 * @param string   $key     Unique slug for the notice (used for dismiss storage).
	 * @param string   $type    WP notice type: 'warning', 'info', 'error'.
	 * @param string   $title   Short title displayed in bold.
	 * @param string   $message Explanatory paragraph (HTML allowed via wp_kses_post).
	 * @param string[] $steps   Ordered remediation steps (HTML allowed via wp_kses_post).
	 */
	private function add_issue($key, $type, $title, $message, array $steps = [])
	{
		$this->issues[$key] = compact('type', 'title', 'message', 'steps');
	}

	// ── Conflicting plugin detection ───────────────────────────────────────────

	/**
	 * Detect other active plugins that hook into woocommerce_before_single_product_summary —
	 * the same action our gallery uses — and may produce a duplicate or broken gallery.
	 *
	 * Three strategies run in parallel:
	 *   1. A curated static list of known conflicting plugins (reliable in all contexts).
	 *   2. Transient written by detect_hook_conflicts() on the last product page visit —
	 *      this is the most complete source because all plugins have registered their
	 *      frontend-only hooks by then.
	 *   3. Dynamic inspection of $wp_filter right now — catches plugins that register
	 *      hooks unconditionally (not guarded by !is_admin()).
	 */
	private function check_conflicting_gallery_plugins()
	{
		$conflicts = [];

		// ── Strategy 1: known plugin list ─────────────────────────────────────
		foreach (self::known_gallery_plugins() as $plugin) {
			if ($this->is_known_plugin_active($plugin['detect'])) {
				$conflicts[$plugin['name']] = $plugin['developer'];
			}
		}

		// ── Strategy 2: transient from frontend product-page visit ────────────
		$cached = get_transient(self::TRANSIENT_KEY);
		if (is_array($cached)) {
			foreach ($cached as $name => $developer) {
				if (! isset($conflicts[$name])) {
					$conflicts[$name] = $developer;
				}
			}
		}

		// ── Strategy 3: dynamic hook inspection (admin context, best-effort) ──
		global $wp_filter;
		$hook = 'woocommerce_before_single_product_summary';

		if (! empty($wp_filter[$hook]) && is_a($wp_filter[$hook], 'WP_Hook')) {
			foreach ($wp_filter[$hook]->callbacks as $priority_callbacks) {
				foreach ($priority_callbacks as $callback_data) {
					$fn = $callback_data['function'] ?? null;
					if (! $fn) {
						continue;
					}

					if (is_string($fn) && $fn === 'woocommerce_show_product_images') {
						continue;
					}

					if (
						is_array($fn)
						&& isset($fn[0], $fn[1])
						&& is_a($fn[0], 'WPBean_PGS_WC_Gallery_Loader')
						&& $fn[1] === 'render_custom_gallery'
					) {
						continue;
					}

					$file = self::reflect_callback_file($fn);
					if (! $file) {
						continue;
					}

					$info = self::identify_plugin_from_file($file);
					if ($info && ! isset($conflicts[$info['name']])) {
						$conflicts[$info['name']] = $info['developer'];
					}
				}
			}
		}

		if (empty($conflicts)) {
			return;
		}

		$count     = count($conflicts);
		$hook_name = 'woocommerce_before_single_product_summary';
		$list_html = '<ul style="margin:6px 0 10px 18px;padding:0;list-style:disc;">';

		foreach ($conflicts as $name => $developer) {
			$list_html .= '<li style="margin-bottom:2px;"><strong>' . esc_html($name) . '</strong>';
			if ($developer) {
				$list_html .= ' <span style="color:#646970;">— '
					. esc_html__('by', 'wpbean-product-gallery-slider-for-woocommerce')
					. ' ' . esc_html($developer) . '</span>';
			}
			$list_html .= '</li>';
		}
		$list_html .= '</ul>';

		$message = sprintf(
			/* translators: %s: WooCommerce hook name */
			_n(
				'The following plugin also hooks into <code>%s</code> — the same WooCommerce action our gallery uses to display on product pages. This can cause a duplicate gallery or prevent ours from rendering correctly:',
				'The following plugins also hook into <code>%s</code> — the same WooCommerce action our gallery uses to display on product pages. This can cause duplicate galleries or prevent ours from rendering correctly:',
				$count,
				'wpbean-product-gallery-slider-for-woocommerce'
			),
			$hook_name
		) . $list_html;

		$this->add_issue(
			'conflicting_gallery_plugins',
			'warning',
			_n(
				'Conflicting Gallery Plugin Detected',
				'Conflicting Gallery Plugins Detected',
				$count,
				'wpbean-product-gallery-slider-for-woocommerce'
			),
			$message,
			[
				__('WPBean Product Gallery already includes zoom, lightbox, video, and advanced gallery features — you do not need a separate gallery plugin.', 'wpbean-product-gallery-slider-for-woocommerce'),
				__('Go to <strong>Plugins → Installed Plugins</strong> and deactivate each plugin listed above.', 'wpbean-product-gallery-slider-for-woocommerce'),
				__('Visit a product page and confirm the gallery is displaying correctly without duplicates.', 'wpbean-product-gallery-slider-for-woocommerce'),
			]
		);
	}

	/**
	 * Curated list of WooCommerce gallery plugins known to hook into
	 * woocommerce_before_single_product_summary and conflict with our gallery.
	 *
	 * `detect` supports three sub-keys (all optional, any match triggers detection):
	 *   constants – PHP constants defined when the plugin is active
	 *   classes   – PHP class names registered by the plugin
	 *   slugs     – plugin basenames relative to WP_PLUGIN_DIR (dir/file.php)
	 *
	 * @return array<int, array{name: string, developer: string, detect: array}>
	 */
	private static function known_gallery_plugins(): array
	{
		return [
			[
				'name'      => 'YITH WooCommerce Zoom Magnifier',
				'developer' => 'YITH',
				'detect'    => [
					'constants' => ['YITH_WCMG_VERSION', 'YITH_WCMG_DIR'],
					'classes'   => ['YITH_WCMG'],
					'slugs'     => [
						'yith-woocommerce-zoom-magnifier/init.php',
						'yith-woocommerce-zoom-magnifier-premium/init.php',
					],
				],
			],
			[
				'name'      => 'WPC Product Gallery for WooCommerce',
				'developer' => 'WPClever',
				'detect'    => [
					'constants' => ['WPCPG_VERSION'],
					'classes'   => ['WPCleverWpcpg'],
					'slugs'     => ['wpc-product-gallery/wpc-product-gallery.php'],
				],
			],
			[
				'name'      => 'WooZoom – WooCommerce Product Gallery Zoom',
				'developer' => 'ThemeQuestor',
				'detect'    => [
					'constants' => ['WOOZOOM_VERSION'],
					'classes'   => ['WooZoom'],
					'slugs'     => ['woozoom/woozoom.php', 'woo-zoom/woo-zoom.php'],
				],
			],
			[
				'name'      => 'WooCommerce Additional Variation Images',
				'developer' => 'WooCommerce',
				'detect'    => [
					'constants' => ['WC_AVI_VERSION'],
					'classes'   => ['WC_Additional_Variation_Images'],
					'slugs'     => ['woocommerce-additional-variation-images/woocommerce-additional-variation-images.php'],
				],
			],
			[
				'name'      => 'Woo Product Slider and Gallery',
				'developer' => 'ShapedPlugin LLC',
				'detect'    => [
					'constants' => ['WPSP_VERSION', 'WPSPRO_VERSION'],
					'classes'   => ['WooProductSlider'],
					'slugs'     => [
						'woo-product-slider/woo-product-slider.php',
						'woo-product-slider-pro/woo-product-slider-pro.php',
					],
				],
			],
			[
				'name'      => 'Product Gallery Slider for WooCommerce',
				'developer' => 'PickPlugins',
				'detect'    => [
					'constants' => ['WC_PRODUCT_GALLERY_SLIDER_VERSION', 'PPWCPGS_VERSION'],
					'classes'   => [],
					'slugs'     => ['product-gallery-slider-for-woocommerce/product-gallery-slider-for-woocommerce.php'],
				],
			],
			[
				'name'      => 'WooCommerce Zoom Magnifier',
				'developer' => 'Sparkle Themes',
				'detect'    => [
					'constants' => ['SPARKLE_WC_ZOOM_VERSION'],
					'classes'   => ['Sparkle_WC_Zoom'],
					'slugs'     => ['woocommerce-zoom-magnifier/woocommerce-zoom-magnifier.php'],
				],
			],
			[
				'name'      => 'WooCommerce Product Image Gallery',
				'developer' => 'Themify',
				'detect'    => [
					'constants' => ['THEMIFY_WC_GALLERY_VERSION'],
					'classes'   => ['Themify_WC_Gallery'],
					'slugs'     => ['themify-wc-product-gallery/themify-wc-product-gallery.php'],
				],
			],
			[
				'name'      => 'Variation Images Gallery for WooCommerce',
				'developer' => 'WPdevart',
				'detect'    => [
					'constants' => ['WVG_VERSION'],
					'classes'   => ['Woo_Variation_Gallery'],
					'slugs'     => ['woo-variation-gallery/woo-variation-gallery.php'],
				],
			],
			[
				'name'      => 'ELEX WooCommerce Product Gallery',
				'developer' => 'ELEXtensions',
				'detect'    => [
					'constants' => ['ELEX_WCPG_VERSION'],
					'classes'   => ['ELEX_WC_Product_Gallery'],
					'slugs'     => ['elex-woocommerce-product-gallery/elex-woocommerce-product-gallery.php'],
				],
			],
		];
	}

	/**
	 * Return true when any detection criterion for a known plugin matches.
	 *
	 * @param array{constants?: string[], classes?: string[], slugs?: string[]} $detect
	 */
	private function is_known_plugin_active(array $detect): bool
	{
		foreach ($detect['constants'] ?? [] as $constant) {
			if (defined($constant)) {
				return true;
			}
		}
		foreach ($detect['classes'] ?? [] as $class) {
			if (class_exists($class, false)) {
				return true;
			}
		}
		foreach ($detect['slugs'] ?? [] as $slug) {
			if (is_plugin_active($slug)) {
				return true;
			}
		}
		return false;
	}

	/**
	 * Retrieve the source file path for a callable via Reflection.
	 *
	 * @param  callable $fn The callback to inspect.
	 * @return string|null  Absolute path, or null on failure.
	 */
	private static function reflect_callback_file($fn): ?string
	{
		try {
			if ($fn instanceof \Closure || (is_string($fn) && function_exists($fn))) {
				return (new \ReflectionFunction($fn))->getFileName() ?: null;
			}
			if (is_array($fn) && isset($fn[0], $fn[1])) {
				return (new \ReflectionMethod($fn[0], $fn[1]))->getFileName() ?: null;
			}
			if (is_string($fn) && strpos($fn, '::') !== false) {
				[$class, $method] = explode('::', $fn, 2);
				return (new \ReflectionMethod($class, $method))->getFileName() ?: null;
			}
		} catch (\ReflectionException $e) {
			// Silently ignore — this callback cannot be inspected.
		}
		return null;
	}

	/**
	 * Map an absolute file path back to the plugin it belongs to.
	 *
	 * @param  string $file Absolute path to a PHP file inside WP_PLUGIN_DIR.
	 * @return array{name: string, developer: string}|null
	 */
	private static function identify_plugin_from_file(string $file): ?array
	{
		$plugins_dir = wp_normalize_path(WP_PLUGIN_DIR);
		$file        = wp_normalize_path($file);

		if (strpos($file, $plugins_dir . '/') !== 0) {
			return null;
		}

		$relative   = substr($file, strlen($plugins_dir) + 1);
		$plugin_dir = strstr($relative, '/', true);

		if (! $plugin_dir) {
			return null;
		}

		// Exclude our own plugin directory.
		if ($plugin_dir === dirname(plugin_basename(WPBean_PGS_FILE))) {
			return null;
		}

		// Exclude WooCommerce core.
		if ($plugin_dir === 'woocommerce') {
			return null;
		}

		// Scan the plugin's root directory for a file with a Plugin Name header.
		$candidates = glob(WP_PLUGIN_DIR . '/' . $plugin_dir . '/*.php') ?: [];

		foreach (array_slice($candidates, 0, 10) as $candidate) {
			$data = get_plugin_data($candidate, false, false);
			if (! empty($data['Name'])) {
				return [
					'name'      => $data['Name'],
					'developer' => wp_strip_all_tags($data['Author'] ?? ''),
				];
			}
		}

		// Fallback: humanise the directory name.
		return [
			'name'      => ucwords(str_replace(['-', '_'], ' ', $plugin_dir)),
			'developer' => '',
		];
	}

	// ── Rendering ──────────────────────────────────────────────────────────────

	/**
	 * Output a single styled, dismissible admin notice.
	 *
	 * @param string $key   Unique notice key.
	 * @param array  $issue { type, title, message, steps }
	 */
	private function render_notice($key, array $issue)
	{
		$type    = esc_attr($issue['type']);
		$nonce   = wp_create_nonce(self::AJAX_ACTION);

		$allowed_html = [
			'strong' => [],
			'em'     => [],
			'code'   => [],
			'a'      => ['href' => [], 'target' => []],
			'ul'     => ['style' => []],
			'li'     => ['style' => []],
			'span'   => ['style' => []],
		];

?>
		<div class="notice notice-<?php echo esc_attr($type); ?> wpbean-pgs-compat-notice"
			data-key="<?php echo esc_attr($key); ?>"
			data-nonce="<?php echo esc_attr($nonce); ?>"
			style="padding:12px 16px 14px;border-left-color:<?php echo esc_attr($type === 'info' ? '#72aee6' : '#dba617'); ?>;">

			<p style="margin:0 0 5px;font-weight:700;font-size:13px;display:flex;align-items:center;gap:6px;">
				<span style="display:inline-flex;align-items:center;gap:5px;">
					<?php /* translators: %s: plugin-specific notice title */ ?>
					<?php echo wp_kses(
						sprintf(
							/* translators: %s: notice title */
							'<span style="opacity:.6;">&#128247; WPBean Product Image Zoom —</span> %s',
							$issue['title']
						),
						['span' => ['style' => []]]
					); ?>
				</span>
			</p>

			<p style="margin:0 0 8px;color:#3c434a;">
				<?php echo wp_kses($issue['message'], $allowed_html); ?>
			</p>

			<?php if (! empty($issue['steps'])) : ?>
				<p style="margin:0 0 4px;font-weight:600;font-size:12px;color:#3c434a;">
					<?php esc_html_e('How to fix:', 'wpbean-product-gallery-slider-for-woocommerce'); ?>
				</p>
				<ol style="margin:0 0 10px;padding-left:18px;color:#3c434a;">
					<?php foreach ($issue['steps'] as $step) : ?>
						<li style="margin-bottom:3px;font-size:13px;">
							<?php echo wp_kses($step, $allowed_html); ?>
						</li>
					<?php endforeach; ?>
				</ol>
			<?php endif; ?>

			<button type="button"
				class="wpbean-pgs-dismiss-btn"
				style="background:none;border:none;padding:0;cursor:pointer;color:#646970;font-size:12px;text-decoration:underline;">
				<?php esc_html_e('Dismiss this notice', 'wpbean-product-gallery-slider-for-woocommerce'); ?>
			</button>

		</div>
<?php
	}
}
