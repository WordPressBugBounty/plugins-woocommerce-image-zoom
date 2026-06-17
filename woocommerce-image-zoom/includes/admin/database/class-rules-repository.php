<?php
defined('ABSPATH') || exit;

class WPBean_PGS_Rules_Repository
{

    private $table;
    private $assignments_table;
    private $cache_group                  = 'WPBean_PGS_rules';
    private $cache_version_key            = 'WPBean_PGS_rules_list_version';
    private $frontend_cache_version_key   = 'WPBean_PGS_frontend_config_version';

    private const VALID_STATUSES  = ['draft', 'publish', 'trash'];
    private const VALID_APPLY_TO  = ['all', 'selected'];

    public function __construct()
    {
        $this->table             = WPBean_PGS_Schema::table_name();
        $this->assignments_table = WPBean_PGS_Schema::assignments_table_name();
    }

    /*--------------------------------------------------------------
    # CREATE
    --------------------------------------------------------------*/
    public function create($data)
    {
        global $wpdb;

        $config = $this->sanitize_config($data['config']);

        $wpdb->insert( // phpcs:ignore WordPress.DB.DirectDatabaseQuery.DirectQuery
            $this->table,
            [
                'title'          => sanitize_text_field($data['title']),
                'status'         => $this->sanitize_status($data['status'] ?? 'draft'),
                'apply_to'       => $this->sanitize_apply_to($data['apply_to'] ?? 'all'),
                'config'         => wp_json_encode($config),
                'config_version' => 1,
                'created_at'     => current_time('mysql'),
                'updated_at'     => current_time('mysql'),
            ],
            ['%s', '%s', '%s', '%s', '%d', '%s', '%s']
        );

        $id = $wpdb->insert_id;
        $this->flush_list_cache();
        $this->flush_frontend_config_cache();

        return $id;
    }

    /*--------------------------------------------------------------
    # READ SINGLE
    --------------------------------------------------------------*/
    public function get($id)
    {
        global $wpdb;

        $id        = absint($id);
        $cache_key = 'settings_' . $id;

        $cached = wp_cache_get($cache_key, $this->cache_group);
        if (false !== $cached) {
            return $cached;
        }

        $row = $wpdb->get_row( // phpcs:ignore WordPress.DB.DirectDatabaseQuery.DirectQuery
            $wpdb->prepare(
                "SELECT * FROM {$this->table} WHERE id = %d", // phpcs:ignore WordPress.DB.PreparedSQL.InterpolatedNotPrepared
                $id
            ),
            ARRAY_A
        );

        if ($row) {
            $row['config'] = json_decode($row['config'], true);
            wp_cache_set($cache_key, $row, $this->cache_group);
        }

        return $row;
    }

    /*--------------------------------------------------------------
    # UPDATE
    --------------------------------------------------------------*/
    public function update($id, $data)
    {
        global $wpdb;

        $id      = absint($id);
        $fields  = [];
        $formats = [];

        if (array_key_exists('title', $data)) {
            $fields['title'] = sanitize_text_field($data['title']);
            $formats[]       = '%s';
        }

        if (array_key_exists('status', $data)) {
            $fields['status'] = $this->sanitize_status($data['status']);
            $formats[]        = '%s';
        }

        if (array_key_exists('apply_to', $data)) {
            $fields['apply_to'] = $this->sanitize_apply_to($data['apply_to']);
            $formats[]          = '%s';
        }

        if (array_key_exists('config', $data)) {
            $fields['config'] = wp_json_encode($this->sanitize_config($data['config']));
            $formats[]        = '%s';
        }

        if (empty($fields)) {
            return 0;
        }

        $fields['updated_at'] = current_time('mysql');
        $formats[]            = '%s';

        $updated = $wpdb->update( // phpcs:ignore WordPress.DB.DirectDatabaseQuery.DirectQuery
            $this->table,
            $fields,
            ['id' => $id],
            $formats,
            ['%d']
        );

        wp_cache_delete('settings_' . $id, $this->cache_group);
        $this->flush_list_cache();
        $this->flush_frontend_config_cache();

        return $updated;
    }

