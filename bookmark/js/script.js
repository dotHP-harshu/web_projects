// Function for preloader

const preloader = document.getElementById('preloader');

window.onload = function () {
    preloader.style.opacity = '0';
    preloader.style.display = 'none';
}


// Function for slider
const slideControls = document.querySelectorAll('.controls');
const imgSlides = document.querySelectorAll('.img-slide');
const contentSlides = document.querySelectorAll('.content-slide');


const changeControl = (index) => {
    slideControls.forEach(control => control.classList.remove('active-slide-control'));
    slideControls[index].classList.add('active-slide-control');
}
const changeImgSlide = (index) => {
    imgSlides.forEach(slide => slide.classList.remove('active-img-slide'));
    imgSlides[index].classList.add('active-img-slide');
}
const changeContentSlide = (index) => {
    contentSlides.forEach(slide => slide.classList.remove('active-content-slide'));
    contentSlides[index].classList.add('active-content-slide');
}

slideControls.forEach((slideControl, index) => {
    slideControl.addEventListener('click', () => {
        changeControl(index);
        changeImgSlide(index)
        changeContentSlide(index)
        console.log(index);
    })
})

// Function for FAQ
let isShowingFAQ = true;

const showFAQ = (element) => {
    if (isShowingFAQ) {
        element.style.transform = 'rotate(180deg)';
        let answer = element.nextElementSibling;
        answer.style.display = 'inline-block';
        isShowingFAQ = false;
    } else {
        element.style.transform = 'rotate(360deg)';
        let answer = element.nextElementSibling;
        answer.style.display = 'none';
        isShowingFAQ = true;
    }
}


// Function for navbar

const navIcons = document.querySelectorAll('.nav-icons span');
const menu = document.querySelector('.menu');
const closeIcon = document.querySelector('#close-icon');
const barsIcon = document.querySelector('#bars-icon');
let isShowingMenu = false;

const showMenu = () => {
}


navIcons.forEach(icon => icon.addEventListener('click', () => {
    console.log('hello')
    if (isShowingMenu) {
        closeIcon.style.display = 'none';
        barsIcon.style.display = 'inline-block'
        menu.style.display = 'none';
        isShowingMenu = false;
    } else {
        closeIcon.style.display = 'inline-block';
        barsIcon.style.display = 'none'
        menu.style.display = 'flex';
        isShowingMenu = true;

    }
}));

