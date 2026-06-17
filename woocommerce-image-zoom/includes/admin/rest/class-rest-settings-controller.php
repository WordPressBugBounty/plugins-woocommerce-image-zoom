<?php
defined('ABSPATH') || exit;

class WPBean_PGS_REST_Settings_Controller extends WP_REST_Controller
{

    protected $namespace = 'wpbean-pgs/v1';
    protected $rest_base = 'settings';
    private $repository;

    public function __construct()
    {
        $this->repository = new WPBean_PGS_Rules_Repository();
    }

    public function register_routes()
    {
        // ── Collection ────────────────────────────────────────────────────────

        register_rest_route($this->namespace, '/' . $this->rest_base, [
            [
                'methods'             => WP_REST_Server::READABLE,
                'callback'            => [$this, 'get_items'],
                'permission_callback' => [$this, 'permissions_check'],
            ],
            [
                'methods'             => WP_REST_Server::CREATABLE,
                'callback'            => [$this, 'create_item'],
                'permission_callback' => [$this, 'permissions_check'],
            ],
        ]);

        // ── Single item ───────────────────────────────────────────────────────

        register_rest_route($this->namespace, '/' . $this->rest_base . '/(?P<id>\d+)', [
            [
                'methods'             => WP_REST_Server::READABLE,
                'callback'            => [$this, 'get_item'],
                'permission_callback' => [$this, 'permissions_check'],
            ],
            [
                'methods'             => WP_REST_Server::EDITABLE,
                'callback'            => [$this, 'update_item'],
                'permission_callback' => [$this, 'permissions_check'],
            ],
            [
                'methods'             => WP_REST_Server::DELETABLE,
                'callback'            => [$this, 'delete_item'],
                'permission_callback' => [$this, 'permissions_check'],
            ],
        ]);

        // ── Trash / Restore ───────────────────────────────────────────────────

        register_rest_route($this->namespace, '/' . $this->rest_base . '/(?P<id>\d+)/trash', [
            'methods'             => WP_REST_Server::CREATABLE,
            'callback'            => [$this, 'trash_item'],
            'permission_callback' => [$this, 'permissions_check'],
        ]);

        register_rest_route($this->namespace, '/' . $this->rest_base . '/(?P<id>\d+)/restore', [
            'methods'             => WP_REST_Server::CREATABLE,
            'callback'            => [$this, 'restore_item'],
            'permission_callback' => [$this, 'permissions_check'],
        ]);

        // ── Assignments: GET + PUT ────────────────────────────────────────────
        //
        // GET  /settings/:id/assignments
        //   → { categories: [term_id, ...], products: [post_id, ...] }
        //
        // PUT  /settings/:id/assignments
        //   body: { categories: [...], products: [...] }
        //   → Full replace (sync). Idempotent.

        register_rest_route($this->namespace, '/' . $this->rest_base . '/(?P<id>\d+)/assignments', [
            [
                'methods'             => WP_REST_Server::READABLE,
                'callback'            => [$this, 'get_assignments'],
                'permission_callback' => [$this, 'permissions_check'],
            ],
            [
                'methods'             => WP_REST_Server::EDITABLE,
                'callback'            => [$this, 'update_assignments'],
                'permission_callback' => [$this, 'permissions_check'],
            ],
        ]);

        // ── WooCommerce data helpers ──────────────────────────────────────────
        //
        // These power the category tree and product search in FormSettingsPanel.
        //
        // GET /settings/wc/categories
        //   → Full WooCommerce product_cat tree (id, name, parent, count)
        //
        // GET /settings/wc/products?search=shirt&page=1&per_page=20
        //   → Paginated product list { items: [{id, name, sku}], total }

        register_rest_route($this->namespace, '/' . $this->rest_base . '/wc/categories', [
            'methods'             => WP_REST_Server::READABLE,
            'callback'            => [$this, 'get_wc_categories'],
            'permission_callback' => [$this, 'permissions_check'],
        ]);

        register_rest_route($this->namespace, '/' . $this->rest_base . '/wc/products', [
            'methods'             => WP_REST_Server::READABLE,
            'callback'            => [$this, 'search_wc_products'],
            'permission_callback' => [$this, 'permissions_check'],
        ]);
    }

    public function permissions_check()
    {
        return current_user_can('manage_woocommerce');
    }

    /*--------------------------------------------------------------
    # Settings CRUD
    --------------------------------------------------------------*/

