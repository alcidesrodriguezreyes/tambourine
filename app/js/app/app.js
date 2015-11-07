(function($){
    'use strict';
    $('[data-toggle="slider"]').slick({
        autoplay: true,
        autoplaySpeed: 8000
    });
    
    $('[data-toggle="slider-mobile"]').slick({
        mobileFirst: true,
        variableWidth: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        responsive: [
        {
            breakpoint: 640
        },{
            breakpoint: 700,
            settings: 'unslick'
        },{
            breakpoint: 1024,
            settings: 'unslick'
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
        ]
    });
})(jQuery);