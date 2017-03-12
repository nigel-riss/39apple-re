;
$(document).ready(function(){
    // carousel
    $('#menu-button').click(function() {
        $('#main-nav').toggle();
    });

    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayHoverPause: true
    });

    function hideMenu(menu) {
        $("#dropdown-" + menu).removeClass('dropdown__item--show');
    }
});