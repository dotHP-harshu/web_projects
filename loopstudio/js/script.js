// Function for preloader

const preloader = document.getElementById('preloader');

window.onload = function () {
    preloader.style.opacity = '0';
    preloader.style.display = 'none';
}


// Function to show menu
const menu = document.querySelector('.menu');
const crossIcon = document.querySelector('#icon-cross');
const hamburgerIcon = document.querySelector('#icon-hamburger');
let isShowingMenu = false;


const showMenu = () => {
    if (isShowingMenu) {
        crossIcon.style.display = 'block';
        hamburgerIcon.style.display = 'none';
        menu.style.display = 'inline-flex';
        isShowingMenu = false;
    } else {
        crossIcon.style.display = 'none';
        hamburgerIcon.style.display = 'block';
        menu.style.display = 'none';
        isShowingMenu = true;
    }
}

