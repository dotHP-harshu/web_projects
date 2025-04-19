function loader() {
    const preloader = document.querySelector('#preloader');
    preloader.style.display = 'none';
}
// -------------------------------------------
function loadLanguage(element) {
    let selectedLanguage = element.value;


    if (selectedLanguage === 'hindi') {
        window.location.href = 'hindi.html';
        option[1].selected = true;
    } else if (selectedLanguage === 'english') {
        window.location.href = 'index.html';
        option[0].selected = true;
    }
}

// ------------------------------------------------

let showingAnswer = true;
function showAnswer(element) {

    console.log("clicked")
    const answer = element.nextElementSibling;
    const icon = element.querySelector('.icon');
    if (showingAnswer) {
        console.log(`answer.style.display = 'none`);
        answer.style.display = 'inline-block';
        icon.style.transform = 'rotate(45deg)'
        showingAnswer = false;
    }
    else {
        console.log(`answer.style.display = 'inline-block`);
        answer.style.display = 'none';
        icon.style.transform = 'rotate(0deg)';
        showingAnswer = true;
    }
}