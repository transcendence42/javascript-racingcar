import { startGame } from './game.js';
import { renderProgressSection, renderInputSection } from '../view/renderer.js';
import { setInputButtonsEvent } from './event.js';
import { checkCarNames, checkTryCount } from './validtor.js';
import { removeChildNodes } from '../view/remover.js';
import { $, inputElementClear, inputElementEnable, inputElementDisable, buttonElementEnable, buttonElementDisable, } from '../utils.js';
const getCarNames = () => {
    const carNameInput = $('#car-names-input');
    const carNameArray = carNameInput === null || carNameInput === void 0 ? void 0 : carNameInput.value.split(',').map((x) => x.trim());
    if (checkCarNames(carNameInput, carNameArray)) {
        const carNameSubmitButton = $('#car-names-submit');
        const tryCountInput = $('#racing-count-input');
        const tryCountSubmitButton = $('#racing-count-submit');
        inputElementDisable(carNameInput);
        buttonElementDisable(carNameSubmitButton);
        inputElementEnable(tryCountInput);
        buttonElementEnable(tryCountSubmitButton);
        renderProgressSection(carNameArray);
        tryCountInput.focus();
        return;
    }
    inputElementClear(carNameInput);
};
const getTryCount = () => {
    const tryCountInput = $('#racing-count-input');
    const tryCount = Number(tryCountInput === null || tryCountInput === void 0 ? void 0 : tryCountInput.value);
    if (checkTryCount(tryCountInput)) {
        const carNameInput = $('#car-names-input');
        const carNameArray = carNameInput === null || carNameInput === void 0 ? void 0 : carNameInput.value.split(',').map((x) => x.trim());
        const tryCountSubmitButton = $('#racing-count-submit');
        inputElementDisable(tryCountInput);
        buttonElementDisable(tryCountSubmitButton);
        startGame(carNameArray, tryCount);
        return;
    }
    inputElementClear(tryCountInput);
};
// const setupProgressSection = (carNameArray: Array<string>) => {
//   renderProgressSection();
//   carNameArray.forEach((carName) => {
//     renderCarNameDiv(carName);
//   });
//   renderSpinnerDiv();
// };
const restartApp = () => {
    let carNameInput;
    removeChildNodes($('#app'));
    renderInputSection();
    setInputButtonsEvent();
    carNameInput = $('#car-names-input');
    carNameInput.focus();
};
export { getCarNames, getTryCount, restartApp };
