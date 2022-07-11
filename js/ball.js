const INITIAL_VELOCITY = 0.01; 

export default class Ball {
    constructor(ballElem) {
        this.ballElem = ballElem;
        this.reset();
    }

    get x() {
        return parseFloat(getComputedStyle(this.ballElem).getPropertyValue('--x'));
    }

    set x(value) {
        this.ballElem.style.setProperty('--x', value);
    }

    get y() {
        return parseFloat(getComputedStyle(this.ballElem).getPropertyValue('--y'));
    }

    set y(value) {
        this.ballElem.style.setProperty('--y', value);
    }
    
    rect(){
        return this.ballElem.getBoundingClientRect();
    }

    reset() {
        this.x = 50;
        this.y = 50;
        this.direction = {
            x: 0,
        };
        while (Math.abs(this.direction.x) <= 0.2 || Math.abs(this.direction.x) >= 0.9) {
            const heading = randomNumberBetween(0, Math.PI * 2);
            this.direction = {
                x: Math.cos(heading),
                y: Math.sin(heading)
            };
            // console.log(heading);
            // console.log(this.direction);
        }
        this.velocity = INITIAL_VELOCITY
    }

    update(deltaTime) {
        this.x += this.direction.x * this.velocity * deltaTime;
        this.y += this.direction.y * this.velocity * deltaTime;
        const rect = this.rect();
        if (rect.bottom > window.innerHeight || rect.top < 0) {
            this.direction.y *= -1;
        }
        if (rect.left < 0 || rect.right > window.innerWidth) {
            this.direction.x *= -1;
        }
    }
}

function randomNumberBetween(min, max) {
    return Math.random() * (max - min) + min;
}