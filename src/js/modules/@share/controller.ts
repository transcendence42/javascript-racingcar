import CarNameComponent from '../CarName.js';
import RaceComponent from '../Race.js';
import { ERROR_MESSAGE } from './constants.js';
import { carNameInputInit } from './init.js';

const carNameInputEvent = (): void => {
  const carNamesInput: HTMLInputElement = document.getElementById('car-name-input') as HTMLInputElement;
  if (carNamesInput) {
    CarNameComponent({ $app: document.querySelector<HTMLDivElement>('#app'), carNames: carNamesInput.value });
  }
};
const raceCountInputEvent = () => {
  const raceCountInput: HTMLInputElement = document.querySelector('input[type="number"]') as HTMLInputElement;
  const carNamesInput: HTMLInputElement = document.querySelector('input[type="text"]') as HTMLInputElement;

  if (raceCountInput && carNamesInput.value !== '') {
    RaceComponent({
      $app: document.querySelector<HTMLDivElement>('#app'),
      count: Number(raceCountInput.value),
    });
  } else {
    alert(ERROR_MESSAGE.INVALID_INPUT_PROCEDURE);
    carNameInputInit();
  }
};
const inputController = (): void => {
  const gameButton: HTMLCollectionOf<HTMLButtonElement> = document.getElementsByTagName('button');
  gameButton[0].onclick = carNameInputEvent;
  gameButton[1].onclick = raceCountInputEvent;
};

export { inputController };
