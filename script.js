var leftValue = 45, 
topValue = 450;

function update(){
document.getElementById("player").style.left = leftValue+"px";
document.getElementById("player").style.top = topValue+"px";
}

document.onkeydown = function(e){
console.log(e);
if(e.keyCode == 37 && leftValue > 20) {  //izquierda
    leftValue = leftValue - 10;
    document.getElementById("player").style.left = leftValue + "px";
    document.getElementById("player").style.backgroundImage = "url('imag/gokuleft.png')"
}
else if (e.keyCode == 39 && leftValue < 785) { //derecha
    leftValue = leftValue + 10;         
    document.getElementById("player").style.left = leftValue + "px";
    document.getElementById("player").style.backgroundImage = "url('imag/gokuright.png')"
}
else if (e.keyCode == 40 && topValue < 500) {  //abajo
    topValue = topValue + 10;
    document.getElementById("player").style.top = leftValue + "px";
    document.getElementById("player").style.backgroundImage = "url('imag/gokudown.png')"
}
else if (e.keyCode == 38 && topValue > 60) { //arriba
    topValue = topValue - 10;
    document.getElementById("player").style.top = leftValue + "px";
    document.getElementById("player").style.backgroundImage = "url('imag/gokuup.png')"
}
update();
}