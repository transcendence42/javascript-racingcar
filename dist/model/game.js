import { RULE } from '../constants/index.js';
class Game {
    constructor(cars) {
        this.cars = cars;
        this.finalWinners = [];
        this.roundWinnersIndex = [];
        this.maxPosition = 0;
    }
    play() {
        this.cars.forEach((car) => {
            if (Math.floor(Math.random() * RULE.MAX_SCORE) + RULE.MIN_SCORE >= RULE.THRESHOULD_SCORE) {
                car.moveForward();
                this.roundWinnersIndex.push(car.index);
                this.updateMaxPosition();
            }
        });
    }
    updateMaxPosition() {
        this.cars.forEach((car) => {
            if (car.position > this.maxPosition) {
                this.maxPosition = car.position;
            }
        });
    }
    initRoundWinnersIndex() {
        this.roundWinnersIndex = [];
    }
    getWinners() {
        this.cars.forEach((car) => {
            if (car.position === this.maxPosition) {
                this.finalWinners.push(car.name);
            }
        });
        return this.finalWinners;
    }
}
export { Game };
