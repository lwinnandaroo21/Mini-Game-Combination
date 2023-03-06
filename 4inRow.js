let row1 = [0, 0, 0, 0];
let row2 = [0, 0, 0, 0];
let row3 = [0, 0, 0, 0];
let row4 = [0, 0, 0, 0];

var first = 1;
var second = 2;
var current = first;
var finished = false;
var time = 0;

// document.getElementById("winner_box").style.visibility = "hidden";

function flip(obj) {
    if (!finished) {
        obj.onclick = "";
        let valid = true;
        let tmp = obj.id.split(",");
        let row = Number(tmp[0]);
        let col = Number(tmp[1]);
        switch (row) {
            case 1:
                if (row1[col] != 0) {
                    valid = false;
                } else {
                    row1[col] = current;
                }
                break;
            case 2:
                if (row2[col] != 0) {
                    valid = false;
                } else {
                    row2[col] = current;
                }
                break;
            case 3:
                if (row3[col] != 0) {
                    valid = false;
                } else {
                    row3[col] = current;
                }
                break;
            case 4:
                if (row4[col] != 0) {
                    valid = false;
                } else {
                    row4[col] = current;
                }
                break;
        }
        if (valid) {
            obj.style.trasform = "scaleY(-1)";

            if (current == first) {
                obj.style.background = "#84a366";
                document.getElementById("turn").innerHTML = "Player 2 turn!";
                document.getElementById("turn").style.color = "#0fbebe";
                current = second;
            } else {
                obj.style.background = "#0fbebe";
                document.getElementById("turn").innerHTML = "Player 1 turn!";
                document.getElementById("turn").style.color = "#84a366";
                current = first;
            }
        }
        time += 1;
        checkWin();
        if (time == 16){
            if(!finished){
                draw();
            }
        }

    }
}
function draw(){
    document.getElementById("winner").innerHTML = "DRAW!!!";
}
function checkWin() {
    if (vertical(first) == true) {
        //document.getElementById(winner_box).style.visibility = 'visible';
        document.getElementById("turn").innerHTML = "";
        document.getElementById("winner").innerHTML = "Player 1 Win";
    document.getElementById("gam").style.visibility = "visible";

        finished = true;

    } else if (vertical(second) == true) {
        document.getElementById("turn").innerHTML = "";
        document.getElementById("winner").innerHTML = "Player 2 Win";
    document.getElementById("gameover").style.visibility = "visible";

        finished = true;
    }
    if (horizontal(first) == true) {
        document.getElementById("turn").innerHTML = "";
        document.getElementById("winner").innerHTML = "Player 1 Win";
    document.getElementById("gameover").style.visibility = "visible";

        finished = true;

    } else if (horizontal(second) == true) {
        document.getElementById("turn").innerHTML = "";
        document.getElementById("winner").innerHTML = "Player 2 Win";
    document.getElementById("gameover").style.visibility = "visible";
    finished = true;
    }
    if (diagonal(first) == true) {
        document.getElementById("turn").innerHTML = "";
        document.getElementById("winner").innerHTML = "Player 1 Win";
    document.getElementById("gameover").style.visibility = "visible";
    finished = true;

    } else if (diagonal(second) == true) {
        document.getElementById("turn").innerHTML = "";
        document.getElementById("winner").innerHTML = "Player 2 Win";
    document.getElementById("gameover").style.visibility = "visible";

        finished = true;
    }
}

function vertical(player) {
    for (let index = 0; index < 4; index++) {
        if (row1[index] == player &&
            row2[index] == player &&
            row3[index] == player &&
            row4[index] == player) {
            return true;
        }
    }
    return false;
}

function horizontal(player) {
    if ((row1[0] == player &&
        row1[1] == player &&
        row1[2] == player &&
        row1[3] == player) ||

        (row2[0] == player &&
        row2[1] == player &&
        row2[2] == player &&
        row2[3] == player) ||
        
        (row3[0] == player &&
        row3[1] == player &&
        row3[2] == player &&
        row3[3] == player) ||
        
        (row4[0] == player &&
        row4[1] == player &&
        row4[2] == player &&
        row4[3] == player)) {
        return true;
    }
    return false;
}

function diagonal(player) {
    if (row1[0] == player &&
        row2[1] == player &&
        row3[2] == player &&
        row4[3] == player) {
        return true;
    }
    if (row1[3] == player &&
        row2[2] == player &&
        row3[1] == player &&
        row4[0] == player) {
        return true;
    }
    return false;
}

function playAgain(){
    location.assign("4inRow.html");
}
