<?php

/**
 * Enqueue frontend script for table fo contents block
 *
 * @return void
 */
function ub_table_of_contents_add_frontend_assets() {
    if ( has_block( 'ub/table-of-contents' ) ) {
        wp_enqueue_script(
            'ultimate_blocks-table-of-contents-front-script',
            plugins_url( 'table-of-contents/front.js', dirname( __FILE__ ) ),
            array( 'jquery' ),
            Ultimate_Blocks_Constants::plugin_version(),
            true
        );
    }
}

add_action( 'wp_enqueue_scripts', 'ub_table_of_contents_add_frontend_assets' );