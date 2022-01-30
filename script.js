const bird = document.querySelector(".bird");

window.addEventListener("keydown", (e) => {
    moveUp(e);
});

function moveUp(e) {
    const key = e.key;

    if(key == 'ArrowUp') {
        console.log("you pressed" + key)
    }
    else if(key == 'ArrowDown') {
        console.log("you pressed" + key)
    }
}