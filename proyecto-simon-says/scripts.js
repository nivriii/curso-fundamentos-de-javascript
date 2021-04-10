const lightBlue = document.getElementById('lightBlue');
const violet = document.getElementById('violet');
const orange = document.getElementById('orange');
const green = document.getElementById('green');
const startButton = document.getElementById('startButton');
const LAST_LEVEL = 10;

class Juego {
    constructor() {
        this.initialize = this.initialize.bind(this);
        this.initialize();
        this.generateSequence();
        setTimeout(this.nextLevel(), 500);
    }

    initialize() {
        this.nextLevel = this.nextLevel.bind(this);
        this.chooseColor = this.chooseColor.bind(this);
        this.toggleStartButton();
        this.level = 1;
        this.colors = {
            lightBlue,
            violet,
            orange,
            green
        }
    }

    toggleStartButton(){
        startButton.classList.contains('hide') ? startButton.classList.remove('hide') : startButton.classList.add('hide');
    }

    generateSequence(){
        this.sequence = new Array(LAST_LEVEL).fill(0).map(n => Math.floor(Math.random() * 4));
    }

    nextLevel() {
        this.subLevel = 0;
        this.illuminateSequence();
        this.addClickEvents();
    }

    illuminateSequence() {
        for (let i = 0; i < this.level; i++) {
            const color = this.transformNumberToColor(this.sequence[i]);
            setTimeout(() => this.iluminateColor(color), 1000 * i);
        }
    }

    transformNumberToColor(number){
        switch (number) {
            case 0:
                return 'lightBlue';

            case 1:
                return 'violet';

            case 2:
                return 'orange';

            case 3:
                return 'green';
        }
    }

    transformColorToNumber(color){
        switch (color) {
            case 'lightBlue':
                return 0;

            case 'violet':
                return 1;

            case 'orange':
                return 2;

            case 'green':
                return 3;
        }
    }

    iluminateColor(color){
        this.colors[color].classList.add('light');
        setTimeout(() => this.turnOffColor(color), 350);
    }

    turnOffColor(color){
        this.colors[color].classList.remove('light');
    }

    addClickEvents(){
        this.colors.lightBlue.addEventListener('click', this.chooseColor);
        this.colors.violet.addEventListener('click', this.chooseColor);
        this.colors.orange.addEventListener('click', this.chooseColor);
        this.colors.green.addEventListener('click', this.chooseColor);
    }

    removeClickEvents(){
        this.colors.lightBlue.removeEventListener('click', this.chooseColor);
        this.colors.violet.removeEventListener('click', this.chooseColor);
        this.colors.orange.removeEventListener('click', this.chooseColor);
        this.colors.green.removeEventListener('click', this.chooseColor);
    }

    chooseColor(event){
        const colorName = event.target.dataset.color;
        const colorNumber = this.transformColorToNumber(colorName);
        this.iluminateColor(colorName);
        if (colorNumber === this.sequence[this.subLevel]) {
            this.subLevel++;
            if (this.subLevel === this.level) {
                this.level++;
                this.removeClickEvents();
                if (this.level === (LAST_LEVEL + 1)) {
                    this.wonGame();
                } else {
                    setTimeout(this.nextLevel, 1500);
                }

            }
        } else {
            this.lostGame();
        }
    }

    wonGame(){
        swal({
            title: "¡Ganaste el juego!",
            text: "Felicitaciones por llegar al ultimo nivel.",
            icon: "success",
            button: "Volver a jugar",
        }).then(this.initialize);
    }

    lostGame(){
        swal({
            title: "¡Upss!",
            text: "Lo lamentamos perdiste.",
            icon: "error",
            button: "Reintentar",
        }).then(() => {
            this.removeClickEvents();
            this.initialize();
        });
    }

}

function startGame() {
    var juego = new Juego();
}