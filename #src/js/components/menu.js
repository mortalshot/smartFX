$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    })

    // up btn show/hide
    const btnUp = $('.up-btn');
    $(window).scroll(function () {
        var winScrollTop = $(this).scrollTop();
        if (winScrollTop > 600) {
            btnUp.addClass('show');
        } else {
            btnUp.removeClass('show');
        }
    });

    btnUp.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, '1000');
    });
})