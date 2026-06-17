<?php

if (! defined('ABSPATH')) exit;

/**
 * Theme compatibility layer for the custom product gallery.
 *
 * Many popular themes replace woocommerce_show_product_images with their own
 * function, or wrap the gallery column in theme-specific markup that conflicts
 * with our container layout. This class detects the active theme and surgically
 * removes or adjusts those hooks before the gallery renders.
 *
 * Parent vs. child theme handling
 * ────────────────────────────────
 * get_template()  → parent theme slug (unchanged when a child theme is active)
 * get_stylesheet() → active theme slug (equals parent when no child is active)
 *
 * The lookup runs twice:
 *   1. Parent slug  — covers standard installs and all child themes of that
 *                     parent (because the parent's hooks are always registered).
 *   2. Child slug   — only runs when a child theme is active AND has its own
 *                     entry in the handler map (e.g. a premium child theme that
 *                     registers additional hooks on top of the parent).
 *
 * Both handlers are independent; either may be null (no-op).
 *
 * Timing: registered at `wp` priority 5, before the template_include-based
 * loader hook (PHP_INT_MAX), so restored hooks are in place when the loader
 * takes over.
 *
 * Extending: register custom handlers via the filter
 *   `WPBean_PGS_Theme_Compat_handlers`
 *   which receives an associative array of theme-slug => callable|null.
 */
class WPBean_PGS_Theme_Compat
{

    /** Parent-theme directory slug — get_template(). */
    private string $parent;

    /**
     * Active-theme directory slug — get_stylesheet().
     * Identical to $parent when no child theme is active.
     */
    private string $active;

    public function __construct()
    {
        $this->parent = get_template();
        $this->active = get_stylesheet();
        add_action('wp', [$this, 'apply'], 5);
    }

    /**
     * Dispatch compat routines for the active theme on single-product pages.
     *
     * The parent handler always runs first (it covers both regular installs and
     * any child theme). The child handler runs afterwards only when a child
     * theme is active and has its own map entry — it should only remove/add
     * hooks that the child theme itself registers on top of the parent.
     */
    public function apply(): void
    {
        if (! is_product()) {
            return;
        }

        /**
         * Filterable map of theme-slug => callable|null.
         *
         * Keys may be parent-theme slugs OR specific child-theme slugs. A null
         * entry means "known compatible — no action needed." Any callable is
         * invoked to apply the necessary hook adjustments.
         *
         * Example — add compat for a custom child theme that registers its own
         * gallery hook on top of its Flatsome parent:
         *
         *   add_filter('WPBean_PGS_Theme_Compat_handlers', function ($handlers) {
         *       $handlers['my-flatsome-child'] = function () {
         *           remove_action('woocommerce_before_single_product_summary', 'my_child_product_images', 20);
         *           add_action('woocommerce_before_single_product_summary', 'woocommerce_show_product_images', 20);
         *       };
         *       return $handlers;
         *   });
         *
         * @param array<string, callable|null> $handlers
         */
        $handlers = apply_filters('WPBean_PGS_Theme_Compat_handlers', [
            // ── Themes that replace the default gallery with their own function ──

            'woodmart'        => [$this, 'compat_woodmart'],
            'porto'           => [$this, 'compat_porto'],
            'xstore'          => [$this, 'compat_xstore'],
            'avada'           => [$this, 'compat_avada'],

            // ── Themes that add wrapper markup around the gallery column ─────────

            'woostify'        => [$this, 'compat_woostify'],
            'flatsome'        => [$this, 'compat_flatsome'],
            'oceanwp'         => [$this, 'compat_oceanwp'],
            'astra'           => [$this, 'compat_astra'],

            // ── Themes known to be compatible — no adjustment needed ─────────────

            'storefront'      => null,
            'generatepress'   => null,
            'kadence'         => null,
            'neve'            => null,
            'blocksy'         => null,
            // Builder context (Elementor, Divi, Beaver Builder) is handled by
            // the loader via template-path detection — no theme-level compat needed.
            'hello-elementor' => null,
            'Divi'            => null,
        ]);

        // 1. Parent-theme handler — always runs; covers all child themes of
        //    that parent because the parent's hooks are always in play.
        $this->run($handlers[$this->parent] ?? null);

        // 2. Child-theme handler — only runs when a child theme is active AND
        //    has its own dedicated entry (different slug from parent).
        if ($this->active !== $this->parent) {
            $this->run($handlers[$this->active] ?? null);
        }
    }

    /**
     * Invoke a handler if it is callable.
     *
     * @param callable|null $handler
     */
    private function run($handler): void
    {
        if (is_callable($handler)) {
            $handler();
        }
    }

    // ── Per-theme compat routines ─────────────────────────────────────────────

    /**
     * Woodmart: removes the theme's custom gallery function.
     */
    private function compat_woodmart(): void
    {
        remove_action('woocommerce_before_single_product_summary', 'woodmart_woocommerce_show_product_images', 20);
    }

    /**
     * Porto: removes the theme's custom gallery function.
     */
    private function compat_porto(): void
    {
        remove_action('woocommerce_before_single_product_summary', 'porto_woocommerce_show_product_images', 20);
    }

    /**
     * XStore (8theme): removes the theme's custom gallery function.
     */
    private function compat_xstore(): void
    {
        remove_action('woocommerce_before_single_product_summary', 'etheme_woocommerce_show_product_images', 20);
    }

    /**
     * Avada: removes the theme's gallery static class method.
     */
    private function compat_avada(): void
    {
        if (! class_exists('Avada_WooCommerce')) {
            return;
        }
        remove_action('woocommerce_before_single_product_summary', ['Avada_WooCommerce', 'product_images'], 20);
    }

    /**
     * Woostify: removes all theme-specific gallery components.
     * The theme re-registers woocommerce_show_product_images at priority 21
     * instead of the standard 20, so that copy must also be removed.
     */
    private function compat_woostify(): void
    {
        remove_action('woocommerce_before_single_product_summary', 'woocommerce_show_product_images', 21);
        remove_action('woocommerce_before_single_product_summary', 'woostify_single_product_gallery_image_slide', 30);
        remove_action('woocommerce_before_single_product_summary', 'woostify_single_product_group_buttons', 35);
        remove_action('woocommerce_before_single_product_summary', 'woostify_single_product_gallery_thumb_slide', 40);
    }

    /**
     * Flatsome: adds open/close wrapper hooks around the product image column
     * that create an extra flex layer conflicting with our container sizing.
     */
    private function compat_flatsome(): void
    {
        remove_action('woocommerce_before_single_product_image_summary', 'flatsome_product_images_open', 10);
        remove_action('woocommerce_after_single_product_image_summary', 'flatsome_product_images_close', 10);
    }

    /**
     * OceanWP: adds wrapper <div> hooks around the product image column.
     */
    private function compat_oceanwp(): void
    {
        remove_action('woocommerce_before_single_product_image_summary', 'oceanwp_woo_product_images_open_div', 10);
        remove_action('woocommerce_after_single_product_image_summary', 'oceanwp_woo_product_images_close_div', 10);
    }

    /**
     * Astra: adds opening and closing section wrappers around the gallery column
     * via its singleton WooCommerce class.
     */
    private function compat_astra(): void
    {
        if (! class_exists('Astra_Woocommerce') || ! method_exists('Astra_Woocommerce', 'get_instance')) {
            return;
        }
        $instance = Astra_Woocommerce::get_instance();
        remove_action('woocommerce_before_single_product_image_summary', [$instance, 'before_product_image_section'], 10);
        remove_action('woocommerce_after_single_product_image_summary', [$instance, 'after_product_image_section'], 10);
    }
}
