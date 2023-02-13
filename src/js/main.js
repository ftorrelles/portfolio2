//querySelector menu y nav
const iconMenu = document.querySelector(".bx-menu");
const menu = document.querySelector(".menuNav");
const cerrar = document.querySelectorAll('.menuNav a[href^="#"]');
//querySelector lightModeIcon
const iconSun = document.querySelector(".bx-sun");
const iconlinkedin = document.querySelector(".bxl-linkedin");
const iconInstagram = document.querySelector(".bxl-instagram-alt");
const iconTwitter = document.querySelector(".bxl-twitter");
const iconJs = document.querySelector(".js");
const iconReact = document.querySelector(".react");
const iconNode = document.querySelector(".node");
const iconCss = document.querySelector(".css");
const iconHtml = document.querySelector(".html");
const iconGitHub = document.querySelector(".gitHub");
const iconDev = document.querySelector(".dev");
const iconPowerBi = document.querySelector(".powerBi");
const iconBootstrap = document.querySelector(".bootstrap");
const iconPhone = document.querySelector(".bx-phone-call");
const iconGmail = document.querySelector(".bxl-gmail");
const iconHeart = document.querySelector(".bxs-heart");
const iconGithubFoo = document.querySelector(".bxl-github");
//querySelector lightModeNavBar
const navBarColor = document.querySelector(".navbar");
//querySelector lightMode letters
const homeMyName = document.querySelector(".home_my-name");
const h2About = document.querySelector(".h2-about");
const aboutParagraph = document.querySelector(".about_paragraph");
const h2Skills = document.querySelector(".h2-skills");
const pSkills = document.querySelector(".skills_content");
const h2Experince = document.querySelector(".h2-Experince");
const empresa1 = document.querySelector(".empresa1");
const empresa2 = document.querySelector(".empresa2");
const empresa3 = document.querySelector(".empresa3");
const h2Portfolio = document.querySelector(".h2-Portfolio");
const h2Contacts = document.querySelector(".h2-Contacts");
//querySelector lightMode line
const line1 = document.querySelector(".firstLine");
const line2 = document.querySelector(".secondLine");

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
    //cambio en el body y cambio de icono
    document.body.classList.toggle("body_light-mode");
    iconSun.classList.toggle("bxs-moon");
    //cambio color en los iconos
    iconSun.classList.toggle("c_icon");
    iconMenu.classList.toggle("c_cream");
    iconlinkedin.classList.toggle("bg_icon");
    iconInstagram.classList.toggle("bg_icon");
    iconTwitter.classList.toggle("bg_icon");
    iconJs.classList.toggle("bg_nav");
    iconReact.classList.toggle("bg_nav");
    iconNode.classList.toggle("bg_nav");
    iconCss.classList.toggle("bg_nav");
    iconHtml.classList.toggle("bg_nav");
    iconGitHub.classList.toggle("bg_nav");
    iconDev.classList.toggle("bg_nav");
    iconPowerBi.classList.toggle("bg_nav");
    iconBootstrap.classList.toggle("bg_nav");
    iconPhone.classList.toggle("c_icon");
    iconGmail.classList.toggle("c_icon");
    iconHeart.classList.toggle("c_icon");
    iconGithubFoo.classList.toggle("c_icon");
    //cambios en el nav y el menuNav
    navBarColor.classList.toggle("bg_nav");
    menu.classList.toggle("bg_nav");
    //cambios en color letras
    homeMyName.classList.toggle("c_details");
    h2About.classList.toggle("c_icon");
    aboutParagraph.classList.toggle("c_black");
    h2Skills.classList.toggle("c_icon");
    pSkills.classList.toggle("c_icon");
    h2Experince.classList.toggle("c_icon");
    empresa1.classList.toggle("c_icon");
    empresa2.classList.toggle("c_icon");
    empresa3.classList.toggle("c_icon");
    h2Portfolio.classList.toggle("c_icon");
    h2Contacts.classList.toggle("c_icon");
    navBarColor.classList.toggle("c_details");
    //cambios en la linea ex
    line1.classList.toggle("bg_icon");
    line2.classList.toggle("bg_icon");
});
