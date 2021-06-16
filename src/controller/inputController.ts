import { $ } from '../utils.js';
import { SELECTOR } from '../constants.js';
import { startGame } from './gameController.js';
import { InputData } from '../model/InputData.js';
import { renderProgressSection } from '../view/progressSectionRenderer.js';
import { clearInput, enableInput, disableInput, enableButton, disableButton } from '../view/utils.js';

const getCarNames = (inputData: InputData): void => {
  const carNameInput: HTMLInputElement = $(SELECTOR.CARNAME_INPUT) as HTMLInputElement;
  const carNameArray: Array<string> = carNameInput?.value.split(',').map((x) => x.trim());

  if (inputData.checkCarNames(carNameInput, carNameArray)) {
    renderProgressSection(carNameArray);
    inputData.carNameArray = carNameArray;
    disableInput(carNameInput);
    disableButton($(SELECTOR.CARNAME_SUBMIT_BUTTON) as HTMLButtonElement);
    enableInput($(SELECTOR.TRYCOUNT_INPUT) as HTMLInputElement);
    enableButton($(SELECTOR.TRYCOUNT_SUBMIT_BUTTON) as HTMLButtonElement);
    ($(SELECTOR.TRYCOUNT_INPUT) as HTMLInputElement).focus();
    return;
  }
  clearInput(carNameInput);
};

const getTryCount = (inputData: InputData): void => {
  const tryCountInput: HTMLInputElement = $(SELECTOR.TRYCOUNT_INPUT) as HTMLInputElement;
  const tryCount = Number(tryCountInput?.value);

  if (inputData.checkTryCount(tryCountInput)) {
    inputData.tryCount = tryCount;
    disableInput(tryCountInput);
    disableButton($(SELECTOR.TRYCOUNT_SUBMIT_BUTTON) as HTMLButtonElement);
    startGame(inputData);
    return;
  }
  clearInput(tryCountInput);
};

const addInputButtonsEvent = (): void => {
  const inputData: InputData = new InputData();

  $(SELECTOR.CARNAME_SUBMIT_BUTTON)?.addEventListener('click', () => getCarNames(inputData));
  $(SELECTOR.TRYCOUNT_SUBMIT_BUTTON)?.addEventListener('click', () => getTryCount(inputData));
};

export { addInputButtonsEvent };
