window.onload = function () {
    const counters = document.querySelector('.about__numbers-container')
    $('.main-slider').slick({
        slide: '.main-slider__item',
        arrows: true,
        dots: true,
        speed: 500,

    });

    $('.clients__slider').slick({
        slide: '.clients__slider__item',
        arrows: true,
        speed: 500,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 1320,
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
                breakpoint: 1320,
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
        let countersTop = counters.getBoundingClientRect().top
        if ($('.about__numbers-container_card_top-number').text().length == 0) {
            if (countersTop < 600) {
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



};
