import CarNameComponent from '../CarName.js';
import RaceComponent from '../Race.js';
import { $, $$, disable, initEnable } from './utils.js';
import { ERROR_MESSAGE } from './constants.js';
import { carNameInputInit } from './init.js';
const carNameInputEvent = () => {
    var _a;
    const carNamesInput = $('#car-name-input');
    disable(carNamesInput);
    disable((_a = carNamesInput.parentElement) === null || _a === void 0 ? void 0 : _a.children[1]);
    if (carNamesInput) {
        CarNameComponent({ $app: $('#app'), carNames: carNamesInput.value });
    }
};
const raceCountInputEvent = () => {
    var _a;
    const raceCountInput = $('input[type="number"]');
    const carNamesInput = $('input[type="text"]');
    disable(raceCountInput);
    disable((_a = raceCountInput.parentElement) === null || _a === void 0 ? void 0 : _a.children[1]);
    if (raceCountInput && carNamesInput.value !== '') {
        RaceComponent({
            $app: $('#app'),
            count: Number(raceCountInput.value),
        });
    }
    else {
        alert(ERROR_MESSAGE.INVALID_INPUT_PROCEDURE);
        carNameInputInit();
        initEnable();
    }
};
const inputController = () => {
    const gameButton = $$('button');
    gameButton[0].onclick = carNameInputEvent;
    gameButton[1].onclick = raceCountInputEvent;
};
export { inputController };
