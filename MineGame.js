var p1;
var p2;
var p3;
var p4;
var p5;
var p6;
var p7;
var p8;
var mine;
var finished = false;
var time = 0;

mineBuild();

function mineBuild(){

    var row = Math.floor(Math.random() * 6 + 1);
    var col = Math.floor(Math.random() * 6 + 1);
    mine = row + "" + col;

    p1 = ( row - 1 ) + "" + (col - 1);
    p2 = ( row - 1 ) + "" + col;
    p3 = ( row - 1 ) + "" + ( col + 1);
    p4 = row + "" + ( col - 1 );
    p5 = row + "" + ( col + 1 );
    p6 = ( row + 1 ) + "" + (col - 1);
    p7 = ( row + 1 ) + "" + col;
    p8 = ( row + 1 ) + "" + ( col + 1);

    console.log(mine);
}

function press(obj){
    if (finished == false){
        obj.onclick = "";
        var userpress = Number(obj.id);
        if (userpress == mine) {
            obj.style.backgroundColor = "#ff89bf";
            obj.innerHTML = "BOOM";
            gameover();
            gameoversound();
        }else if( 
            userpress == p1 || userpress == p2 ||
            userpress == p3 || userpress == p4 ||
            userpress == p5 || userpress == p6||
            userpress == p7 || userpress == p8 ){
                obj.style.backgroundColor = "#ff89bf";
                playclick();
        }else{
            obj.style.backgroundColor = "#9fa3e3";
            playclick();

        }
        time += 1;
        if (time == 35){
                gamewin();
                gamewinsound();
        }
    }
}

function gamewin(){
    finished = true;
    for(let index = 0; index <36; index++){
        document.getElementsByClassName("cell")[index].style.backgroundColor = "#72f0ec";
    }

    document.getElementById("32").innerHTML = "G";
    document.getElementById("33").innerHTML = "A";
    document.getElementById("34").innerHTML = "M";
    document.getElementById("35").innerHTML = "E";
    document.getElementById("42").innerHTML = "W";
    document.getElementById("43").innerHTML = "I";
    document.getElementById("44").innerHTML = "N";
    document.getElementById("45").innerHTML = "!";
}

function gameover(){
    finished = true;
    for(let index = 0; index <36; index++){
        document.getElementsByClassName("cell")[index].style.backgroundColor = "#ff89bf";
    }

    document.getElementById("32").innerHTML = "G";
    document.getElementById("33").innerHTML = "A";
    document.getElementById("34").innerHTML = "M";
    document.getElementById("35").innerHTML = "E";
    document.getElementById("42").innerHTML = "O";
    document.getElementById("43").innerHTML = "V";
    document.getElementById("44").innerHTML = "E";
    document.getElementById("45").innerHTML = "R";

}

function playclick(){
    document.getElementById("clickcell").play();
}

function gameoversound(){
    document.getElementById("gameover").play();
}

function gamewinsound(){
    document.getElementById("gamewin").play();
}
