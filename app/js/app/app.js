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
            //settings: 'unslick'
        },{
            breakpoint: 1024,
            settings: 'unslick'
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
        ]
    });
    
    $('#arrival-date,#departure-date').datepick({ 
        onSelect: customRange, 
        //showTrigger: '#calImg'
    }); 
     
    function customRange(dates) { 
        if (this.id == 'arrival-date') { 
            $('#departure-date').datepick('option', 'minDate', dates[0] || null); 
        } 
        else { 
            $('#arrival-date').datepick('option', 'maxDate', dates[0] || null); 
        } 
    }
    
    $('select').selectric({disableOnMobile: false});
    
    $('[data-toggle="book-now"]').on('click', function(e){
        e.preventDefault();
        var target = $(this).data().target;
        $(target).toggleClass('open');
        $('.overlay').toggleClass('open');
    });
    
    $("#book-form").validationEngine({promptPosition: 'bottomLeft'});
    
})(jQuery);