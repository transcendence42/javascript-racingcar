var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ALERT } from '../constants/alert.js';
import { Car, Game } from '../model/index.js';
import { renderArrowDiv, renderResultSection } from '../view/renderer.js';
import { setRetryButtonEventListener } from './event.js';
import { $$, makeDelay } from './utils.js';
const createCarsObject = (carNameArray) => {
    let cars = [];
    carNameArray.forEach((car, index) => {
        cars.push(new Car(car, index));
    });
    return cars;
};
const playGameOnce = (racingGame) => {
    racingGame.play();
    $$('div.car-player').forEach((element, index) => {
        racingGame.cars.forEach((car) => {
            racingGame.roundWinnersIndex.forEach((roundWinnerIndex) => {
                if (car.index === index && car.index === roundWinnerIndex) {
                    renderArrowDiv(element);
                }
            });
        });
    });
    racingGame.initRoundWinnersIndex();
};
const startGame = (carNameArray, tryCount) => __awaiter(void 0, void 0, void 0, function* () {
    const racingGame = new Game(createCarsObject(carNameArray));
    for (let index = 0; index < tryCount; index += 1) {
        yield makeDelay(1000).then(() => playGameOnce(racingGame));
    } // 시도 횟수만큼 플레이
    $$('div.d-flex.justify-center.mt-3').forEach((element) => {
        element.remove();
    }); // 게임 끝나면 spinner 제거
    const racingWinners = racingGame.getWinners();
    renderResultSection(racingWinners.join(', ').toLowerCase());
    yield makeDelay(2000).then(() => alert(racingWinners.join(', ') + ALERT.CONGRATULATION));
    setRetryButtonEventListener();
});
export { startGame };
