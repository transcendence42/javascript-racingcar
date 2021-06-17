var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Car } from './Car.js';
import { RULE } from '../constants.js';
class Game {
    constructor(carNameArray) {
        this.cars = [];
        this.finalWinners = [];
        this.roundWinners = [];
        this.maxPosition = 0;
        this.setCarsObject(carNameArray);
    }
    play() {
        this.cars.forEach((car) => {
            if (Math.floor(Math.random() * RULE.MAX_SCORE) + RULE.MIN_SCORE >= RULE.THRESHOULD_SCORE) {
                car.moveForward();
                this.roundWinners.push(car.index);
            }
        });
        this.updateMaxPosition();
    }
    setCarsObject(carNameArray) {
        carNameArray.forEach((car, index) => {
            this.cars.push(new Car(car, index));
        });
    }
    ;
    makeDelay(ms) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((r) => setTimeout(r, ms));
        });
    }
    ;
    updateMaxPosition() {
        this.cars.forEach((car) => {
            if (car.position > this.maxPosition) {
                this.maxPosition = car.position;
            }
        });
    }
    initRoundWinners() {
        this.roundWinners = [];
    }
    judgeFinalWinners() {
        this.cars.forEach((car) => {
            if (car.position === this.maxPosition) {
                this.finalWinners.push(car.name);
            }
        });
    }
}
export { Game };
