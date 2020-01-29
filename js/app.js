"use strict";

$(document).ready(function () {

    new WOW().init();

    $(window).scroll(function (e) {
        parallax();
    });

    function parallax(){
        let scrolled = $(window).scrollTop();

        /* if ($(window).width() >= 1200 ) {
            $('.skill__img').css('background-position', '0 '+(scrolled*1.2+300)+'px');
        };
        if ($(window).width() <= 1199 && $(window).width() >= 1024) {
          $('.skill__img').css('background-position', '0 '+(scrolled*1.2+100)+'px');
        };
        if ($(window).width() <= 1023 && $(window).width() >= 768) {
            $('.skill__img').css('background-position', '0 '+(scrolled*1.1+300)+'px');
        };
        if ($(window).width() <= 767 && $(window).width() >= 540) {
            $('.skill__img').css('background-position', '0 '+(scrolled*1.2+100)+'px');
        };
        if ($(window).width() <= 539 && $(window).width() >= 375) {
            $('.skill__img').css('background-position', '0 '+(scrolled*1.3-150)+'px');
        };
        if ($(window).width() <= 374) {
            $('.skill__img').css('background-position', '0 '+(scrolled*1.2-120)+'px');
        };
        if ($(window).width() <= 320) {
            $('.skill__img').css('background-position', '0 '+(scrolled*1)+'px');
        }; */
        //$('.skill__inner').css('background-position', '0 '+(-scrolled*0.2)+'px')

            
        
    };

    $('.ba-slider-wrapper').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        adaptiveHeight: true,
        arrows: false
    });
    

});
   

    /*$('.ba-item-number').each( function() {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 2000,
            easing: 'swing',
            step: function(now) {
                $(this).text(Math.ceil(now));
            }
        });
    }); 
    $(window).scroll(function() {
        if ($(this).scrollTop() > 600) {
            $('.ba-item-number').each( function() {
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 2000,
                    easing: 'linear',
                    step: function(now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
        }
    })*/

    $('.ba-slider-wrapper').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        adaptiveHeight: true,
        arrows: false
    });

  












    

