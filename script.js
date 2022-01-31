const bird = document.querySelector(".bird");
console.log(bird)
const button = document.querySelector("button");
let gameArea = document.querySelector(".game-area");
let distance = 10;

//event listerners
window.addEventListener("keypress", (e) => moveUp(e));
window.addEventListener("keyup", (e) => moveDown(e));
button.addEventListener("click", expandWorld);

//function
function moveDown(e) {
    const key = e.key;

    if(key == ' ') {
        bird.style.transform = "translateY(100px)";
    }
    else if(key == 'ArrowDown') {
        distance += 5; 
        
    }
}

function moveUp(e) {
    const key = e.key;

    if (key == ' ') {
        bird.style.transform = "translateY(50px)";
    }
}

function expandWorld() {
    gameArea.style.width = window.outerWidth + "px";
    setInterval(() => {
        window.outerWidth += 100;
        gameArea.style.width = window.outerWidth + "px";
    }, 5000);
}