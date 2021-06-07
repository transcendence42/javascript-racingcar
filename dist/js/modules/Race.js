var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import WinnerComponent from './Winner.js';
import { $, $$, Car, getRandomSingleDigit, wait, initEnable, countEnable } from './@share/utils.js';
import { racingCountInputInit, carNameInputInit } from './@share/init.js';
import { ERROR_MESSAGE, MESSAGE, DELAY } from './@share/constants.js';
import { checkCarNameDataset } from './@share/dom-dataset.js';
import { removeSpinner } from './@share/spinner.js';
import { forwardIconDiv } from './@share/view.js';
const RaceComponent = ({ $app, count }) => {
    let _cars;
    const checkValidCount = (count) => {
        return count - Math.floor(count) === 0 && count > 0;
    };
    const getInputCarsName = () => {
        const carNameInput = $('#car-name-input');
        return carNameInput.value.split(',').map((x) => x.trim());
    };
    const assignCarsName = () => {
        const cars = [];
        const inputCarNames = getInputCarsName();
        inputCarNames.forEach((name) => {
            cars.push(new Car(name));
        });
        return cars;
    };
    const render = ({ count }) => __awaiter(void 0, void 0, void 0, function* () {
        const carPlayer = $$('.car-player');
        let tryCount = count;
        while (tryCount > 0) {
            for (let i = 0; i < carPlayer.length; i += 1) {
                if (getRandomSingleDigit(0, 9) >= 4) {
                    _cars[i].move();
                    carPlayer[i].insertAdjacentHTML('afterend', forwardIconDiv);
                }
                if (tryCount <= 1) {
                    removeSpinner(carPlayer[i]);
                }
            }
            tryCount -= 1;
            yield wait(DELAY.RACE);
        }
    });
    const init = (count) => __awaiter(void 0, void 0, void 0, function* () {
        if (!checkCarNameDataset()) {
            alert(ERROR_MESSAGE.INVALID_INPUT_PROCEDURE);
            carNameInputInit();
            initEnable();
            return;
        }
        if (!checkValidCount(count)) {
            alert(ERROR_MESSAGE.INVALID_COUNT_INPUT);
            racingCountInputInit();
            countEnable();
            return;
        }
        _cars = assignCarsName();
        yield render({ count });
        WinnerComponent({ $app, cars: _cars });
        yield wait(DELAY.ALERT);
        alert(MESSAGE.CELEBRATE_WINNER);
        return;
    });
    init(count);
};
export default RaceComponent;
