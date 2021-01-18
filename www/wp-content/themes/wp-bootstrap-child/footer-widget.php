<?php



if (is_active_sidebar('footer-1') || is_active_sidebar('footer-2') || is_active_sidebar('footer-3')) { ?>

    <div id="footer-widget">

        <div class="container">

            <div class="row">

                <?php if (is_active_sidebar('footer-1')) : ?>

                    <div class="col-12 col-md-4 col-lg-3 footer-widget-1"><?php dynamic_sidebar('footer-1'); ?></div>

                <?php endif; ?>

                <?php if (is_active_sidebar('footer-2')) : ?>

                    <div class="col-12 col-md-8 col-lg-5 footer-widget-2"><?php dynamic_sidebar('footer-2'); ?></div>

                <?php endif; ?>

                <?php if (is_active_sidebar('footer-3')) : ?>

                    <div class="col-12 col-md-12 col-lg-4 footer-widget-3"><?php dynamic_sidebar('footer-3'); ?></div>

                <?php endif; ?>

            </div>

        </div>

    </div>



<?php }
