$( document ).ready(function() {

    // Работа скрытого меню в navbar
    $('.list__item_menu-hide').on('click', function() {
        $(".list__item_menu-hide").not(this).removeClass('active');
        $(this).toggleClass('active');
    })

    $('.game__slick-galeri ').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrows/arrowLeft.svg" alt="prevArrow"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arrows/arrowRight.svg" alt="prevArrow"></button>',
        speed: 500,
        dots: true
    });
});

