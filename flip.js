(function () {

    document.getElementById("btn").addEventListener("click", flippic);

    const myflip = document.getElementById("flip");
    const myimg = document.getElementById("myimg");
    const mytext = document.getElementById("mytext");

    var cardback = false;
    var complete = false;
    var activelyflipping = false;

    function flippic() {

        if (!activelyflipping) {

            myflip.setAttribute("style", "transform: scaleX(0)");
            complete = false;
            activelyflipping = true;
        }
    }

    myflip.addEventListener("transitionend", function (event) {
        if (!complete) {
            if (cardback) {
                myimg.src = "./cardfront.png";

                mytext.innerHTML = "Card Front";
                mytext.style.color = "black";
                
                myflip.setAttribute("style", "transform: scaleX(1)");
                cardback = false;
            }
            else {
                myimg.src = "./cardback.png";

                mytext.innerHTML = "Card Back";
                mytext.style.left = "15px";
                mytext.style.color = "white";
                myflip.setAttribute("style", "transform: scaleX(-1)");
                myflip.setAttribute("style", "transform: scaleX(1)");
                cardback = true;
            }
            complete = true;
            activelyflipping = false;
        }

    }, false);


})();
