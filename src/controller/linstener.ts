import { startGame } from './play.js';
import { ID } from '../constants/index.js';
import { renderProgressSection, renderCarNameDiv, renderSpinnerDiv, renderInputSection } from '../view/renderer.js';
import { setInputButtonsEvent } from './event.js';
import { checkCarNames, checkTryCount } from './validtor.js';
import { $, $$, clearInput, toggleInputValueDisabled, toggleClickButtonDisabled, removeChildNodes } from './utils.js';

const getCarNames = (): void => {
  const carNameInput: HTMLInputElement = document.getElementById(ID.CAR_NAME_INPUT) as HTMLInputElement;
  const carNameArray: Array<string> = carNameInput?.value.split(',').map((x) => x.trim());

  if (checkCarNames(carNameInput, carNameArray)) {
    const carNameSubmitButton: HTMLButtonElement = document.getElementById(ID.CAR_NAME_SUBMIT) as HTMLButtonElement;
    const tryCountInput: HTMLInputElement = document.getElementById(ID.RACING_COUNT_INPUT) as HTMLInputElement;
    const tryCountSubmitButton: HTMLButtonElement = document.getElementById(
      ID.RACING_COUNT_SUBMIT,
    ) as HTMLButtonElement;

    toggleInputValueDisabled(carNameInput);
    toggleClickButtonDisabled(carNameSubmitButton);
    toggleInputValueDisabled(tryCountInput);
    toggleClickButtonDisabled(tryCountSubmitButton);
    tryCountInput.focus();
    return;
  }
  clearInput(carNameInput);
};

const getTryCount = (): void => {
  const tryCountInput: HTMLInputElement = document.getElementById(ID.RACING_COUNT_INPUT) as HTMLInputElement;
  const tryCount: number = Number(tryCountInput?.value);

  if (checkTryCount(tryCountInput)) {
    const carNameInput: HTMLInputElement = document.getElementById(ID.CAR_NAME_INPUT) as HTMLInputElement;
    const tryCountSubmitButton: HTMLButtonElement = document.getElementById(
      ID.RACING_COUNT_SUBMIT,
    ) as HTMLButtonElement;
    const carNameArray: Array<string> = carNameInput?.value.split(',').map((x) => x.trim());

    toggleInputValueDisabled(tryCountInput);
    toggleClickButtonDisabled(tryCountSubmitButton);
    setupProgressSection(carNameArray);
    startGame(carNameArray, tryCount);
    return;
  }
  clearInput(tryCountInput);
};

const setupProgressSection = (carNameArray: Array<string>) => {
  renderProgressSection();
  carNameArray.forEach((carName) => {
    renderCarNameDiv($(ID.CAR_NAME_DIV) as Element, carName);
  }); // 이름 div 생성
  $$(ID.SPINNER_DIV).forEach((element) => {
    renderSpinnerDiv(element);
  }); // 기본 스피너 생성 파트
};

const initGame = (): void => {
  removeChildNodes(document.getElementById(ID.APP_DIV));
  renderInputSection();
  setInputButtonsEvent();
};

export { getCarNames, getTryCount, initGame };
