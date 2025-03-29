// Elements Selections
const fadeRightElement = document.querySelectorAll('.fade-right');
const fadeBottomElement = document.querySelectorAll('.fade-bottom');
const fadeElement = document.querySelectorAll('.fade');
const rightSlideElement = document.querySelectorAll('.right-slide');
// --------------------------------------------------------------------------


// Initial Styling 
// Right Slide 
rightSlideElement.forEach(element => {
    element.style.opacity = 0;
    element.style.transform = "translateX(-50%)";
    element.style.transition = 'all 0.5s';
})
// Fade in
fadeElement.forEach(element => {
    element.style.opacity = 0;
    element.style.transition = 'all 0.5s';
})
// Fade Right 
fadeRightElement.forEach(element => {
    element.style.opacity = 0;
    element.style.transform = 'translateX(100px)';
    element.style.transition = 'all 0.5s';
})
// Fade Bottom
fadeBottomElement.forEach(element => {
    element.style.opacity = 0;
    element.style.transform = 'translateY(100px)';
    element.style.transition = 'all 0.5s';
})
// --------------------------------------------------------------------------


// Animation Callback Functions
// Right Slide 
const rightSlideCallback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateX(0%)";
        } else {
            entry.target.style.opacity = 0;
            entry.target.style.transform = "translateX(-50%)";
        }
    })
}
// Fade in
const fadeCallback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
        } else {
            entry.target.style.opacity = 0;
        }
    })
}
// Fade Right 
const fadeRightCallback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateX(0%)';
        } else {
            entry.target.style.opacity = 0;
            entry.target.style.transform = 'translateX(100px)';
        }
    })
}
// Fade Bottom
const fadeBottomCallback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0%)';
        } else {
            entry.target.style.opacity = 0;
            entry.target.style.transform = 'translateY(100px)';
        }
    })
}
// --------------------------------------------------------------------------


// Oberserver Initialization
// Right Slide 
const rightSlideObserver = new IntersectionObserver(rightSlideCallback, {
    threshold: 0.5,
    root: null
})
// Fade in

const fadeObserver = new IntersectionObserver(fadeCallback, {
    threshold: 0.5,
    root: null
})
// Fade Right 
const fadeRightObserver = new IntersectionObserver(fadeRightCallback, {
    threshold: 0.5,
    root: null
})
// Fade Bottom
const fadeBottomObserver = new IntersectionObserver(fadeBottomCallback, {
    threshold: 0.5,
    root: null
})
// --------------------------------------------------------------------------

// Animation Calls
// Right Slide
rightSlideElement.forEach(element => {
    rightSlideObserver.observe(element);
})
// Fade in
fadeElement.forEach(element => {
    fadeObserver.observe(element);
})
// Fade Right
fadeRightElement.forEach(element => {
    fadeRightObserver.observe(element);
})
// Fade Bottom
fadeBottomElement.forEach(element => {
    fadeBottomObserver.observe(element);
})
// --------------------------------------------------------------------------
