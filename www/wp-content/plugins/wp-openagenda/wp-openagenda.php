<?php

/**
 * Plugin Name: WP Openagenda
 * Plugin URI: https://openagenda4wp.com/
 * Description: Easily display an OpenAgenda.com in your WordPress website
 * Version: 1.4.9
 * Author: Sébastien Serre
 * Author URI: http://www.thivinfo.com
 * Tested up to: 5.0
 * Text Domain: wp-openagenda
 * License: GPLv3
 *
 * @package         openagenda-wp
 * @fs_premium_only /pro/, /.idea/
 **/
if ( !defined( 'ABSPATH' ) ) {
    exit;
}
// Exit if accessed directly.

if ( !function_exists( 'openagenda_fs' ) ) {
    // Create a helper function for easy SDK access.
    function openagenda_fs()
    {
        global  $openagenda_fs ;
        
        if ( !isset( $openagenda_fs ) ) {
            // Include Freemius SDK.
            require_once dirname( __FILE__ ) . '/freemius/start.php';
            $openagenda_fs = fs_dynamic_init( array(
                'id'             => '2279',
                'slug'           => 'wp-openagenda',
                'type'           => 'plugin',
                'public_key'     => 'pk_ab0021b682585d81e582568095957',
                'is_premium'     => false,
                'has_addons'     => false,
                'has_paid_plans' => true,
                'trial'          => array(
                'days'               => 30,
                'is_require_payment' => false,
            ),
                'menu'           => array(
                'slug'   => 'openagenda-settings',
                'parent' => array(
                'slug' => 'options-general.php',
            ),
            ),
                'is_live'        => true,
            ) );
        }
        
        return $openagenda_fs;
    }
    
    // Init Freemius.
    openagenda_fs();
    // Signal that SDK was initiated.
    do_action( 'openagenda_fs_loaded' );
    /**
     * Class Openagenda_WP_Main
     */
    class Openagenda_WP_Main
    {
        /**
         * Openagenda_WP_Main constructor.
         */
        public function __construct()
        {
            /**
             * Define Constant
             */
            define( 'THFO_OPENWP_VERSION', '1.4.9' );
            define( 'THFO_OPENWP_PLUGIN_URL', plugin_dir_url( __FILE__ ) );
            define( 'THFO_OPENWP_PLUGIN_PATH', plugin_dir_path( __FILE__ ) );
            define( 'THFO_OPENWP_PLUGIN_DIR', untrailingslashit( THFO_OPENWP_PLUGIN_PATH ) );
            /**
             * Load Files
             */
            add_action( 'plugins_loaded', array( $this, 'thfo_openwp_load_files' ) );
            add_action( 'wp_enqueue_scripts', array( $this, 'thfo_openwp_load_style' ) );
            add_action( 'admin_print_styles', array( $this, 'openwp_load_admin_style' ) );
        }
        
        /**
         * Include all files needed to the plugin work
         */
        public function thfo_openwp_load_files()
        {
            include_once THFO_OPENWP_PLUGIN_PATH . '/admin/register-settings.php';
            include_once THFO_OPENWP_PLUGIN_PATH . '/class/class-openagendaapi.php';
            include_once THFO_OPENWP_PLUGIN_PATH . '/class/class-openagenda-shortcode.php';
            include_once THFO_OPENWP_PLUGIN_PATH . '/3rd-party/parsedown/Parsedown.php';
            include_once THFO_OPENWP_PLUGIN_PATH . '/class/class-openagenda-wp-basic-widget.php';
        }
        
        /**
         * Load light style CSS
         */
        public function thfo_openwp_load_style()
        {
            wp_enqueue_style( 'openwp', THFO_OPENWP_PLUGIN_URL . 'assets/css/openwp.css' );
        }
        
        /**
         * Load Admin Styles.
         */
        public function openwp_load_admin_style()
        {
            wp_enqueue_style( 'openawp-admin-style', THFO_OPENWP_PLUGIN_URL . 'admin/assets/openwp-admin-styles.css' );
        }
    
    }
    new Openagenda_WP_Main();
}
