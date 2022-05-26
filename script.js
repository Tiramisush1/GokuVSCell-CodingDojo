var player = {
    top:450,
    left:40
}

var enemy = {
    top:450,
    left:800
}

var projectile = []

function drawPlayer() {
    content = "<div class='player' style='left: "+player.left+"px; top: "+player.top+"px'></div>";
}
function drawEnemy(){
    content= "";
    for(var i=0; i<enemy.lenght; i++) {
        content += "<div class='enemy' style='left: "+enemies[i].left+"px; top: "+enemies[i].top+"px'></div>";
    }
    document.getElementById('enemy').innerHTML = content;
}

document.onkeydown = function(e){
    console.log(e);
    if(e.keyCode == 37 && leftValue > 0) {  //left
        leftValue = leftValue - 10;
    }
    else if (e.keyCode == 39 && leftValue < 875) { //right
        leftValue = leftValue + 10;         
    }
    else if (e.keyCode == 40 && topValue < 450) {  //down
        topValue = topValue + 10;
    }
    else if (e.keyCode == 38 && topValue > 0) { //up
        topValue = topValue - 10;
    }
    update();
    }

    drawPlayer();

function gameLoop() {

        drawPlayer();
        drawEnemy();
}
gameLoop();