window.onload = function () {
    const counters = document.querySelector('.about__numbers-container');
    var oldImg;

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

    $('.clients__slider__item').hover(
        function () {
            oldImg = $(this).children('img').attr('src');
            let hoverImg = $(this).children(".slider-hover-img");
            let currentLink = $(hoverImg).data('img-link');
            $(this).children('img').attr('src', currentLink)
        },
        function () {
            $(this).children('img').attr('src', oldImg)
        }
    );

    var containersForNumber = $('.about__numbers-container_card_top-number');
    for (var i = 0; i < containersForNumber.length; i++) {
        let currentConteiner = containersForNumber[i];
        let from = $(currentConteiner).children('.number-card-from').data('number')
        let to = $(currentConteiner).children('.number-card-to').data('number')

        $(window).scroll(function () {
            var countersTop = counters.getBoundingClientRect().top;

            if (countersTop < 600) {
                if ($(currentConteiner).hasClass('comma')) {
                    $(currentConteiner).spincrement({
                        duration: 2000,
                        from: from,
                        to: to,
                        decimalPlaces: 2,
                        decimalPoint: 	','
                    });
                } else {
                    $(currentConteiner).spincrement({
                        duration: 2000,
                        from: from,
                        to: to,
                    });
                }
            }
        })
    }
};


