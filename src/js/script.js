$(document).ready(function() {
    // Работа скрытого меню 
    $('.list__item_menu-hide').on('click', function(e) {
        $(".list__item_menu-hide").not(this).removeClass('active');
        $(this).addClass('active');
        e.stopPropagation(); // Предотвращаем всплытие события
    });

    //Работа подскрытого меню в скрытом меню
    $('.sub-menu__list_contact li').on('click', function(e) {
        $(this).toggleClass('active');
        e.stopPropagation(); // Предотвращаем всплытие события, чтобы избежать воздействия на родительские элементы
    });

    // Закрыть все активные меню при клике вне их области
    $(document).on('click', function() {
        $('.list__item_menu-hide').removeClass('active');
    });
    
    // slick-слайдер
    $('.game__slick-galeri ').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrows/arrowLeft.svg" alt="prevArrow"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arrows/arrowRight.svg" alt="prevArrow"></button>',
        speed: 500,
        dots: true
    });
});

