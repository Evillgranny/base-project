(function autoFunction () {

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

    $('.getCallBack').click(function () {
        $('.call-back-form').fadeIn(500)
    });

    if ($('.get-project-btn')) {
        $('.get-project-btn').click(function () {
            $('.call-back-form').fadeIn(500)
        });
    };

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

    if($('.certifications') || $('.serteficates')) {
        $('.serteficates-slider_item_img_in').click(function () {
            let allImg = $(this).nextAll(".for-fancy-box");
            let imgArr = [];

            for (let i = 0; i < allImg.length; i++) {
                let currentImg = allImg[i];
                let currentLink = $(currentImg).data('link');
                imgArr.push({src: currentLink})
            }

            $.fancybox.open(
                imgArr,{}
            )
        });
    }

})();
