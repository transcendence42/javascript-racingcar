import { ID } from '../constants/index.js';
import { startGame } from './game.js';
import { renderProgressSection, renderInputSection } from '../view/renderer.js';
import { setInputButtonsEvent } from './event.js';
import { checkCarNames, checkTryCount } from './validtor.js';
import { removeChildNodes } from '../view/remover.js';
import { $, inputElementClear, inputElementEnable, inputElementDisable, buttonElementEnable, buttonElementDisable, } from '../utils.js';
const getCarNames = () => {
    const carNameInput = $(ID.CARNAME_INPUT);
    const carNameArray = carNameInput === null || carNameInput === void 0 ? void 0 : carNameInput.value.split(',').map((x) => x.trim());
    if (checkCarNames(carNameInput, carNameArray)) {
        const carNameSubmitButton = $(ID.CARNAME_SUBMIT);
        const tryCountInput = $(ID.TRYCOUNT_INPUT);
        const tryCountSubmitButton = $(ID.TRYCOUNT_SUBMIT);
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
    const tryCountInput = $(ID.TRYCOUNT_INPUT);
    const tryCount = Number(tryCountInput === null || tryCountInput === void 0 ? void 0 : tryCountInput.value);
    if (checkTryCount(tryCountInput)) {
        const carNameInput = $(ID.CARNAME_INPUT);
        const carNameArray = carNameInput === null || carNameInput === void 0 ? void 0 : carNameInput.value.split(',').map((x) => x.trim());
        const tryCountSubmitButton = $(ID.TRYCOUNT_SUBMIT);
        inputElementDisable(tryCountInput);
        buttonElementDisable(tryCountSubmitButton);
        startGame(carNameArray, tryCount);
        return;
    }
    inputElementClear(tryCountInput);
};
const restartApp = () => {
    removeChildNodes($(ID.APP_DIV));
    renderInputSection();
    setInputButtonsEvent();
    $(ID.CARNAME_INPUT).focus();
};
export { getCarNames, getTryCount, restartApp };
