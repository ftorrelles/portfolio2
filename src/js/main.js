const iconMenu = document.querySelector(".bx-menu");
const menu = document.querySelector(".menuNav");
const cerrar = document.querySelectorAll('.menuNav a[href^="#"]');
//lightMode
const iconSun = document.querySelector(".bxs-sun");
const iconColor = document.querySelector(".bx");
const navBarColor = document.querySelector(".navbar");

//evento aparecer menu mobile
iconMenu.addEventListener("click", function () {
    iconMenu.classList.toggle("bx-x");
    menu.classList.toggle("menuNav_show");
});
//evento cerrar menu al escoger opción
cerrar.forEach((cerrar) => {
    cerrar.addEventListener("click", function () {
        iconMenu.classList.remove("bx-x");
        menu.classList.remove("menuNav_show");
    });
});
//evento lightMode
iconSun.addEventListener("click", () => {
    //cambio en el body
    document.body.classList.toggle("body_light-mode");
    //cambio en los iconos
    iconColor.classList.toggle("c_light-mode");
    iconMenu.classList.toggle("c_light-mode");
    //cambios en el nav y el menuNav
    navBarColor.classList.toggle("bg_light-mode");
    menu.classList.toggle("bg_light-mode");
    // ? iconToggle.classList.add("bxs-moon")
    // : iconToggle.classList.remove("bxs-moon");
});

// ('<i class="bx bxs-moon"></i>');
