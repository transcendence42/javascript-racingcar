import { $ } from '../utils.js';
import { startGame } from './gameController.js';
import { InputData } from '../model/InputData.js';
import { renderProgressSection } from '../view/progressSectionRenderer.js';
import { clearInput, enableInput, disableInput, enableButton, disableButton } from '../view/utils.js';
const getCarNames = (inputData) => {
    const carNameInput = $('#car-names-input');
    const carNameArray = carNameInput === null || carNameInput === void 0 ? void 0 : carNameInput.value.split(',').map((x) => x.trim());
    if (inputData.checkCarNames(carNameInput, carNameArray)) {
        renderProgressSection(carNameArray);
        inputData.carNameArray = carNameArray;
        disableInput(carNameInput);
        disableButton($('#car-names-submit'));
        enableInput($('#racing-count-input'));
        enableButton($('#racing-count-submit'));
        $('#racing-count-input').focus();
        return;
    }
    clearInput(carNameInput);
};
const getTryCount = (inputData) => {
    const tryCountInput = $('#racing-count-input');
    const tryCount = Number(tryCountInput === null || tryCountInput === void 0 ? void 0 : tryCountInput.value);
    if (inputData.checkTryCount(tryCountInput)) {
        inputData.tryCount = tryCount;
        disableInput(tryCountInput);
        disableButton($('#racing-count-submit'));
        startGame(inputData);
        return;
    }
    clearInput(tryCountInput);
};
const addInputButtonsEvent = () => {
    var _a, _b;
    const inputData = new InputData();
    (_a = $('#car-names-submit')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => getCarNames(inputData));
    (_b = $('#racing-count-submit')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => getTryCount(inputData));
};
export { addInputButtonsEvent };
