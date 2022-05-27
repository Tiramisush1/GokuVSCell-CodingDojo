var leftValue = 45, 
topValue = 450;

function update(){
document.getElementById("player").style.left = leftValue+"px";
document.getElementById("player").style.top = topValue+"px";
}

document.onkeydown = function(e){
console.log(e);
if(e.keyCode == 37 && leftValue > 20) {  //left
    leftValue = leftValue - 10;
}
else if (e.keyCode == 39 && leftValue < 830) { //right
    leftValue = leftValue + 10;         
}
else if (e.keyCode == 40 && topValue < 500) {  //down
    topValue = topValue + 10;
}
else if (e.keyCode == 38 && topValue > 60) { //up
    topValue = topValue - 10;
}

update();
}