    /*--------------------------------------------------------------
    # DELETE
    --------------------------------------------------------------*/
    public function delete($id)
    {
        global $wpdb;

        $id = absint($id);

        // Cascade: remove all assignments when setting is hard-deleted
        $this->delete_all_assignments($id);

        $deleted = $wpdb->delete( // phpcs:ignore WordPress.DB.DirectDatabaseQuery.DirectQuery
            $this->table,
            ['id' => $id],
            ['%d']
        );

        wp_cache_delete('settings_' . $id, $this->cache_group);
        $this->flush_list_cache();

        return $deleted;
    }

    /*--------------------------------------------------------------
    # FRONTEND — resolve active config for a product
    #
    # Priority (highest id wins):
    #   1. A 'selected' rule that explicitly assigns this product/category
    #   2. An 'all' rule (applies to every product)
    #
    # Returns: [ 'rule_id' => int, 'config' => array ]
    #   rule_id = 0 means no published rule matched.
    #
    # Cache is keyed with a version counter so that saving any rule
    # (via create/update/sync_assignments) automatically invalidates
    # all frontend config entries — no manual Redis flush needed.
    --------------------------------------------------------------*/
    public function get_active_config_for_product(int $product_id): array
    {
        global $wpdb;

        // Version-keyed cache: incrementing the version makes every
        // per-product cache key stale without touching each key individually.
        $version   = (int) wp_cache_get($this->frontend_cache_version_key, $this->cache_group);
        $cache_key = 'frontend_config_v' . $version . '_' . $product_id;

        $cached = wp_cache_get($cache_key, $this->cache_group);
        if (false !== $cached) {
            return $cached;
        }

        $cat_ids = wc_get_product_term_ids($product_id, 'product_cat');

        // Build the IN clause for category IDs (safe — all are ints)
        $cat_ids_safe = array_map('absint', (array) $cat_ids);
        $cat_in       = empty($cat_ids_safe)
            ? '(0)'   // no categories — IN clause never matches
            : '(' . implode(',', $cat_ids_safe) . ')';

        // phpcs:disable WordPress.DB.PreparedSQL.InterpolatedNotPrepared,WordPress.DB.DirectDatabaseQuery.DirectQuery,PluginCheck.Security.DirectDB.UnescapedDBParameter -- table names from $wpdb->prefix; $cat_in built from absint()
        $row = $wpdb->get_row(
            $wpdb->prepare(
                "SELECT s.id, s.config
                 FROM {$this->table} s
                 WHERE s.status = 'publish'
                   AND (
                       s.apply_to = 'all'
                       OR (
                           s.apply_to = 'selected'
                           AND EXISTS (
                               SELECT 1 FROM {$this->assignments_table} a
                               WHERE a.settings_id = s.id
                                 AND (
                                     (a.object_type = 'product'  AND a.object_id = %d)
                                     OR (a.object_type = 'category' AND a.object_id IN {$cat_in})
                                 )
                           )
                       )
                   )
                 ORDER BY s.id DESC
                 LIMIT 1",
                $product_id
            ),
            ARRAY_A
        );
        // phpcs:enable WordPress.DB.PreparedSQL.InterpolatedNotPrepared,WordPress.DB.DirectDatabaseQuery.DirectQuery,PluginCheck.Security.DirectDB.UnescapedDBParameter

        $result = [
            'rule_id' => $row ? (int) $row['id'] : 0,
            'config'  => ($row && $row['config']) ? (json_decode($row['config'], true) ?? []) : [],
        ];

        wp_cache_set($cache_key, $result, $this->cache_group);

        return $result;
    }

    /*--------------------------------------------------------------
    # COUNT
    --------------------------------------------------------------*/
    public function count_non_trash(): int
    {
        global $wpdb;
        return (int) $wpdb->get_var( // phpcs:ignore WordPress.DB.DirectDatabaseQuery.DirectQuery,WordPress.DB.DirectDatabaseQuery.NoCaching
            "SELECT COUNT(id) FROM {$this->table} WHERE status != 'trash'" // phpcs:ignore WordPress.DB.PreparedSQL.InterpolatedNotPrepared
        );
    }

