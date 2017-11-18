(function () {

    document.getElementById("btn").addEventListener("click", flippic);

    const myflip = document.getElementById("flip");
    const myimg = document.getElementById("myimg");
    const mytext = document.getElementById("mytext");

    var cardback = false;
    var complete = false;
    function flippic() {
        
        if (cardback) {
            myflip.setAttribute("style", "transform: scaleX(0)");
            console.log("cardback fl if: ", cardback);
        }
        else {
            myflip.setAttribute("style", "transform: scaleX(0)");
            console.log("cardback fl else: ", cardback);
        }
        complete = false;
    }

    document.getElementById("flip").addEventListener("transitionend", function (event) {
        if (!complete) {console.log("complete te: ", complete);
            if (cardback) {console.log("cardback te: ", cardback);
                myimg.src = "./cardfront.png";

                mytext.innerHTML = "Card Front";
                
                myflip.setAttribute("style", "transform: scaleX(1)");
                cardback = false;
            }
            else {
                myimg.src = "./cardback.png";

                mytext.innerHTML = "Card Back";
                mytext.style.left = "15px";

                myflip.setAttribute("style", "transform: scaleX(1)");
                cardback = true;
            }
            complete = true;
        }

    }, false);


})();
