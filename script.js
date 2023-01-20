document.querySelector("#mainbar").style.display = "none"
document.querySelector("#loader").style.display = "flex"

// this bit creates a "loader" and fade-in for the website while its resources are being processed 
window.addEventListener("load", function() {
    function unfade(thing) {
        var op = 0.1;  // initial opacity
        thing.style.display = 'block';
        var timer = setInterval(function () {
            if (op >= 1){
                clearInterval(timer);
            }
            thing.style.opacity = op;
            thing.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op += op * 0.1;
        }, 20);
    }
    document.querySelector("#loader").style.display = "none"
    thing = document.querySelector("#mainbar")
    unfade(thing);
});

// this bit creates variables out of the language buttons and out of the language-labelled sections of the website
const languageSpanishButton = document.querySelectorAll("#languages h2")[0];
const languageEnglishButton = document.querySelectorAll("#languages h2")[1];
const languageSpanishComponents = document.querySelectorAll(".spanish");
const languageEnglishComponents = document.querySelectorAll(".english");

// this bit makes sure the website changes in response to the language buttons being clicked 
languageSpanishButton.onclick = function() {
    languageSpanishButton.style.color = "blue";
    for (var i = 0; i < languageEnglishComponents.length; i++) {
        languageEnglishButton.style.color = "inherit"
        languageSpanishButton.style.color = "#a01313"
        languageEnglishComponents[i].style.display = "none"
        languageSpanishComponents[i].style.display = "block"
    }
};

languageEnglishButton.onclick = function() {
    languageEnglishButton.style.color = "blue";
    for (var i = 0; i < languageEnglishComponents.length; i++) {
        languageSpanishButton.style.color = "inherit"
        languageEnglishButton.style.color = "#a01313"
        languageSpanishComponents[i].style.display = "none"
        languageEnglishComponents[i].style.display = "block"
    }
};