    public function get_items($request)
    {
        $data = $this->repository->get_settings([
            'page'     => $request['page']     ? absint($request['page'])     : 1,
            'per_page' => $request['per_page'] ? absint($request['per_page']) : 20,
            'search'   => sanitize_text_field($request['search'] ?? ''),
            'status'   => sanitize_key($request['status'] ?? ''),
        ]);

        $data['items'] = array_map(function ($item) {
            $config = is_array($item['config'] ?? null) ? $item['config'] : [];
            $item['gallery_type'] = $config['galleryType'] ?? 'thumbnail';
            unset($item['config']);
            return $item;
        }, $data['items'] ?? []);

        $is_premium = wpbean_pgs_fs()->is_paying_or_trial();
        $data['free_tier_limit_reached'] = ! $is_premium && $this->repository->count_non_trash() >= 1;

        return rest_ensure_response($data);
    }

    public function get_item($request)
    {
        $setting = $this->repository->get($request['id']);

        if (! $setting) {
            return new WP_Error('not_found', __('Setting not found', 'wpbean-product-gallery-slider-for-woocommerce'), ['status' => 404]);
        }

        return rest_ensure_response($setting);
    }

    public function create_item($request)
    {
        if (! wpbean_pgs_fs()->is_paying_or_trial() && $this->repository->count_non_trash() >= 1) {
            return new WP_Error(
                'free_tier_limit',
                __('Free plan allows only 1 gallery rule. Please upgrade to Pro for unlimited rules.', 'wpbean-product-gallery-slider-for-woocommerce'),
                ['status' => 403]
            );
        }

        $id = $this->repository->create([
            'title'  => $request['title'],
            'status' => $request['status'],
            'config' => $request['config'],
        ]);

        return rest_ensure_response(['id' => $id]);
    }

    public function update_item($request)
    {
        $fields = [];

        if (isset($request['title']))  $fields['title']  = sanitize_text_field($request['title']);
        if (isset($request['status'])) $fields['status'] = sanitize_key($request['status']);
        if (isset($request['config'])) $fields['config'] = $request['config'];

        if (empty($fields)) {
            return new WP_Error('no_fields', __('No fields to update.', 'wpbean-product-gallery-slider-for-woocommerce'), ['status' => 400]);
        }

        $this->repository->update($request['id'], $fields);

        return rest_ensure_response(['updated' => true]);
    }

    public function trash_item($request)
    {
        $setting = $this->repository->get($request['id']);

        if (! $setting) {
            return new WP_Error('not_found', __('Setting not found', 'wpbean-product-gallery-slider-for-woocommerce'), ['status' => 404]);
        }

        if ($setting['status'] === 'trash') {
            return rest_ensure_response(['trashed' => true]);
        }

        $this->repository->update($request['id'], ['status' => 'trash']);

        return rest_ensure_response(['trashed' => true]);
    }

    public function restore_item($request)
    {
        $setting = $this->repository->get($request['id']);

        if (! $setting) {
            return new WP_Error('not_found', __('Setting not found', 'wpbean-product-gallery-slider-for-woocommerce'), ['status' => 404]);
        }

        if ($setting['status'] !== 'trash') {
            return new WP_Error('not_trashed', __('Setting is not in trash.', 'wpbean-product-gallery-slider-for-woocommerce'), ['status' => 400]);
        }

        $this->repository->update($request['id'], ['status' => 'draft']);

        return rest_ensure_response(['restored' => true]);
    }

    public function delete_item($request)
    {
        $this->repository->delete($request['id']);

        return rest_ensure_response(['deleted' => true]);
    }

    /*--------------------------------------------------------------
    # ASSIGNMENTS
    --------------------------------------------------------------*/

    /**
     * GET /settings/:id/assignments
     */
    public function get_assignments($request)
    {
        $setting = $this->repository->get($request['id']);

        if (! $setting) {
            return new WP_Error('not_found', __('Setting not found', 'wpbean-product-gallery-slider-for-woocommerce'), ['status' => 404]);
        }

        $assignments = $this->repository->get_assignments($request['id']);

        return rest_ensure_response($assignments);
    }

