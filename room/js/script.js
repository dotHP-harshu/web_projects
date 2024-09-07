const slides = document.querySelectorAll('.slide');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const contentSlides = document.querySelectorAll('.content')

let slideNum = 0;


// Add specific classes to slides
for (let i = 0; i < slides.length; i++) {
    slides[i].classList.add(`slide-${(i + 1)}`);
}

const showSlide = (slideNum) => {
    slides.forEach(slide => slide.classList.remove('active-slide'));
    slides[slideNum].classList.add('active-slide');
    contentSlides.forEach(slide => slide.classList.remove('active-content'));
    contentSlides[slideNum].classList.add('active-content');
}


nextBtn.addEventListener('click', () => {
    slideNum++;
    if (slideNum >= slides.length) {
        slideNum = 0;
        showSlide(slideNum);
    } else {
        showSlide(slideNum);
    }
})

prevBtn.addEventListener('click', () => {
    slideNum--;
    if (slideNum < 0) {
        slideNum = slides.length - 1;
        showSlide(slideNum);
    } else {
        showSlide(slideNum);
    }
})


let isShowingMenu = false;
const navIcon = document.querySelectorAll('.nav-icon span')
const crossIcon = document.querySelector('#icon-cross')
const menuIcon = document.querySelector('#icon-menu')
const menu = document.querySelector('.menu');


function showMenu() {
    if (isShowingMenu) {
        menuIcon.style.display = 'inline-block';
        crossIcon.style.display = 'none';
        menu.style.display = 'none';
        isShowingMenu = false;
    } else {
        menuIcon.style.display = 'none';
        crossIcon.style.display = 'inline-block';
        menu.style.display = 'flex';
        isShowingMenu = true;
    }
}


navIcon.forEach(icon => icon.addEventListener('click', () => {
    showMenu();
}));

