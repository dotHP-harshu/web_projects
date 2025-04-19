let headerTL = gsap.timeline();

headerTL
    .from('#header', {
        y: '-100%',
        duration: 1
    })
    .from(".logo", {
        scale: 0,
        duration: 0.5
    })

// Animation for the home section
let homeTL = gsap.timeline();
homeTL
    .from('.left-home p', {
        text: "",
        duration: 2
    })
    .from('.left-home h1', {
        y: "150%",
        duration: 1
    })
    .from(".right-home", {
        opacity: 0,
        duration: 1
    })
    .from(".circle-container", {
        opacity: 0,
        duration: 1
    })


// Animation for about section 
gsap.from(".left-about>img", {
    x: "-100%",
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: '.left-about>img',
        start:"top 40%",
        end:"bottom 50%",
        toggleActions: "play reverse play reverse",
    }
})
gsap.from(".right-about h1", {
    y: "-100%",
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: '.left-about>img',
        start:"top 50%",
        end:"bottom 50%",
        toggleActions: "play reverse play reverse",
    }
})
gsap.from(".right-about p", {
   text:"",
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: '.left-about>img',
        start:"top 50%",
        end:"bottom 50%",
        toggleActions: "play reverse play reverse",
    }
})
gsap.from(".right-about button", {
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: '.left-about>img',
        start:"top 50%",
        end:"bottom 50%",
        toggleActions: "play reverse play reverse",
    }
})