import { checkCarName } from './validtor.js';
import { clearInput, disableInputValue, disableButtonClick } from './utils.js';
import { Car } from '../model/index.js';
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
    const cars: Array<Car> = createCarsObject(carNameArray);

    disableInputValue(tryCountInput);
    disableButtonClick(tryCountSubmitButton);
    playGame(cars, carNameArray, tryCount);
    return;
  }
  clearInput(tryCountInput);
};


const setEventListener = (): void => {
  document.getElementById('car-names-submit')!.addEventListener('click', () => getCarNames());
  document.getElementById('racing-count-submit')!.addEventListener('click', () => getTryCount());
};

export { setEventListener };
