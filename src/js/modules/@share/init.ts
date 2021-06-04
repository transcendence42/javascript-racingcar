import { $ } from './utils.js';

const carNameInputInit = () => {
  const carNameInput = $('#car-name-input') as HTMLInputElement;
  carNameInput.value = '';
  carNameInput.focus();
};

const racingCountInputInit = () => {
  const racingCountInput = $('#racing-count-input') as HTMLInputElement;
  racingCountInput.value = '';
  racingCountInput.focus();
};

export { carNameInputInit, racingCountInputInit };
