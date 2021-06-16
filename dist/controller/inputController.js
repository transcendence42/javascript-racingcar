import { $ } from '../utils.js';
import { SELECTOR } from '../constants.js';
import { startGame } from './gameController.js';
import { InputData } from '../model/InputData.js';
import { renderProgressSection } from '../view/progressSectionRenderer.js';
import { clearInput, enableInput, disableInput, enableButton, disableButton } from '../view/utils.js';
const getCarNames = (inputData) => {
    const carNameInput = $(SELECTOR.CARNAME_INPUT);
    const carNameArray = carNameInput === null || carNameInput === void 0 ? void 0 : carNameInput.value.split(',').map((x) => x.trim());
    if (inputData.checkCarNames(carNameInput, carNameArray)) {
        renderProgressSection(carNameArray);
        inputData.carNameArray = carNameArray;
        disableInput(carNameInput);
        disableButton($(SELECTOR.CARNAME_SUBMIT_BUTTON));
        enableInput($(SELECTOR.TRYCOUNT_INPUT));
        enableButton($(SELECTOR.TRYCOUNT_SUBMIT_BUTTON));
        $(SELECTOR.TRYCOUNT_INPUT).focus();
        return;
    }
    clearInput(carNameInput);
};
const getTryCount = (inputData) => {
    const tryCountInput = $(SELECTOR.TRYCOUNT_INPUT);
    const tryCount = Number(tryCountInput === null || tryCountInput === void 0 ? void 0 : tryCountInput.value);
    if (inputData.checkTryCount(tryCountInput)) {
        inputData.tryCount = tryCount;
        disableInput(tryCountInput);
        disableButton($(SELECTOR.TRYCOUNT_SUBMIT_BUTTON));
        startGame(inputData);
        return;
    }
    clearInput(tryCountInput);
};
const addInputButtonsEvent = () => {
    var _a, _b;
    const inputData = new InputData();
    (_a = $(SELECTOR.CARNAME_SUBMIT_BUTTON)) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => getCarNames(inputData));
    (_b = $(SELECTOR.TRYCOUNT_SUBMIT_BUTTON)) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => getTryCount(inputData));
};
export { addInputButtonsEvent };
