// Function to show menu on click on bar menu icon
let isClick = true;
document.querySelectorAll(".menu-icon").forEach(icon => {
    icon.addEventListener('click', () => {
        if (isClick) {
            document.querySelector("#menu").style.display = "flex";
            document.querySelector("#cross-icon").style.display = "inline-block";
            document.querySelector("#menu-icon").style.display = "none";
            isClick = false;
        } else {
            document.querySelector("#menu").style.display = "none";
            document.querySelector("#cross-icon").style.display = "none";
            document.querySelector("#menu-icon").style.display = "inline-block";
            isClick = true;
        }

    })
});
// Function End -----------------------------------------------------------------------

// Function to show that form is submitted 
function submitForm() {
    console.log('submit was clicked');
    document.querySelector('.submit-msg').style.display = "block";
    // write a function that refresh the window and redirect on home page
    setInterval(
        function() {
            document.querySelector('.submit-msg').style.display = "none";
        }, 3000);
}
// Function End -----------------------------------------------------------------------


// Intersection Observer API


document.addEventListener("DOMContentLoaded", function() {
    const lazyImages = document.querySelectorAll("img.lazy-load");
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.onload = () => {
                    img.classList.add("loaded");
                };
                imageObserver.unobserve(img);
            }
        });
    });

    lazyImages.forEach(image => {
        imageObserver.observe(image);
    });
});