<?php

/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WP_Bootstrap_Starter
 */

?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="profile" href="http://gmpg.org/xfn/11">

    <?php wp_head(); ?>

    <script src="<?php echo get_stylesheet_directory_uri(); ?>/js/logo.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />

</head>

<body <?php body_class(); ?>>

    <div id="fb-root"></div>
    <script async defer crossorigin="anonymous" src="https://connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v10.0" nonce="VayEj9sI"></script>

    <?php

    // WordPress 5.2 wp_body_open implementation
    if (function_exists('wp_body_open')) {
        wp_body_open();
    } else {
        do_action('wp_body_open');
    }

    ?>

    <div class="top_logo text-center">
        <a class="icon" href="<?php echo esc_url(home_url('/')); ?>"><img class="" src="<?php echo get_stylesheet_directory_uri(); ?>/img/logo/h150/black-color.png" /></a>
    </div>

    <nav class="navbar navbar-dark navbar-expand-lg sticky-top" role="navigation">
        <div class="text-center mx-auto">

            <a class="navbar-brand" href="<?php echo esc_url(home_url('/')); ?>"><img src="<?php echo get_stylesheet_directory_uri(); ?>/img/logo/h60/white-white.png" /></a>

            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#main-nav">
                <span class="navbar-toggler-icon"></span>
            </button>

            <?php
            wp_nav_menu(array(
                'theme_location'    => 'primary',
                'container'       => 'div',
                'container_id'    => 'main-nav',
                'container_class' => 'collapse navbar-collapse justify-content-start',
                'menu_id'         => false,
                'menu_class'      => 'navbar-nav',
                'depth'           => 3,
                'fallback_cb'     => 'wp_bootstrap_navwalker::fallback',
                'walker'          => new wp_bootstrap_navwalker()
            ));
            ?>

        </div>
    </nav>

    <div id="page" class="site">


        <?php if (is_front_page()) : ?>
            <div class="slider_container">
                <div class="container">
                    <?php echo do_shortcode('[metaslider id="469"]'); ?>
                </div>
            </div>
        <?php endif; ?>




        <div id="content" class="site-content">