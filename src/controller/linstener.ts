import { ID } from '../constants/index.js';
import { startGame } from './game.js';
import { renderProgressSection, renderInputSection } from '../view/renderer.js';
import { setInputButtonsEvent } from './event.js';
import { checkCarNames, checkTryCount } from './validtor.js';
import { removeChildNodes } from '../view/remover.js';
import {
  $,
  inputElementClear,
  inputElementEnable,
  inputElementDisable,
  buttonElementEnable,
  buttonElementDisable,
} from '../utils.js';

const getCarNames = (): void => {
  const carNameInput: HTMLInputElement = $(ID.CARNAME_INPUT) as HTMLInputElement;
  const carNameArray: Array<string> = carNameInput?.value.split(',').map((x) => x.trim());

  if (checkCarNames(carNameInput, carNameArray)) {
    const carNameSubmitButton: HTMLButtonElement = $(ID.CARNAME_SUBMIT) as HTMLButtonElement;
    const tryCountInput: HTMLInputElement = $(ID.TRYCOUNT_INPUT) as HTMLInputElement;
    const tryCountSubmitButton: HTMLButtonElement = $(ID.TRYCOUNT_SUBMIT) as HTMLButtonElement;

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

const getTryCount = (): void => {
  const tryCountInput: HTMLInputElement = $(ID.TRYCOUNT_INPUT) as HTMLInputElement;
  const tryCount = Number(tryCountInput?.value);

  if (checkTryCount(tryCountInput)) {
    const carNameInput: HTMLInputElement = $(ID.CARNAME_INPUT) as HTMLInputElement;
    const carNameArray: Array<string> = carNameInput?.value.split(',').map((x) => x.trim());
    const tryCountSubmitButton: HTMLButtonElement = $(ID.TRYCOUNT_SUBMIT) as HTMLButtonElement;

    inputElementDisable(tryCountInput);
    buttonElementDisable(tryCountSubmitButton);
    startGame(carNameArray, tryCount);
    return;
  }
  inputElementClear(tryCountInput);
};

const restartApp = (): void => {
  removeChildNodes($(ID.APP_DIV));
  renderInputSection();
  setInputButtonsEvent();
  ($(ID.CARNAME_INPUT) as HTMLInputElement).focus();
};

export { getCarNames, getTryCount, restartApp };
