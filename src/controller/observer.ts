import { checkCarName } from './validtor.js';
import { clearInput, preventInputValue, preventButtonClick } from './utils.js';
import { Car } from '../model/index.js';
import { renderProgressSection, renderCarNameDiv, renderSpinnerDiv } from '../view/renderer.js';
import { playGame } from './player.js';

const createCarsObject = (carNameArray: Array<string>) => {
  let cars: Array<Car> = [];

  carNameArray.forEach((car) => {
    cars.push(new Car(car));
  });
  return cars;
}

const getCarNames = (): void => {
  const carNameInput: HTMLInputElement = document.getElementById('car-names-input') as HTMLInputElement;
  const carNameArray: Array<string> = carNameInput?.value.split(',');

  if (checkCarName(carNameArray)) {
    const carNameSubmitButton: HTMLButtonElement = document.getElementById('car-names-submit') as HTMLButtonElement;

    preventInputValue(carNameInput);
    preventButtonClick(carNameSubmitButton);
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
    const carNameArray: Array<string> = carNameInput?.value.split(',');
    const cars: Array<Car> = createCarsObject(carNameArray);

    preventInputValue(tryCountInput);
    preventButtonClick(tryCountSubmitButton);
    renderProgressSection();
    renderCarNameDiv(carNameArray);
    renderSpinnerDiv(carNameArray)
    playGame(cars, tryCount);
    return;
  }
  clearInput(tryCountInput);
};


const setEventListener = (): void => {
  document.getElementById('car-names-submit')!.addEventListener('click', () => getCarNames());
  document.getElementById('racing-count-submit')!.addEventListener('click', () => getTryCount());
};

export { setEventListener };
