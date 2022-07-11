export default class Background {
    constructor(backgroundElem) {
        this.backgroundElem = backgroundElem;
        this.gradients = ["linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)", "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)", "linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)", "linear-gradient(0deg, #08AEEA 0%, #2AF598 100%)", "linear-gradient(147deg, #FFE53B 0%, #FF2525 74%)", "linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)"]
        this.colors = ["#4158D0", "#0093E9", "#00DBDE", "#08AEEA", "#FFE53B"]
        this.reset();
    }
    
    get backgroundElem() {
        return this.backgroundElem.getStyle('background'), this.backgroundElem.getStyle('background-image');
    }

    set backgroundElem(value) {
        this.backgroundElem.style.background = value[0];
        this.backgroundElem.style.backgroundImage = value[1];
    }

    reset() {
        this.backgroundElem = ['', 'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%) no-repeat']; // Set Background of Game
    }
}

