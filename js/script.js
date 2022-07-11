import Ball from './ball.js';
import Background from './background.js';

const ball = new Ball(document.getElementById('ball'));
const background = new Background(document.body);

let lastTime;

function update(time) {0
    if (lastTime != null) {
        let deltaTime = time - lastTime; // time difference between last frame and current frame in milliseconds
        ball.update(deltaTime);
    }
    lastTime = time; // remember time for next frames
    window.requestAnimationFrame(update);
}

window.requestAnimationFrame(update);