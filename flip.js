(function () {

    document.getElementById("btn").addEventListener("click", flippic);
    var back = false;
    function flippic() {
        var myimg = document.getElementById("flip");
        myimg.setAttribute("style", "transform: scaleX(0)");
    }

    document.getElementById("flip").addEventListener("transitionend", function (event) {
        console.log("complete");
        var myimg = document.getElementById("myimg");
        myimg.src = "./cardback.png";
        var mytext = document.getElementById("mytext");
        mytext.innerHTML = "Card Back";
        mytext.style.left = "15px";
        var myflip = document.getElementById("flip");
        myflip.setAttribute("style", "transform: scaleX(1)");
    }, false);


})();
