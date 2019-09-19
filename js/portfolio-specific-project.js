window.onload = function () {
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        asNavFor: '.slider-nav',
        dots: true,
    });

    $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        arrows: false,
        centerMode: false,
        focusOnSelect: true,
        swipe: false
    });

    $('.similar-project__container__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 1320,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.slider-nav .slick-slide').removeClass('slick-active');

    // Set active class to first thumbnail slides
    $('.slider-nav .slick-slide').eq(0).addClass('slick-active');

    // On before slide change match active thumbnail to current slide
    $('.slider-nav').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        var mySlideNumber = nextSlide;
        $('.slider-for__item2.slick-slide').removeClass('slick-active');
        $('.slider-for__item2.slick-slide').eq(mySlideNumber).addClass('slick-active');
    });
};
