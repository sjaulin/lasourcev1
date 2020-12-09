jQuery(window).scroll( function() {
    const element = document.querySelector('.navbar-brand .icon');
    if( jQuery(this).scrollTop() < 150 ) {
        jQuery(".navbar-brand .icon").hide();
    }
    else {
        jQuery(".navbar-brand .icon").show();
        element.classList.add('animate__animated', 'animate__zoomIn');
        element.style.setProperty('--animate-duration', '5s');
    }
});