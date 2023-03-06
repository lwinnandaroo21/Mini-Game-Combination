function intialload() {
    const bird = document.getElementById("bird");
    const gameDisplay = document.getElementById('game-container');
    const ground = document.getElementById('ground-moving');
    let birdLeft = 220
    let birdBottom = 0
    let isGameOver = false
    let score = 0;
    let jumping=false;

    function control(e) {
        if (e.keyCode === 32) {
            jump()
        }
    }
    function jump() {
        if (jumping)return;
        let upjump=setInterval(() => {
            if(birdBottom>=250){
                clearInterval(upjump);
                let downjump=setInterval(() => {
                    if(birdBottom<=0){
                        clearInterval(downjump);
                        jumping=false;
                    }
                    birdBottom-=20;
                    bird.style.bottom = birdBottom + 'px';
                }, 20);
            }
            birdBottom += 100
            bird.style.bottom = birdBottom + 'px'
            console.log(birdBottom)
            jumping=true;
        }, 20);
        jumpsound()

    }
document.addEventListener('keyup', control)

    function generateObstacle() {
        
        let obstacleLeft = 750;
        let randomHeight = Math.random() * 60
        let obstacleBottom = randomHeight
        //
        const obstacle = document.createElement('div')
        if (!isGameOver) {
            obstacle.classList.add('obstacle')
        }
        gameDisplay.appendChild(obstacle)
        //
        obstacle.style.left = obstacleLeft + 'px'
        obstacle.style.bottom = obstacleBottom + 'px'
        function moveObstacle() {
            if (!isGameOver) {
            obstacleLeft -= 2
            obstacle.style.left = obstacleLeft + 'px'
            }
            if (obstacleLeft === -50) {
                clearInterval(timerId)
                gameDisplay.removeChild(obstacle)
            }
            if (
                obstacleLeft > 200 && obstacleLeft < 280  &&  birdLeft === 220 && 
                (birdBottom < obstacleBottom + 100) 
                
            ) {
                gameOver();
                losesound()
                clearInterval(timerId);
            }
            else if (obstacleLeft == 160) {
                score += 1;
                document.getElementById("score").innerHTML = +score;
            }
        }
    
        let timerId = setInterval(moveObstacle, 0.5);
        if (!isGameOver) setTimeout(generateObstacle, 800)
        
        bgsound()
        if (isGameOver){bgsoundEnd()}
    }
    generateObstacle()

    function gameOver() {
        console.log('game over')
        isGameOver = true;
        // document.getElementById("box").style.display="block";
        document.getElementById('gameover').style.visibility = "visible";
        document.getElementById('gameover_box').style.display = "block";
        setTimeout(() => {
            document.getElementById("image").style.display="none";
        },900);
        
        document.getElementById("gameOverscore").innerHTML=  "Your Score is"+" "+ score+" "+"!";
        // document.getElementById("box").innerHTML="Game Over!! Your score is "+score;
        // document.getElementById("play").style.display="block";
        document.removeEventListener('keyup', control)
        ground.classList.add('ground')
        ground.classList.remove('ground-moving')
    }
}

timerCount();
let t;
function timerCount() {
    t = setInterval(() => {
        document.getElementById("step").innerHTML -= 1;
        if (document.getElementById("step").innerHTML >= 0) {
            document.getElementById("timer").style.display = "block";
            document.getElementById("step").innerHTML = document.getElementById("step").innerHTML;
            counddown()
        }
        if (document.getElementById("step").innerHTML == -1) {
            document.getElementById("timer").style.display = "none";
            intialload();
        }
    }, 1000);
}

function playAgain(){
    location.assign("example.html");
}

function counddown(){
    document.getElementById("countdown_sound").play();
}

function losesound(){
    document.getElementById("lose_sound").play();
}

function jumpsound(){
    document.getElementById("jump_sound").play();
}
function bgsound(){
    document.getElementById("bg_sound").play();
}
function bgsoundEnd(){
    document.getElementById("bg_sound").pause(); 
}