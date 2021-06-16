import { $ } from '../utils.js';
import { startGame } from './gameController.js';
import { InputData } from '../model/InputData.js';
import { renderProgressSection } from '../view/progressSectionRenderer.js';
import { clearInput, enableInput, disableInput, enableButton, disableButton } from '../view/utils.js';

const getCarNames = (inputData: InputData): void => {
  const carNameInput: HTMLInputElement = $('#car-names-input') as HTMLInputElement;
  const carNameArray: Array<string> = carNameInput?.value.split(',').map((x) => x.trim());

  if (inputData.checkCarNames(carNameInput, carNameArray)) {
    renderProgressSection(carNameArray);
    inputData.carNameArray = carNameArray;
    disableInput(carNameInput);
    disableButton($('#car-names-submit') as HTMLButtonElement);
    enableInput($('#racing-count-input') as HTMLInputElement);
    enableButton($('#racing-count-submit') as HTMLButtonElement);
    ($('#racing-count-input') as HTMLInputElement).focus();
    return;
  }
  clearInput(carNameInput);
};

const getTryCount = (inputData: InputData): void => {
  const tryCountInput: HTMLInputElement = $('#racing-count-input') as HTMLInputElement;
  const tryCount = Number(tryCountInput?.value);

  if (inputData.checkTryCount(tryCountInput)) {
    inputData.tryCount = tryCount;
    disableInput(tryCountInput);
    disableButton($('#racing-count-submit') as HTMLButtonElement);
    startGame(inputData);
    return;
  }
  clearInput(tryCountInput);
};

const addInputButtonsEvent = (): void => {
  const inputData: InputData = new InputData();

  $('#car-names-submit')?.addEventListener('click', () => getCarNames(inputData));
  $('#racing-count-submit')?.addEventListener('click', () => getTryCount(inputData));
};

export { addInputButtonsEvent };
