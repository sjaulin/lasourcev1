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
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>

</head>

<body <?php body_class(); ?>>

    <?php

    // WordPress 5.2 wp_body_open implementation
    if (function_exists('wp_body_open')) {
        wp_body_open();
    } else {
        do_action('wp_body_open');
    }

    ?>


    <div class="container">
        <div class="row">
            <div class="col-6">
                <a href="<?php echo esc_url(home_url('/')); ?>"><img src="<?php echo esc_url(get_theme_mod('wp_bootstrap_starter_logo')); ?>" alt="<?php echo esc_attr(get_bloginfo('name')); ?>"></a>
            </div>
            <div class="col-6 text-right">
                Suivez-nous
            </div>
        </div>
        <!--/row-->
    </div>
    <!--container-->
    <nav class="navbar navbar-expand-lg sticky-top navbar-light bg-light">
        <div class="container">
            <div class="navbar-brand"><a class="icon" href="<?php echo esc_url(home_url('/')); ?>"><img src="<?php echo get_stylesheet_directory_uri(); ?>/img/icon-50x50.jpg" /></a></div>
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
        
        <?php if (!is_page_template('blank-page.php') && !is_page_template('blank-page-with-container.php')) : ?>
            <header id="masthead" class="site-header <?php echo wp_bootstrap_starter_bg_class(); ?>" role="banner">

            </header><!-- #masthead -->
            <?php if (is_front_page() && !get_theme_mod('header_banner_visibility')) : ?>
                <div id="page-sub-header" <?php if (has_header_image()) { ?>style="background-image: url('<?php header_image(); ?>');" <?php } ?>>
                    <div class="container">
                        <h1>
                            <?php
                            if (get_theme_mod('header_banner_title_setting')) {
                                echo esc_attr(get_theme_mod('header_banner_title_setting'));
                            } else {
                                echo 'WordPress + Bootstrap';
                            }
                            ?>
                        </h1>
                        <p>
                            <?php
                            if (get_theme_mod('header_banner_tagline_setting')) {
                                echo esc_attr(get_theme_mod('header_banner_tagline_setting'));
                            } else {
                                echo esc_html__('To customize the contents of this header banner and other elements of your site, go to Dashboard > Appearance > Customize', 'wp-bootstrap-starter');
                            }
                            ?>
                        </p>
                        <a href="#content" class="page-scroller"><i class="fa fa-fw fa-angle-down"></i></a>
                    </div>
                </div>
            <?php endif; ?>
            <div id="content" class="site-content">
                <div class="container">
                    <div class="row">
                    <?php endif; ?>