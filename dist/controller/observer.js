import { checkCarNames, checkTryCount } from './validtor.js';
import { clearInput, toggleInputValueDisabled, toggleClickButtonDisabled } from './utils.js';
import { renderProgressSection, renderCarNameDiv, renderSpinnerDiv, renderInputSection } from '../view/renderer.js';
import { startGame } from './player.js';
import { $, $$, removeChildNodes } from './utils.js';
const initProgressSection = (carNameArray) => {
    renderProgressSection();
    carNameArray.forEach((carName) => {
        renderCarNameDiv($('.mt-4.d-flex'), carName);
    }); // 이름 div 생성
    $$('div.mr-2').forEach((element) => {
        renderSpinnerDiv(element);
    }); // 기본 스피너 생성 파트
};
const getCarNames = () => {
    const carNameInput = document.getElementById('car-names-input');
    const carNameArray = carNameInput === null || carNameInput === void 0 ? void 0 : carNameInput.value.split(',').map((x) => x.trim());
    if (checkCarNames(carNameInput, carNameArray)) {
        const carNameSubmitButton = document.getElementById('car-names-submit');
        const tryCountInput = document.getElementById('racing-count-input');
        const tryCountSubmitButton = document.getElementById('racing-count-submit');
        toggleInputValueDisabled(carNameInput);
        toggleClickButtonDisabled(carNameSubmitButton);
        toggleInputValueDisabled(tryCountInput);
        toggleClickButtonDisabled(tryCountSubmitButton);
        tryCountInput.focus();
        return;
    }
    clearInput(carNameInput);
};
const getTryCount = () => {
    const tryCountInput = document.getElementById('racing-count-input');
    const tryCount = Number(tryCountInput === null || tryCountInput === void 0 ? void 0 : tryCountInput.value);
    if (checkTryCount(tryCountInput)) {
        const carNameInput = document.getElementById('car-names-input');
        const tryCountSubmitButton = document.getElementById('racing-count-submit');
        const carNameArray = carNameInput === null || carNameInput === void 0 ? void 0 : carNameInput.value.split(',').map((x) => x.trim());
        toggleInputValueDisabled(tryCountInput);
        toggleClickButtonDisabled(tryCountSubmitButton);
        initProgressSection(carNameArray);
        startGame(carNameArray, tryCount);
        return;
    }
    clearInput(tryCountInput);
};
function initGame() {
    removeChildNodes(document.getElementById('app'));
    renderInputSection();
    setInputButtonsEventListener();
}
const setInputButtonsEventListener = () => {
    document.getElementById('car-names-submit').addEventListener('click', () => getCarNames());
    document.getElementById('racing-count-submit').addEventListener('click', () => getTryCount());
};
const setReytyButtonEventListener = () => {
    document.getElementById('retry-button').addEventListener('click', () => initGame());
};
export { setInputButtonsEventListener, setReytyButtonEventListener };
