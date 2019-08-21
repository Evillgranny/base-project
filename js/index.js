
window.onload = function () {
    $('.main-slider').slick({
        slide: '.main-slider__item',
        arrows: true,
        dots: true,
        speed: 500
    });

    $('.clients__slider').slick({
        slide: '.clients__slider__item',
        arrows: true,
        speed: 500,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 1460,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });
    $('.serteficates-slider').slick({
        slide: '.serteficates-slider_item',
        arrows: true,
        speed: 500,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 1460,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });
    $('.comments__slider').slick({
        slide: '.comments__slider__item',
        arrows: true,
        speed: 500,
        slidesToShow: 1
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 120 && $(this).width() > '960') {
            $('.header-bottom').addClass("fixed-menu");
        } else {
            $('.header-bottom').removeClass("fixed-menu");
        }
        if ($(this).scrollTop() > 120 && $(this).width() < '960') {
            $('.header').addClass("fixed-menu");
        } else {
            $('.header').removeClass("fixed-menu");
        }
        if ($(this).scrollTop() > 2700 && $(this).width() > '1460') {
            $('.about__numbers-container_card_top-number1').spincrement({
                duration: 2000,
                from: 0,
                to: 11
            });
            $('.about__numbers-container_card_top-number2').spincrement({
                duration: 2000,
                from: 0,
                to: 13
            });
            $('.about__numbers-container_card_top-number_span').spincrement({
                duration: 2000,
                from: 0,
                to: 500
            });
            $('.about__numbers-container_card_top-number3').spincrement({
                duration: 2000,
                from: 0,
                to: 3.75,
                decimalPlaces: 2,
                decimalPoint: 	','
            });
            $('.about__numbers-container_card_top-number4').spincrement({
                duration: 2000,
                from: 0,
                to: 284
            });
            $('.about__numbers-container_card_top-number5').spincrement({
                duration: 2000,
                from: 0,
                to: 38
            });
        }
        if ($(this).scrollTop() > 3300 && $(this).width() < '1460') {
            $('.about__numbers-container_card_top-number1').spincrement({
                duration: 2000,
                from: 0,
                to: 11
            });
            $('.about__numbers-container_card_top-number2').spincrement({
                duration: 2000,
                from: 0,
                to: 13
            });
            $('.about__numbers-container_card_top-number_span').spincrement({
                duration: 2000,
                from: 0,
                to: 500
            });
            $('.about__numbers-container_card_top-number3').spincrement({
                duration: 2000,
                from: 0,
                to: 3.75,
                decimalPlaces: 2,
                decimalPoint: 	','
            });
            $('.about__numbers-container_card_top-number4').spincrement({
                duration: 2000,
                from: 0,
                to: 284
            });
            $('.about__numbers-container_card_top-number5').spincrement({
                duration: 2000,
                from: 0,
                to: 38
            });
        }
        if ($(this).scrollTop() > 1200 && $(this).width() < '750') {
            $('.about__numbers-container_card_top-number1').spincrement({
                duration: 2000,
                from: 0,
                to: 11
            });
            $('.about__numbers-container_card_top-number2').spincrement({
                duration: 2000,
                from: 0,
                to: 13
            });
            $('.about__numbers-container_card_top-number_span').spincrement({
                duration: 2000,
                from: 0,
                to: 500
            });
            $('.about__numbers-container_card_top-number3').spincrement({
                duration: 2000,
                from: 0,
                to: 3.75,
                decimalPlaces: 2,
                decimalPoint: 	','
            });
            $('.about__numbers-container_card_top-number4').spincrement({
                duration: 2000,
                from: 0,
                to: 284
            });
            $('.about__numbers-container_card_top-number5').spincrement({
                duration: 2000,
                from: 0,
                to: 38
            });
        }
    });


    $('.clients__slider__item1').hover(
        function () {
            $('.clients__slider__item1').children('img').attr('src', 'img/sl11.png')
        },
        function () {
            $('.clients__slider__item1').children('img').attr('src', 'img/sl1.png')
        }
    );

    $('.clients__slider__item2').hover(
        function () {
            $('.clients__slider__item2').children('img').attr('src', 'img/sl21.png')
        },
        function () {
            $('.clients__slider__item2').children('img').attr('src', 'img/sl2.png')
        }
    );

    $('.clients__slider__item3').hover(
        function () {
            $('.clients__slider__item3').children('img').attr('src', 'img/sl31.png')
        },
        function () {
            $('.clients__slider__item3').children('img').attr('src', 'img/sl3.png')
        }
    );

    $('.clients__slider__item4').hover(
        function () {
            $('.clients__slider__item4').children('img').attr('src', 'img/sl41.png')
        },
        function () {
            $('.clients__slider__item4').children('img').attr('src', 'img/sl4.png')
        }
    );

    $('.header-top__menu').click(function () {
        if ($('.header-top__menu').hasClass('open-menu')) {
            $('.header-top__menu').attr('src', 'img/ham.png')
                .removeClass('open-menu')
            $('.header-bottom').hide()
        } else {
            $('.header-top__menu').attr('src', 'img/cross-menu.png')
                .addClass('open-menu')
            $('.header-bottom').show()
        }
    });

    $('.form-close').click(function () {
        $('.popup').fadeOut(500)
    });

    $('#getCallBack').click(function () {
        $('.call-back-form').fadeIn(500)
    });
    $('.popup').click(function (e) {
        let container = $('.popup');
        if (container.has(e.target).length === 0) {
            $(container).fadeOut(500);
        }
    });


    document.addEventListener('keydown', function (evt) {
        if (evt.keyCode === 27) {
            $('.popup').fadeOut(300);
        }
    });
};
