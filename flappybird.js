function intialload() {
    const bird = document.getElementById("bird");
    const gameDisplay = document.getElementById('game-container');
    const ground = document.getElementById('ground-moving');
    let birdLeft = 220
    let birdBottom = 100
    let gravity = 3
    let isGameOver = false
    let gap = 460
    let score = 0;  

    function startGame() {
        birdBottom -= gravity
        bird.style.bottom = birdBottom + 'px'
        bird.style.left = birdLeft + 'px'
        console.log(birdBottom)
    }
    let gameTimerId = setInterval(startGame, 20)

    function control(e) {
        if (e.keyCode === 32) {
            jump()
        }
    }

    function jump() {
        if (birdBottom < 500){
            birdBottom += 50
            bird.style.bottom = birdBottom + 'px'
        } 
        jumpsound();
    }
    document.addEventListener('keyup', control)

    function generateObstacle() {
        
        let obstacleLeft = 750;
        let randomHeight = Math.random() * 60
        let obstacleBottom = randomHeight
        //
        const obstacle = document.createElement('div')
        const topObstacle = document.createElement('div')
        if (!isGameOver) {
            obstacle.classList.add('obstacle')
            topObstacle.classList.add('topObstacle')
            // bgsound()
        }
        gameDisplay.appendChild(obstacle)
        gameDisplay.appendChild(topObstacle)
        //
        obstacle.style.left = obstacleLeft + 'px'
        topObstacle.style.left = obstacleLeft + 'px'
        obstacle.style.bottom = obstacleBottom + 'px'
        topObstacle.style.bottom = obstacleBottom + gap + 'px'

        function moveObstacle() {
            if (!isGameOver) {
            obstacleLeft -= 2
            obstacle.style.left = obstacleLeft + 'px'
            topObstacle.style.left = obstacleLeft + 'px'
            }
            if (obstacleLeft === -40) {
                clearInterval(timerId)
                gameDisplay.removeChild(obstacle)
                gameDisplay.removeChild(topObstacle)
            }
            if (obstacleLeft > 200 && obstacleLeft < 280  &&  birdLeft === 220 && 
                (birdBottom < obstacleBottom + 160 || birdBottom > obstacleBottom + gap - 200) ||
                birdBottom === 1) {
                gameOver();
                losesound();

                clearInterval(timerId);
                // alert("Game Over!! Your Score is " + score);
                // window.location.assign("hh.html");
            }
            else if (obstacleLeft == 220) {
                score += 1;
                document.getElementById("score").innerHTML = +score;
            }
        }
    
        let timerId = setInterval(moveObstacle, 10);
        if (!isGameOver) {setTimeout(generateObstacle, 1500)}
        
        bgsound()
        if (isGameOver){bgsoundEnd()}
    }
    generateObstacle()

    function gameOver() {
        clearInterval(gameTimerId)
        console.log('game over')
        isGameOver = true;
        // document.getElementById("box").style.display="block";
        document.getElementById('gameover').style.visibility = "visible";
        document.getElementById('score').style.visibility = "hidden";

        setTimeout(() => {
            document.getElementById("image").style.display="none";
        },1000);
        
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
            counddown();
        }
        if (document.getElementById("step").innerHTML == -1) {
            document.getElementById("timer").style.display = "none";

            intialload();
        }
    }, 1000);

}

function playAgain(){
    location.assign("flappybird.html");
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