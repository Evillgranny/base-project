window.onload = function () {
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

    
}

