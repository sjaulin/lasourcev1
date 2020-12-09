<?php

/**
 * Enqueue frontend script for content toggle block
 *
 * @return void
 */
function ub_tabbed_content_add_frontend_assets() {
    if ( has_block( 'ub/tabbed-content' ) ) {
        wp_enqueue_script(
            'ultimate_blocks-tabbed-content-front-script',
            plugins_url( 'tabbed-content/front.js', dirname( __FILE__ ) ),
            array( 'jquery' ),
            Ultimate_Blocks_Constants::plugin_version(),
            true
        );
    }
}

add_action( 'wp_enqueue_scripts', 'ub_tabbed_content_add_frontend_assets' );
