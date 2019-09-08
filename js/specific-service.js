window.onload = function () {
    $('.current-service-container__slider').slick({
        arrows: true,
        dots: true,
        speed: 500,
        prevArrow:  `<button type="button" class="arrow-prev"></button>`,
        nextArrow:  `<button type="button" class="arrow-next"></button>`
    });

    $('.current-service-container_slider').slick({
        arrows: true,
        speed: 500,
        slidesToShow: 2,
        responsive: [
            {
                breakpoint: 1320,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.similar-services__container__slider').slick({
        arrows: true,
        speed: 500,
        slidesToShow: 2,
        responsive: [
            {
                breakpoint: 1320,
                settings: {
                    slidesToShow: 1
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
};