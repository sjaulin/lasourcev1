<?php get_template_part('footer-widget'); ?>
<footer id="colophon" class="site-footer <?php echo wp_bootstrap_starter_bg_class(); ?>" role="contentinfo">
	<div class="pt-3 pb-3">
		<div class="site-info">
			&copy; <?php echo date('Y'); ?> <?php echo '<a href="' . home_url() . '">' . get_bloginfo('name') . '</a>'; ?>
			<span class="sep"> | </span>
			<a class="credits" href="https://wordpress.org" target="_blank" title="WordPress" alt="Bootstrap">Fabriqué avec Wordpress</a>

		</div><!-- close .site-info -->
	</div>
</footer><!-- #colophon -->

</div><!-- #page -->

<?php wp_footer(); ?>
</body>

</html>