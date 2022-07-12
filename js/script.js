import Ball from './Ball.js';
import Background from './Background.js';
import Paddle from './Paddle.js';

const ball = new Ball(document.getElementById('ball'));
const paddlePlayer = new Paddle(document.getElementById('paddle-player'));
const paddleComputer = new Paddle(document.getElementById('paddle-computer'));

const restart = document.getElementById('restart');
const pause = document.getElementById('pause');
const play = document.getElementById('play');
let PLAY_CLICK_COUNTER = 0;
let reqAnim;

document.addEventListener("mousemove", e => {
    paddlePlayer.position = e.y / window.innerHeight * 100;
})

restart.addEventListener('click', () => {
    ball.reset();
});

pause.addEventListener('click', () => {
    if (pause.innerHTML === 'Pause') {
        pause.innerHTML = 'Resume';
        pauseIt();
    } else {
        pause.innerHTML = 'Pause';
        window.requestAnimationFrame(update);
    }
})


let lastTime;

function update(time) {0
    if (lastTime != null) {
        let deltaTime = time - lastTime; // time difference between last frame and current frame in milliseconds
        ball.update(deltaTime);
    }
    lastTime = time; // remember time for next frames
    reqAnim = window.requestAnimationFrame(update);
}

function pauseIt(){
    window.cancelAnimationFrame(reqAnim);
}

play.addEventListener('click', () => {
    if (PLAY_CLICK_COUNTER === 0) {
        reqAnim = window.requestAnimationFrame(update);
        PLAY_CLICK_COUNTER++;
    }
    PLAY_CLICK_COUNTER++;
});


