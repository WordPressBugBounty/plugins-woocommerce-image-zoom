<?php
defined('ABSPATH') || exit;

class WPBean_PGS_Migrator
{

    public static function init()
    {
        add_action('init', [__CLASS__, 'maybe_upgrade']);
    }

    public static function maybe_upgrade()
    {

        $installed = get_option('WPBean_PGS_DB_VERSION');

        if (version_compare($installed, WPBean_PGS_DB_VERSION, '<')) {
            WPBean_PGS_Schema::install();
            WPBean_PGS_Schema::seed_sample_rule();
            WPBean_PGS_Rules_Repository::flush_all_caches();
        }
    }
}
