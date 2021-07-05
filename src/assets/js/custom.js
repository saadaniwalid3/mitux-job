/*==================================================================================
    Custom JS (Any custom js code you want to apply should be defined here).
====================================================================================*/

// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > document.getElementById("presentation").scrollHeight
        || document.documentElement.scrollTop > document.getElementById("presentation").scrollHeight) {
        document.getElementById("logomitux").style.visibility = "visible";
    } else {
        document.getElementById("logomitux").style.visibility = "hidden";
    }
}
