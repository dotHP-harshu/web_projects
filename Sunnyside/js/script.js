// Load content 

window.addEventListener('load', () => {
    document.getElementById('preloader').style.display = 'none';
})


// Shoe menu 
const navIcons = document.querySelectorAll('.nav-icons span');
const nav = document.getElementsByTagName('nav')[0];

let isShowingNav = false;
navIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        if (!isShowingNav) {
            document.querySelector('#hamburger').style.opacity = 0;
            document.querySelector('#close').style.opacity = 1;
            nav.style.display = 'flex';
            isShowingNav = true;
        } else {
            document.querySelector('#hamburger').style.opacity = 1;
            document.querySelector('#close').style.opacity = 0;
            nav.style.display = 'none';
            isShowingNav = false;
        }
        console.log("click")
    })
})


//  Create pop up window

let moreBtn = document.querySelectorAll('.more-btn');
const createPop = (element, index) => {
    const bgColor = ["FECF00", 'FF7664'];
    console.log(element)
    let para = element.previousElementSibling;
    let heading = para.previousElementSibling;

    let popHeading = document.createElement('h4');
    let popPara = document.createElement('p');
    let pop = document.createElement('div');
    let closeIcone = document.createElement('div')


    popHeading.classList.add("pop-heading", "heading");
    popPara.classList.add('pop-para', 'para');
    pop.classList.add('pop');
    closeIcone.setAttribute('id', "close-icon");

    popHeading.innerText = heading.textContent;
    popPara.innerText = para.textContent;
    closeIcone.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    pop.style.background = '#' + bgColor[index];

    pop.prepend(popHeading);
    pop.append(popPara);
    pop.append(closeIcone);

    const popWindow = document.getElementById('pop-window')
    popWindow.append(pop);
    popWindow.style.display = 'flex';

    closeIcone.addEventListener('click', () => {
        popWindow.style.display = 'none';
        pop.remove()
    })


}

moreBtn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        console.log('click')
        createPop(btn, index);
    })
})