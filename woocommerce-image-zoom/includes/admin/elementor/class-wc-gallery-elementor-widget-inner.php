<?php

if (! defined('ABSPATH')) exit;

/**
 * WPBean Product Gallery — Elementor widget class.
 *
 * Loaded only from WPBean_PGS_Elementor_Widget::register_widget(), which runs
 * on the elementor/widgets/register action. At that point \Elementor\Widget_Base
 * is guaranteed to exist, so extending it is safe.
 *
 * The "Product" control lets editors pin the widget to a specific product.
 * When left empty the widget falls back to the global $product (single product
 * pages) — mirroring the behaviour of the [wpbean_product_gallery] shortcode.
 */
class WPBean_PGS_Product_Gallery_Widget extends \Elementor\Widget_Base
{

	public function get_name()
	{
		return 'wpbean-product-gallery';
	}

	public function get_title()
	{
		return esc_html__('WPBean Product Gallery', 'wpbean-product-gallery-slider-for-woocommerce');
	}

	public function get_icon()
	{
		return 'eicon-product-images';
	}

	public function get_categories()
	{
		return ['woocommerce-elements'];
	}

	public function get_keywords()
	{
		return ['woocommerce', 'product', 'gallery', 'zoom', 'image', 'wpbean'];
	}

	protected function register_controls()
	{
		$this->start_controls_section(
			'section_product',
			[
				'label' => esc_html__('Product Gallery', 'wpbean-product-gallery-slider-for-woocommerce'),
				'tab'   => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);

		$this->add_control(
			'product_id',
			[
				'label'       => esc_html__('Product', 'wpbean-product-gallery-slider-for-woocommerce'),
				'type'        => \Elementor\Controls_Manager::SELECT2,
				'options'     => $this->get_products_options(),
				'default'     => '',
				'label_block' => true,
				'description' => esc_html__('Leave empty to display the current product\'s gallery on a single product page.', 'wpbean-product-gallery-slider-for-woocommerce'),
			]
		);

		$this->end_controls_section();
	}

	protected function render()
	{
		$settings   = $this->get_settings_for_display();
		$product_id = absint($settings['product_id'] ?? 0);

		if (\Elementor\Plugin::$instance->editor->is_edit_mode()) {
			$this->render_placeholder($product_id);
			return;
		}

		global $product;
		$restore_product = $product;

		if ($product_id) {
			$product = wc_get_product($product_id); // phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound
		} elseif (! is_a($product, 'WC_Product')) {
			$product = wc_get_product(get_the_ID()); // phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound
		}

		if (! is_a($product, 'WC_Product')) {
			$product = $restore_product; // phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound
			return;
		}

		$this->maybe_enqueue_assets();

		WPBean_PGS_WC_Gallery_Loader::suppress_hook_render($product->get_id());
		(new WPBean_PGS_WC_Gallery_Loader())->render_custom_gallery(true);

		$product = $restore_product; // phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound
	}

	/**
	 * Returns product options for the SELECT2 control.
	 * Fetches up to 200 published products ordered by title.
	 */
	private function get_products_options(): array
	{
		$options = ['' => esc_html__('— Current Product —', 'wpbean-product-gallery-slider-for-woocommerce')];

		$products = wc_get_products([
			'limit'   => 200,
			'status'  => 'publish',
			'orderby' => 'title',
			'order'   => 'ASC',
			'return'  => 'objects',
		]);

		foreach ($products as $wc_product) {
			$options[$wc_product->get_id()] = $wc_product->get_name();
		}

		return $options;
	}

	/**
	 * Enqueues gallery scripts and styles when not already loaded (e.g. outside
	 * single product pages where the frontend class does not enqueue them).
	 */
	private function maybe_enqueue_assets(): void
	{
		if (wp_script_is('wpbean-pgs-wc-gallery-script', 'enqueued')) {
			return;
		}

		$asset_file = plugin_dir_path(__FILE__) . '../../frontend/assets/build/wpbean-wc-gallery.asset.php';

		if (! file_exists($asset_file)) {
			return;
		}

		$asset = include $asset_file;

		wp_enqueue_script(
			'wpbean-pgs-wc-gallery-script',
			plugins_url('../../frontend/assets/build/wpbean-wc-gallery.js', __FILE__),
			$asset['dependencies'],
			$asset['version'],
			['in_footer' => true]
		);

		wp_enqueue_style(
			'wpbean-pgs-wc-gallery-style',
			plugins_url('../../frontend/assets/build/style-wpbean-wc-gallery.css', __FILE__),
			[],
			$asset['version']
		);
	}

	private function render_placeholder(int $product_id = 0)
	{
		$product_name = '';

		if ($product_id) {
			$wc_product   = wc_get_product($product_id);
			$product_name = $wc_product ? $wc_product->get_name() : sprintf('#%d', $product_id);
		}
?>
		<div style="
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 12px;
			padding: 32px 24px;
			background: #f8f9fa;
			border: 2px dashed #c3c4c7;
			border-radius: 6px;
			text-align: center;
			font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
		">
			<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#a0a5aa" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
				<rect x="3" y="3" width="18" height="18" rx="2" />
				<circle cx="8.5" cy="8.5" r="1.5" />
				<path d="M21 15l-5-5L5 21" />
				<circle cx="17" cy="10" r="3" />
				<line x1="19.5" y1="12.5" x2="22" y2="15" />
			</svg>
			<p style="margin: 0; font-size: 14px; font-weight: 600; color: #3c434a;">
				<?php esc_html_e('WPBean Product Gallery', 'wpbean-product-gallery-slider-for-woocommerce'); ?>
			</p>
			<?php if ($product_name) : ?>
				<p style="margin: 0; font-size: 13px; color: #2271b1; font-weight: 500;">
					<?php echo esc_html(
						sprintf(
							/* translators: %s: product name */
							__('Product: %s', 'wpbean-product-gallery-slider-for-woocommerce'),
							$product_name
						)
					); ?>
				</p>
			<?php else : ?>
				<p style="margin: 0; font-size: 13px; color: #646970; max-width: 280px; line-height: 1.5;">
					<?php esc_html_e('Displays the current product\'s gallery on single product pages. Select a product above to pin it to a specific product.', 'wpbean-product-gallery-slider-for-woocommerce'); ?>
				</p>
			<?php endif; ?>
			<p style="margin: 0; font-size: 12px; color: #8c8f94;">
				<?php esc_html_e('To manage gallery rules go to: Dashboard → Product Gallery → Rules.', 'wpbean-product-gallery-slider-for-woocommerce'); ?>
			</p>
		</div>
<?php
	}
}
