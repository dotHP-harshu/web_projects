// code for preloader

const preloader = document.querySelector('.preloader');
window.addEventListener('load', () => {
    preloader.style.display = 'none';
})






// code for responsive navbar
let isShowingMenu = false;

function showMenu() {
    const menu = document.querySelector('.menu');
    const menuIcons = document.querySelectorAll('.menu-icon i');
    if (isShowingMenu) {
        menu.style.transform = `translateX(120%)`;
        menuIcons[0].style.display = "inline-block";
        menuIcons[1].style.display = 'none';
        isShowingMenu = false;
    } else {
        menu.style.transform = `translateX(0)`;
        menuIcons[0].style.display = "none";
        menuIcons[1].style.display = 'inline-block';
        isShowingMenu = true;
    }
}