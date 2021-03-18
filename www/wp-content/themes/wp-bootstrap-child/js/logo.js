jQuery(window).scroll( function() {
    if (jQuery(window).width() >= 768) {

        const element = document.querySelector('.navbar-brand');

        if( jQuery(this).scrollTop() < 150) {
            jQuery(".navbar-brand").hide();
    
            jQuery(".navbar").addClass('light');
            jQuery(".navbar").removeClass('dark');
        }
        else {
            jQuery(".navbar-brand").show();
    
            jQuery(".navbar").addClass('dark');
            jQuery(".navbar").removeClass('light');
    
            element.classList.add('animate__animated', 'animate__zoomIn');
            element.style.setProperty('--animate-duration', '0.5s');
        }
    }
});