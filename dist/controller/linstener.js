import { startGame } from './play.js';
import { ID } from '../constants/index.js';
import { renderProgressSection, renderCarNameDiv, renderSpinnerDiv, renderInputSection } from '../view/renderer.js';
import { setInputButtonsEvent } from './event.js';
import { checkCarNames, checkTryCount } from './validtor.js';
import { clearInput, toggleInputValueDisabled, toggleClickButtonDisabled, removeChildNodes } from './utils.js';
const getCarNames = () => {
    const carNameInput = document.getElementById(ID.CAR_NAME_INPUT);
    const carNameArray = carNameInput === null || carNameInput === void 0 ? void 0 : carNameInput.value.split(',').map((x) => x.trim());
    if (checkCarNames(carNameInput, carNameArray)) {
        const carNameSubmitButton = document.getElementById(ID.CAR_NAME_SUBMIT);
        const tryCountInput = document.getElementById(ID.RACING_COUNT_INPUT);
        const tryCountSubmitButton = document.getElementById(ID.RACING_COUNT_SUBMIT);
        toggleInputValueDisabled(carNameInput);
        toggleClickButtonDisabled(carNameSubmitButton);
        toggleInputValueDisabled(tryCountInput);
        toggleClickButtonDisabled(tryCountSubmitButton);
        setupProgressSection(carNameArray);
        tryCountInput.focus();
        return;
    }
    clearInput(carNameInput);
};
const getTryCount = () => {
    const tryCountInput = document.getElementById(ID.RACING_COUNT_INPUT);
    const tryCount = Number(tryCountInput === null || tryCountInput === void 0 ? void 0 : tryCountInput.value);
    if (checkTryCount(tryCountInput)) {
        const carNameInput = document.getElementById(ID.CAR_NAME_INPUT);
        const tryCountSubmitButton = document.getElementById(ID.RACING_COUNT_SUBMIT);
        const carNameArray = carNameInput === null || carNameInput === void 0 ? void 0 : carNameInput.value.split(',').map((x) => x.trim());
        toggleInputValueDisabled(tryCountInput);
        toggleClickButtonDisabled(tryCountSubmitButton);
        startGame(carNameArray, tryCount);
        return;
    }
    clearInput(tryCountInput);
};
const setupProgressSection = (carNameArray) => {
    renderProgressSection();
    carNameArray.forEach((carName) => {
        renderCarNameDiv(carName);
    }); // 이름 div 생성
    // $$(ID.SPINNER_DIV).forEach((element) => {
    //   renderSpinnerDiv(element);
    // }); // 기본 스피너 생성 파트
    renderSpinnerDiv();
};
const initGame = () => {
    removeChildNodes(document.getElementById(ID.APP_DIV));
    renderInputSection();
    setInputButtonsEvent();
};
export { getCarNames, getTryCount, initGame };
