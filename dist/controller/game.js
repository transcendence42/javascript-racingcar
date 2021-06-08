var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ALERT, DELAY } from '../constants/index.js';
import { Car, Game } from '../model/index.js';
import { renderArrowDiv, renderResultSection } from '../view/renderer.js';
import { setRestartButtonEvent } from './event.js';
import { makeDelay } from '../utils.js';
import { removeSpinners } from '../view/remover.js';
const createCarsObject = (carNameArray) => {
    const cars = [];
    carNameArray.forEach((car, index) => {
        cars.push(new Car(car, index));
    });
    return cars;
};
const playOnce = (racingGame) => {
    racingGame.play();
    racingGame.roundWinnersIndex.forEach((roundWinnerIndex) => {
        renderArrowDiv(roundWinnerIndex);
    });
    racingGame.initRoundWinnersIndex();
};
const startGame = (carNameArray, tryCount) => __awaiter(void 0, void 0, void 0, function* () {
    const racingGame = new Game(createCarsObject(carNameArray));
    let racingWinners = [];
    for (let index = 0; index < tryCount; index += 1) {
        yield makeDelay(DELAY.TURN).then(() => playOnce(racingGame));
    }
    removeSpinners();
    racingWinners = racingGame.getWinners();
    renderResultSection(racingWinners.join(', ').toLowerCase());
    yield makeDelay(DELAY.END).then(() => alert(racingWinners.join(', ') + ALERT.CONGRATULATION));
    setRestartButtonEvent();
});
export { startGame };
