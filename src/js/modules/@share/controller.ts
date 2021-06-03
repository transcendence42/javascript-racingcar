import CarNameComponent from '../CarName.js';
import RaceComponent from '../Race.js';
import { ERROR_MESSAGE } from './constants.js';
import { carNameInputInit } from './init.js';
import { disable, initEnable } from './utils.js';

const carNameInputEvent = (): void => {
  const carNamesInput: HTMLInputElement = document.getElementById('car-name-input') as HTMLInputElement;

  disable(carNamesInput);
  disable(<HTMLButtonElement>carNamesInput.parentElement?.children[1]);
  if (carNamesInput) {
    CarNameComponent({ $app: document.querySelector<HTMLDivElement>('#app'), carNames: carNamesInput.value });
  }
};
const raceCountInputEvent = () => {
  const raceCountInput: HTMLInputElement = document.querySelector('input[type="number"]') as HTMLInputElement;
  const carNamesInput: HTMLInputElement = document.querySelector('input[type="text"]') as HTMLInputElement;

  disable(raceCountInput);
  disable(<HTMLButtonElement>raceCountInput.parentElement?.children[1]);
  if (raceCountInput && carNamesInput.value !== '') {
    RaceComponent({
      $app: document.querySelector<HTMLDivElement>('#app'),
      count: Number(raceCountInput.value),
    });
  } else {
    alert(ERROR_MESSAGE.INVALID_INPUT_PROCEDURE);
    carNameInputInit();
    initEnable();
  }
};
const inputController = (): void => {
  const gameButton: HTMLCollectionOf<HTMLButtonElement> = document.getElementsByTagName('button');
  gameButton[0].onclick = carNameInputEvent;
  gameButton[1].onclick = raceCountInputEvent;
};

export { inputController };
