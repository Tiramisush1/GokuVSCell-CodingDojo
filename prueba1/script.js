let goku = document.getElementById("player");
let speed = 20; //<----cambiar speed
let mTop = 0;
let mLeft = 0;

document.addEventListener("keydown", function (e) {
    if (e.keyCode == "39") {
        //Right
        moveRight();
    }

    if (e.keyCode == "37") { //Left
        moveLeft();
    }
    if (e.keyCode == "40") { //ABAJO
        moveAbajo();
    }
    if (e.keyCode == "38") { //ARRIBA
        moveArriba();
    }
});

function moveRight() {
    mLeft += speed;
    player.style.marginLeft = mLeft + "px";
}

function moveLeft() {
    mLeft -= speed;
    player.style.marginLeft = mLeft + "px";
}
function moveArriba() {
    mTop -= speed;
    player.style.marginTop = mTop + "px";
}

function moveAbajo() {
    mTop += speed;
    player.style.marginTop = mTop + "px";
}
