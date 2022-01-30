const bird = document.querySelector(".bird");
const button = document.querySelector("button");
const gameArea = document.querySelector(".game-area");

//event listerners
window.addEventListener("keydown", (e) => {
    moveUp(e);
});
button.addEventListener("click", expandWorld);

//function
function moveUp(e) {
    const key = e.key;

    if(key == 'ArrowUp') {
        console.log("you pressed" + key)
    }
    else if(key == 'ArrowDown') {
        console.log("you pressed" + key)
    }
}

function expandWorld() {
    
}