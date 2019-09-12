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
    }
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
       $('.serteficates-slider_item_img_in1').click(function () {
           $.fancybox.open(
               [
                 {src: "img/s5.png"},
                 {src: "img/s5-1.png"},
                 {src: "img/s5-2.png"}
               ],{}
           )
        })

        $('.serteficates-slider_item_img_in2').click(function () {
            $.fancybox.open(
                [
                    {src: "img/s2.png"},
                    {src: "img/s2-1.png"},
                    {src: "img/s2-2.png"},
                    {src: "img/s2-3.png"}
                ],{}
            )
        })

        $('.serteficates-slider_item_img_in3').click(function () {
            $.fancybox.open(
                [
                    {src: "img/s7.png"},
                    {src: "img/s7-1.png"}
                ],{}
            )
        })

        $('.serteficates-slider_item_img_in4').click(function () {
            $.fancybox.open(
                [
                    {src: "img/s9.png"},
                    {src: "img/s9-1.png"},
                    {src: "img/s9-2.png"},
                    {src: "img/s9-3.png"}
                ],{}
            )
        })
    }
})();
