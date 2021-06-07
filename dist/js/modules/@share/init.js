import { $ } from './utils.js';
const carNameInputInit = () => {
    const carNameInput = $('#car-name-input');
    carNameInput.value = '';
    carNameInput.focus();
};
const racingCountInputInit = () => {
    const racingCountInput = $('#racing-count-input');
    racingCountInput.value = '';
    racingCountInput.focus();
};
export { carNameInputInit, racingCountInputInit };
