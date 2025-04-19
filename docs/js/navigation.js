
const preloader = document.getElementById("preloader");

document.addEventListener('DOMContentLoaded', () => {
    preloader.style.display = 'none'
})



const viewProjectBtn = document.getElementById("view-project-btn");
viewProjectBtn.addEventListener("click",()=>{
    document.getElementById("projects").scrollIntoView({behavior:"smooth"})
})