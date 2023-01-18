document.querySelector("#loader").style.display = "flex"
document.querySelector("#mainbar").style.display = "none"

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
    //document.querySelector("#mainbar").style.display = "block"
    thing = document.querySelector("#mainbar")
    unfade(thing);
});