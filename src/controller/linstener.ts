import { startGame } from './game.js';
import { renderProgressSection, renderCarNameDiv, renderSpinnerDiv, renderInputSection } from '../view/renderer.js';
import { setInputButtonsEvent } from './event.js';
import { checkCarNames, checkTryCount } from './validtor.js';
import { removeChildNodes } from '../view/remover.js';
import {
  $,
  $$,
  inputElementClear,
  inputElementEnable,
  inputElementDisable,
  buttonElementEnable,
  buttonElementDisable,
} from '../utils.js';

const getCarNames = (): void => {
  const carNameInput: HTMLInputElement = $('#car-names-input') as HTMLInputElement;
  const carNameArray: Array<string> = carNameInput?.value.split(',').map((x) => x.trim());

  if (checkCarNames(carNameInput, carNameArray)) {
    const carNameSubmitButton: HTMLButtonElement = $('#car-names-submit') as HTMLButtonElement;
    const tryCountInput: HTMLInputElement = $('#racing-count-input') as HTMLInputElement;
    const tryCountSubmitButton: HTMLButtonElement = $('#racing-count-submit') as HTMLButtonElement;

    inputElementDisable(carNameInput);
    buttonElementDisable(carNameSubmitButton);
    inputElementEnable(tryCountInput);
    buttonElementEnable(tryCountSubmitButton);
    setupProgressSection(carNameArray);
    tryCountInput.focus();
    return;
  }
  inputElementClear(carNameInput);
};

const getTryCount = (): void => {
    const tryCountInput: HTMLInputElement = $('#racing-count-input') as HTMLInputElement;
  const tryCount: number = Number(tryCountInput?.value);

  if (checkTryCount(tryCountInput)) {
    const carNameInput: HTMLInputElement = $('#car-names-input') as HTMLInputElement;
    const carNameArray: Array<string> = carNameInput?.value.split(',').map((x) => x.trim());
    const tryCountSubmitButton: HTMLButtonElement = $('#racing-count-submit') as HTMLButtonElement;

    inputElementDisable(tryCountInput);
    buttonElementDisable(tryCountSubmitButton);
    startGame(carNameArray, tryCount);
    return;
  }
  inputElementClear(tryCountInput);
};

const setupProgressSection = (carNameArray: Array<string>) => {
  renderProgressSection();
  carNameArray.forEach((carName) => {
    renderCarNameDiv(carName);
  });
  renderSpinnerDiv();
};

const restartApp = (): void => {
  let carNameInput: HTMLInputElement;

  removeChildNodes($('#app'));
  renderInputSection();
  setInputButtonsEvent();
  carNameInput = $('#car-names-input') as HTMLInputElement;
  carNameInput.focus();
};

export { getCarNames, getTryCount, restartApp };
