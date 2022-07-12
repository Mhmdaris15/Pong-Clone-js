import Ball from './ball.js';
import Background from './background.js';

const ball = new Ball(document.getElementById('ball'));
const restart = document.getElementById('restart');
const pause = document.getElementById('pause');
const play = document.getElementById('play');
let PLAY_CLICK_COUNTER = 0;
let reqAnim;

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