    /*--------------------------------------------------------------
    # LIST
    --------------------------------------------------------------*/
    public function get_settings($args = [])
    {
        global $wpdb;

        $defaults = [
            'page'     => 1,
            'per_page' => 20,
            'search'   => '',
            'status'   => '',
        ];

        $args = wp_parse_args($args, $defaults);

        $version = wp_cache_get($this->cache_version_key, $this->cache_group);
        if (false === $version) {
            $version = 1;
            wp_cache_set($this->cache_version_key, $version, $this->cache_group);
        }

        $cache_key = 'settings_v' . $version . '_' . md5(wp_json_encode($args));
        $cached    = wp_cache_get($cache_key, $this->cache_group);

        if (false !== $cached) {
            return $cached;
        }

        $where  = 'WHERE 1=1';
        $params = [];

        if ($args['search']) {
            $where   .= ' AND title LIKE %s';
            $params[] = '%' . $wpdb->esc_like($args['search']) . '%';
        }

        if ($args['status']) {
            $where   .= ' AND status = %s';
            $params[] = sanitize_key($args['status']);
        } else {
            $where .= " AND status != 'trash'";
        }

        $limit  = absint($args['per_page']);
        $offset = (absint($args['page']) - 1) * $limit;

        $count_query = "SELECT COUNT(id) FROM {$this->table} {$where}";
        $total       = (int) $wpdb->get_var($wpdb->prepare($count_query, $params)); // phpcs:ignore WordPress.DB.PreparedSQL.NotPrepared,WordPress.DB.DirectDatabaseQuery.DirectQuery,PluginCheck.Security.DirectDB.UnescapedDBParameter

        $items_query = "
            SELECT id, title, status, apply_to, created_at, config
            FROM {$this->table}
            {$where}
            ORDER BY created_at DESC
            LIMIT %d OFFSET %d
        ";

        $items = $wpdb->get_results( // phpcs:ignore WordPress.DB.DirectDatabaseQuery.DirectQuery,PluginCheck.Security.DirectDB.UnescapedDBParameter
            $wpdb->prepare($items_query, array_merge($params, [$limit, $offset])), // phpcs:ignore WordPress.DB.PreparedSQL.NotPrepared
            ARRAY_A
        );

        $items = array_map(function ($row) {
            $row['config'] = json_decode($row['config'] ?? '{}', true) ?: [];
            return $row;
        }, $items ?: []);

        $result = ['items' => $items, 'total' => $total];

        wp_cache_set($cache_key, $result, $this->cache_group);

        return $result;
    }

    /*--------------------------------------------------------------
    # ASSIGNMENTS — GET
    #
    # Returns all assignments for a setting split into two arrays:
    # { categories: [term_id, ...], products: [post_id, ...] }
    --------------------------------------------------------------*/
    public function get_assignments($settings_id)
    {
        global $wpdb;

        $settings_id   = absint($settings_id);
        $cache_key = 'assignments_' . $settings_id;

        $cached = wp_cache_get($cache_key, $this->cache_group);
        if (false !== $cached) {
            return $cached;
        }

        // phpcs:disable WordPress.DB.PreparedSQL.InterpolatedNotPrepared,WordPress.DB.DirectDatabaseQuery.DirectQuery,PluginCheck.Security.DirectDB.UnescapedDBParameter -- table name from $wpdb->prefix
        $rows = $wpdb->get_results(
            $wpdb->prepare(
                "SELECT object_type, object_id
                 FROM {$this->assignments_table}
                 WHERE settings_id = %d
                 ORDER BY object_type, object_id",
                $settings_id
            ),
            ARRAY_A
        );
        // phpcs:enable WordPress.DB.PreparedSQL.InterpolatedNotPrepared,WordPress.DB.DirectDatabaseQuery.DirectQuery,PluginCheck.Security.DirectDB.UnescapedDBParameter

        // Fetch apply_to from the settings row
        $setting  = $this->get($settings_id);
        $apply_to = $setting ? ($setting['apply_to'] ?? 'all') : 'all';

        $result = ['apply_to' => $apply_to, 'categories' => [], 'products' => []];

        foreach ($rows as $row) {
            if ($row['object_type'] === 'category') {
                $result['categories'][] = (int) $row['object_id'];
            } elseif ($row['object_type'] === 'product') {
                $result['products'][] = (int) $row['object_id'];
            }
        }

        wp_cache_set($cache_key, $result, $this->cache_group);

        return $result;
    }

