
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
    });

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
    })

    $('.form-close').click(function () {
        $('.popup').fadeOut(500)
    })

    $('#getCallBack').click(function () {
        $('.call-back-form').fadeIn(500)
    })
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
