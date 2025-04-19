// let height = document.getElementsByTagName("header")[0]
// console.log(height.to)
const homeSection = document.getElementById("home");
const headerSection = document.getElementById("header");
const menu = document.getElementById('menu');

document.addEventListener("scroll", ()=>{
    let scollY = window.scrollY;
    if(scollY>150){
        headerSection.style.color = 'black';
        headerSection.style.backgroundColor = "white";
        headerSection.style.boxShadow = "0px 1px 10px gray";
    }else{
        headerSection.style.color = 'white';
        headerSection.style.backgroundColor = "transparent";
        headerSection.style.boxShadow = "none";
    }
})