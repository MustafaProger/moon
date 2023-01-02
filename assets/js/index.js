function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: "smooth",
    })
}

window.onload=function(){

    // Плавная прокрутка принажатии на кнопку "Читать далее"
    let read_more_button = document.querySelector(".read_more_button");
    let about_us_1 = document.querySelector("#about_us");

    read_more_button.addEventListener('click', () => {
        scrollTo(about_us_1);
        console.log('Все работает');
    });

    // Плавная прокрутка при нажатии на гиперссылку "Главная"
    let nav_hyperlink_a_1 = document.querySelector("#nav_hyperlink_a_1");
    let main = document.querySelector('#main');

    nav_hyperlink_a_1.addEventListener('click', () => {
        scrollTo(main);
        console.log('Все работает');
    });

    // Плавная прокрутка при нажатии на гиперссылку "О нас"
    let nav_hyperlink_a_2 = document.querySelector("#nav_hyperlink_a_2");
    let about_us_2 = document.querySelector('#about_us');

    nav_hyperlink_a_2.addEventListener('click', () => {
        scrollTo(about_us_2);
        console.log('Все работает');
    });

    //Плавная анимация при нажатии на гиперссылку "Команда"

    let nav_hyperlink_a_3 = document.querySelector("#nav_hyperlink_a_3");
    let team = document.querySelector("#team");

    nav_hyperlink_a_3.addEventListener('click', () => {
        scrollTo(team); 
        console.log('Все работает');
    });
    
}
