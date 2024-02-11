$( document ).ready(function() {
    $('.list__item_menu-hide').on('click', function() {
        $(".list__item_menu-hide").not(this).removeClass('active');
        $(this).toggleClass('active');
    })
});