    /*--------------------------------------------------------------
    # ASSIGNMENTS — SYNC
    #
    # Full replace: deletes all existing assignments for the setting,
    # then inserts the provided lists. Idempotent.
    #
    # @param int   $settings_id
    # @param int[] $category_ids  WooCommerce product_cat term_ids
    # @param int[] $product_ids   WP post_ids (product CPT)
    --------------------------------------------------------------*/
    public function sync_assignments($settings_id, array $category_ids, array $product_ids, string $apply_to = 'all')
    {
        global $wpdb;

        $settings_id = absint($settings_id);

        if (! $this->get($settings_id)) {
            return false;
        }

        $category_ids = array_values(array_filter(array_map('absint', $category_ids)));
        $product_ids  = array_values(array_filter(array_map('absint', $product_ids)));

        // Persist apply_to on the settings row
        $this->update($settings_id, ['apply_to' => $apply_to]);

        $this->delete_all_assignments($settings_id);

        $now = current_time('mysql');

        foreach ($category_ids as $term_id) {
            $wpdb->insert( // phpcs:ignore WordPress.DB.DirectDatabaseQuery.DirectQuery
                $this->assignments_table,
                [
                    'settings_id'     => $settings_id,
                    'object_type' => 'category',
                    'object_id'   => $term_id,
                    'created_at'  => $now,
                ],
                ['%d', '%s', '%d', '%s']
            );
        }

        foreach ($product_ids as $post_id) {
            $wpdb->insert( // phpcs:ignore WordPress.DB.DirectDatabaseQuery.DirectQuery
                $this->assignments_table,
                [
                    'settings_id'     => $settings_id,
                    'object_type' => 'product',
                    'object_id'   => $post_id,
                    'created_at'  => $now,
                ],
                ['%d', '%s', '%d', '%s']
            );
        }

        wp_cache_delete('assignments_' . $settings_id, $this->cache_group);
        $this->flush_frontend_config_cache();

        return true;
    }

    /*--------------------------------------------------------------
    # PRIVATE HELPERS
    --------------------------------------------------------------*/

    private function delete_all_assignments($settings_id)
    {
        global $wpdb;

        $wpdb->delete( // phpcs:ignore WordPress.DB.DirectDatabaseQuery.DirectQuery
            $this->assignments_table,
            ['settings_id' => absint($settings_id)],
            ['%d']
        );

        wp_cache_delete('assignments_' . absint($settings_id), $this->cache_group);
    }

    private function sanitize_status(string $status): string
    {
        $status = sanitize_key($status);
        return in_array($status, self::VALID_STATUSES, true) ? $status : 'draft';
    }

    private function sanitize_apply_to(string $apply_to): string
    {
        $apply_to = sanitize_key($apply_to);
        return in_array($apply_to, self::VALID_APPLY_TO, true) ? $apply_to : 'all';
    }

    private function flush_list_cache()
    {
        $version     = wp_cache_get($this->cache_version_key, $this->cache_group);
        $new_version = (false === $version) ? 2 : $version + 1;
        wp_cache_set($this->cache_version_key, $new_version, $this->cache_group);
    }

    private function flush_frontend_config_cache()
    {
        $version     = wp_cache_get($this->frontend_cache_version_key, $this->cache_group);
        $new_version = (false === $version) ? 2 : $version + 1;
        wp_cache_set($this->frontend_cache_version_key, $new_version, $this->cache_group);
    }

    public static function flush_all_caches()
    {
        $group = 'WPBean_PGS_rules';

        foreach (['WPBean_PGS_rules_list_version', 'WPBean_PGS_frontend_config_version'] as $key) {
            $v = wp_cache_get($key, $group);
            wp_cache_set($key, (false === $v) ? 2 : $v + 1, $group);
        }
    }

    private function sanitize_config($config)
    {
        if (! is_array($config)) {
            return [];
        }

        unset($config['selectedId'], $config['inspTab']);

        if (! isset($config['version'])) {
            $config['version'] = 1;
        }

        return $config;
    }
}
