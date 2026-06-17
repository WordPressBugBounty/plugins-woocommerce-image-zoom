<?php
defined('ABSPATH') || exit;

class WPBean_PGS_Schema
{

    const TABLE            = 'wpbean_pgs_rules';
    const ASSIGNMENTS_TABLE = 'wpbean_pgs_rule_assignments';

    public static function table_name()
    {
        global $wpdb;
        return $wpdb->prefix . self::TABLE;
    }

    public static function assignments_table_name()
    {
        global $wpdb;
        return $wpdb->prefix . self::ASSIGNMENTS_TABLE;
    }

    public static function install()
    {
        global $wpdb;

        $charset_collate = $wpdb->get_charset_collate();

        // ── Forms table ───────────────────────────────────────────────────────

        $forms_table = self::table_name();

        $sql_forms = "CREATE TABLE {$forms_table} (
            id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
            title VARCHAR(200) NOT NULL,
            status VARCHAR(20) NOT NULL DEFAULT 'draft',
            apply_to VARCHAR(20) NOT NULL DEFAULT 'all',
            config LONGTEXT NOT NULL,
            config_version SMALLINT UNSIGNED NOT NULL DEFAULT 1,
            created_at DATETIME NOT NULL,
            updated_at DATETIME NOT NULL,
            PRIMARY KEY (id),
            KEY status (status),
            KEY apply_to (apply_to),
            KEY config_version (config_version)
        ) {$charset_collate};";

        // ── Assignments table ─────────────────────────────────────────────────
        //
        // Stores which forms are assigned to which WooCommerce categories or
        // specific products.
        //
        // object_type: 'category' | 'product'
        // object_id:   term_id for categories, post_id for products
        //
        // A UNIQUE constraint on (settings_id, object_type, object_id) prevents
        // duplicate rows. To find the active form for a product: query all
        // assignments for the product_id AND all its category term_ids, then
        // take the highest settings_id (latest wins).

        $assignments_table = self::assignments_table_name();

        $sql_assignments = "CREATE TABLE {$assignments_table} (
            id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
            settings_id BIGINT UNSIGNED NOT NULL,
            object_type VARCHAR(20) NOT NULL,
            object_id BIGINT UNSIGNED NOT NULL,
            created_at DATETIME NOT NULL,
            PRIMARY KEY (id),
            UNIQUE KEY unique_assignment (settings_id, object_type, object_id),
            KEY settings_id (settings_id),
            KEY object_lookup (object_type, object_id)
        ) {$charset_collate};";

        require_once ABSPATH . 'wp-admin/includes/upgrade.php';
        dbDelta($sql_forms);
        dbDelta($sql_assignments);

        update_option('WPBean_PGS_DB_VERSION', WPBean_PGS_DB_VERSION);
    }

    /**
     * Insert a default published rule if the settings table is empty.
     * Runs only once (first install). Safe to call on upgrades — the
     * row-count guard prevents re-seeding on existing installs.
     */
    public static function seed_sample_rule()
    {
        global $wpdb;

        $table = self::table_name();

        $count = (int) $wpdb->get_var("SELECT COUNT(id) FROM {$table}"); // phpcs:ignore WordPress.DB.PreparedSQL.InterpolatedNotPrepared,WordPress.DB.DirectDatabaseQuery.DirectQuery,WordPress.DB.DirectDatabaseQuery.NoCaching
        if ($count > 0) {
            return;
        }

        $wpdb->insert( // phpcs:ignore WordPress.DB.DirectDatabaseQuery.DirectQuery
            $table,
            [
                'title'          => 'Default Settings',
                'status'         => 'publish',
                'apply_to'       => 'all',
                'config'         => '{}',
                'config_version' => 1,
                'created_at'     => current_time('mysql'),
                'updated_at'     => current_time('mysql'),
            ],
            ['%s', '%s', '%s', '%s', '%d', '%s', '%s']
        );
    }
}
