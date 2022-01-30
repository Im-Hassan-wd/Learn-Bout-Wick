const bird = document.querySelector(".bird");
console.log(bird)
const button = document.querySelector("button");
let gameArea = document.querySelector(".game-area");

//event listerners
window.addEventListener("keydown", (e) => {
    moveUp(e);
});
button.addEventListener("click", expandWorld);

//function
function moveUp(e) {
    const key = e.key;

    if(key == 'ArrowUp') {
        bird.style.transform = "translateY(0px)";
    }
    else if(key == 'ArrowDown') {
        console.log("you pressed" + key)
        bird.style.transform = "translateY(30px)";
    }
}

function expandWorld() {
    gameArea.style.width = window.outerWidth + "px";
    setInterval(() => {
        window.outerWidth += 100;
        gameArea.style.width = window.outerWidth + "px";
    }, 1000);
}