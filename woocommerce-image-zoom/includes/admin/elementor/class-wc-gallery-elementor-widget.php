<?php

if (! defined('ABSPATH')) exit;

/**
 * Registers the WPBean Product Gallery widget for Elementor.
 *
 * The actual widget class lives in class-wc-gallery-elementor-widget-inner.php and
 * is required inside the callback so it is only loaded after Elementor has
 * fully initialised (avoiding "Class not found" fatals at file-include time).
 */
class WPBean_PGS_Elementor_Widget
{

	public function __construct()
	{
		add_action('elementor/widgets/register', [$this, 'register_widget']);
	}

	public function register_widget($widgets_manager)
	{
		if (!class_exists('\Elementor\Widget_Base')) {
			return;
		}

		require_once __DIR__ . '/class-wc-gallery-elementor-widget-inner.php';

		$widgets_manager->register(new WPBean_PGS_Product_Gallery_Widget());
	}
}
