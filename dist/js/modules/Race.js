import { Car, getRandomSingleDigit } from './utils.js';
const RaceComponent = ({ count }) => {
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
    const racingAnimationFrame = () => {
        const carPlayer = document.getElementsByClassName('car-player');
        _startTime += 1;
        if (_startTime < 100) {
            requestAnimationFrame(racingAnimationFrame);
        }
        else {
            for (let i = 0; i < carPlayer.length; i += 1) {
                if (getRandomSingleDigit(0, 9) >= 4) {
                    _cars[i].move();
                    removeSpinner(carPlayer[i]);
                    carPlayer[i].insertAdjacentHTML('afterend', '<div class="forward-icon mt-2">⬇️️</div>');
                }
            }
            _startTime = 0;
        }
    };
    const render = ({ count }) => {
        let tryCount = count;
        while (tryCount > 0) {
            requestAnimationFrame(racingAnimationFrame);
            tryCount -= 1;
        }
    };
    const init = (count) => {
        if (!checkValidCount(count)) {
            alert(`유효하지 않은 입력입니다. 재입력 해주세요.`);
            const racingCountInput = document.getElementById('racing-count-input');
            racingCountInput.value = '';
            racingCountInput.focus();
        }
        _cars = assignCarsName();
        render({ count });
        return _cars;
    };
    return init(count);
};
export default RaceComponent;
