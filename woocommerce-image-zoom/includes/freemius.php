<?php

if ( !defined( 'ABSPATH' ) ) {
    exit;
}
/**
 * Freemius SDK.
 *
 * @since 1.0.0
 */
if ( !function_exists( 'wpbean_pgs_fs' ) ) {
    // Create a helper function for easy SDK access.
    function wpbean_pgs_fs() {
        global $wpbean_pgs_fs;
        if ( !isset( $wpbean_pgs_fs ) ) {
            // Include Freemius SDK.
            require_once dirname( __DIR__ ) . '/vendor/freemius/start.php';
            $wpbean_pgs_fs = fs_dynamic_init( array(
                'id'               => '30589',
                'slug'             => 'wpbean-product-gallery-slider-for-woocommerce',
                'premium_slug'     => 'product-gallery-for-woocommerce-premium',
                'type'             => 'plugin',
                'public_key'       => 'pk_2d01c7c81a3e57d2cf9151e0c6d2f',
                'is_premium'       => false,
                'premium_suffix'   => 'Pro',
                'has_addons'       => false,
                'has_paid_plans'   => true,
                'is_org_compliant' => true,
                'trial'            => array(
                    'days'               => 14,
                    'is_require_payment' => false,
                ),
                'menu'             => array(
                    'slug'       => 'wpbean-product-gallery-rules',
                    'first-path' => 'admin.php?page=wpbean-product-gallery-rules',
                    'support'    => false,
                ),
                'is_live'          => true,
            ) );
        }
        return $wpbean_pgs_fs;
    }

    // Init Freemius.
    wpbean_pgs_fs();
    // Signal that SDK was initiated.
    do_action( 'wpbean_pgs_fs_loaded' );
}