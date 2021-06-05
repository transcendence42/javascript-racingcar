import { checkCarName } from './validtor.js';
import { clearInput, disableInputValue, disableButtonClick } from './utils.js';
import { renderProgressSection, renderCarNameDiv, renderSpinnerDiv } from '../view/renderer.js';
import { startGame } from './player.js';
import { $, $$ } from './utils.js';

const initProgressSection = (carNameArray: Array<string>) => {
  renderProgressSection();
  carNameArray.forEach((carName) => {
    renderCarNameDiv($('.mt-4.d-flex') as Element, carName);
  }); // 이름 div 생성
  $$('div.mr-2').forEach((element) => {
    renderSpinnerDiv(element);
  }) // 기본 스피너 생성 파트
};

const getCarNames = (): void => {
  const carNameInput: HTMLInputElement = document.getElementById('car-names-input') as HTMLInputElement;
  const carNameArray: Array<string> = carNameInput?.value.split(',').map((x) => x.trim());

  if (checkCarName(carNameArray)) {
    const carNameSubmitButton: HTMLButtonElement = document.getElementById('car-names-submit') as HTMLButtonElement;

    disableInputValue(carNameInput);
    disableButtonClick(carNameSubmitButton);
    return;
  }
  clearInput(carNameInput);
};

const getTryCount = (): void => {
  const tryCountInput: HTMLInputElement = document.getElementById('racing-count-input') as HTMLInputElement;
  const tryCount: number = Number(tryCountInput?.value);

  if (tryCount > 0) {
    const carNameInput: HTMLInputElement = document.getElementById('car-names-input') as HTMLInputElement;
    const tryCountSubmitButton: HTMLButtonElement = document.getElementById('racing-count-submit') as HTMLButtonElement;
    const carNameArray: Array<string> = carNameInput?.value.split(',').map((x) => x.trim());

    disableInputValue(tryCountInput);
    disableButtonClick(tryCountSubmitButton);
    initProgressSection(carNameArray);
    startGame(carNameArray, tryCount);
    return;
  }
  clearInput(tryCountInput);
};

const setEventListenerRetry = (): void => {
  document.getElementById('retry-button')!.addEventListener('ciick', () => {});
}

const setEventListener = (): void => {
  document.getElementById('car-names-submit')!.addEventListener('click', () => getCarNames());
  document.getElementById('racing-count-submit')!.addEventListener('click', () => getTryCount());
};

export { setEventListener };
