var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Car, getRandomSingleDigit, wait } from './utils.js';
import WinnerComponent from './Winner.js';
const RaceComponent = ({ $app, count }) => {
    let _cars;
    let _startTime = 0;
    const checkValidCount = (count) => {
        return count - Math.floor(count) === 0 && count > 0;
    };
    const getInputCarsName = () => {
        const carNameInput = document.getElementById('car-name-input');
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
    const removeSpinner = (carPlayer) => {
        var _a, _b, _c, _d;
        if (((_b = (_a = carPlayer.parentNode) === null || _a === void 0 ? void 0 : _a.lastElementChild) === null || _b === void 0 ? void 0 : _b.className) === 'd-flex justify-center mt-3') {
            (_d = (_c = carPlayer.parentNode) === null || _c === void 0 ? void 0 : _c.lastElementChild) === null || _d === void 0 ? void 0 : _d.remove();
        }
    };
    const render = ({ count }) => __awaiter(void 0, void 0, void 0, function* () {
        const carPlayer = document.getElementsByClassName('car-player');
        let tryCount = count;
        while (tryCount > 0) {
            for (let i = 0; i < carPlayer.length; i += 1) {
                if (getRandomSingleDigit(0, 9) >= 4) {
                    _cars[i].move();
                    carPlayer[i].insertAdjacentHTML('afterend', '<div class="forward-icon mt-2">⬇️️</div>');
                }
                if (tryCount <= 1) {
                    removeSpinner(carPlayer[i]);
                }
            }
            tryCount -= 1;
            yield wait(1000);
        }
    });
    const init = (count) => __awaiter(void 0, void 0, void 0, function* () {
        if (!checkValidCount(count)) {
            alert(`유효하지 않은 입력입니다. 재입력 해주세요.`);
            const racingCountInput = document.getElementById('racing-count-input');
            racingCountInput.value = '';
            racingCountInput.focus();
        }
        _cars = assignCarsName();
        yield render({ count });
        WinnerComponent({ $app, cars: _cars });
        yield wait(2000);
        alert('🏆 축하합니다 ㅎㅎ 최종 우승자: EAST, WEST, SOUTH, NORTH 🏆');
        return;
    });
    init(count);
};
export default RaceComponent;