    /**
     * PUT /settings/:id/assignments
     *
     * Body: { categories: [int, ...], products: [int, ...] }
     * Full replace — missing keys default to empty array (clears that type).
     */
    public function update_assignments($request)
    {
        $setting = $this->repository->get($request['id']);

        if (! $setting) {
            return new WP_Error('not_found', __('Setting not found', 'wpbean-product-gallery-slider-for-woocommerce'), ['status' => 404]);
        }

        $categories = isset($request['categories']) ? (array) $request['categories'] : [];
        $products   = isset($request['products'])   ? (array) $request['products']   : [];
        $apply_to   = isset($request['apply_to'])   ? sanitize_key($request['apply_to']) : 'all';

        $this->repository->sync_assignments(
            absint($request['id']),
            $categories,
            $products,
            $apply_to
        );

        return rest_ensure_response([
            'updated' => true,
            'assignments' => $this->repository->get_assignments($request['id']),
        ]);
    }

    /*--------------------------------------------------------------
    # WC DATA HELPERS
    --------------------------------------------------------------*/

    /**
     * GET /settings/wc/categories
     *
     * Returns all WooCommerce product categories as a flat list
     * with parent references so the UI can build a tree.
     * { id, name, slug, parent, count }
     */
    public function get_wc_categories($request)
    {
        if (! taxonomy_exists('product_cat')) {
            return rest_ensure_response([]);
        }

        $terms = get_terms([
            'taxonomy'   => 'product_cat',
            'hide_empty' => false,
            'orderby'    => 'name',
            'order'      => 'ASC',
        ]);

        if (is_wp_error($terms)) {
            return rest_ensure_response([]);
        }

        $result = array_map(function ($term) {
            return [
                'id'     => $term->term_id,
                'name'   => $term->name,
                'slug'   => $term->slug,
                'parent' => $term->parent,
                'count'  => $term->count,
            ];
        }, $terms);

        return rest_ensure_response($result);
    }

    /**
     * GET /settings/wc/products?search=&page=1&per_page=20
     * GET /settings/wc/products?ids=1,2,3
     *
     * Two modes:
     *   ?ids=   Fetch specific products by exact post IDs (used on page load to
     *           resolve saved assignment IDs into {id, name, sku} objects).
     *           Returns all matching products regardless of per_page.
     *   ?search= Full-text search across title/SKU (used by the search dropdown).
     *
     * Returns { items: [{id, name, sku}], total }
     */
    public function search_wc_products($request)
    {
        // ── ID lookup mode ────────────────────────────────────────────────────
        $ids_param = $request['ids'] ?? '';

        if ($ids_param) {
            $ids = array_filter(
                array_map('absint', explode(',', $ids_param))
            );

            if (empty($ids)) {
                return rest_ensure_response(['items' => [], 'total' => 0]);
            }

            $args = [
                'post_type'      => 'product',
                'post_status'    => ['publish', 'private'],
                'posts_per_page' => count($ids),
                'post__in'       => $ids,
                'orderby'        => 'post__in', // preserve order
                'fields'         => 'ids',
            ];

            $query = new WP_Query($args);

            $items = array_map(function ($post_id) {
                $sku   = get_post_meta($post_id, '_sku', true);
                $image = get_the_post_thumbnail_url($post_id, 'thumbnail');
                return [
                    'id'    => $post_id,
                    'name'  => html_entity_decode(get_the_title($post_id), ENT_QUOTES | ENT_HTML5, 'UTF-8'),
                    'sku'   => $sku ?: '',
                    'image' => $image ?: '',
                ];
            }, $query->posts);

            return rest_ensure_response([
                'items' => $items,
                'total' => count($items),
            ]);
        }

        // ── Search mode ───────────────────────────────────────────────────────
        $search   = sanitize_text_field($request['search'] ?? '');
        $page     = max(1, absint($request['page'] ?? 1));
        $per_page = min(50, max(1, absint($request['per_page'] ?? 20)));

        $args = [
            'post_type'      => 'product',
            'post_status'    => 'publish',
            'posts_per_page' => $per_page,
            'paged'          => $page,
            'orderby'        => 'title',
            'order'          => 'ASC',
            'fields'         => 'ids',
        ];

        if ($search) {
            $args['s'] = $search;
        }

        $query = new WP_Query($args);

        $items = array_map(function ($post_id) {
            $sku   = get_post_meta($post_id, '_sku', true);
            $image = get_the_post_thumbnail_url($post_id, 'thumbnail');
            return [
                'id'    => $post_id,
                'name'  => html_entity_decode(get_the_title($post_id), ENT_QUOTES | ENT_HTML5, 'UTF-8'),
                'sku'   => $sku ?: '',
                'image' => $image ?: '',
            ];
        }, $query->posts);

        return rest_ensure_response([
            'items' => $items,
            'total' => (int) $query->found_posts,
        ]);
    }
}
