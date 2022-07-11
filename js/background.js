export default class Background {
    #counter = randomNumber(0, 5);

    constructor(backgroundElem) {
        this.backgroundElem = backgroundElem;
        this.gradients = ["linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)", "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)", "linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)", "linear-gradient(0deg, #08AEEA 0%, #2AF598 100%)", "linear-gradient(147deg, #FFE53B 0%, #FF2525 74%)", "linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)"];
        this.colors = ["#4158D0", "#0093E9", "#00DBDE", "#08AEEA", "#FFE53B"];
        this.reset();
    }
    
    get backgroundStyle() {
        return [this.backgroundElem.getStyle('background-color'), this.backgroundElem.getStyle('background-image')];
    }

    set backgroundStyle(value) {
        this.backgroundElem.style.setProperty('background-color', value[0]);
        this.backgroundElem.style.setProperty('background-image', value[1]);
    }

    reset() {
        this.backgroundStyle = ['#4158D0', 'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%) no-repeat']; // Set Background of Game
        console.log(this.#counter);
    }

    update() {
        this.backgroundStyle = [this.colors[this.#counter], this.gradients[this.#counter]];
        this.#counter++;
        if(this.#counter >= this.colors.length){
            this.#counter = 0;
        }
    }
}

const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}