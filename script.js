let numSquares = 6;
let colors = [];
let pickedColor;
let squares = document.querySelectorAll(".square");
let colorDisplay = document.querySelector("#color-display")
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");
let easyButton = document.querySelector(".mode");

init();
function init(){
    colorDisplay.textContent = pickedColor;
    setupSquares();
    setupMode();
    reset();
}

function setupSquares(){
    for (var i=0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].addEventListener("click", function(){
            let clickedColor = this.style.backgroundColor;
            if (clickedColor == pickedColor){
                messageDisplay.textContent = "correct";
                resetButton.textContent = "Play Again";
                changeColors(pickedColor);
            }
            else{
                this.style.backgroundColor = "grey";
                messageDisplay.textContent = "Try Again";
            }
        })
    }
}