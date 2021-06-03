import CarNameComponent from './CarName.js';
import RaceComponent from './Race.js';
import { Car } from './utils.js';

const Game = ({ $app }: { $app: HTMLDivElement | null }): void => {
  const carNameInputEvent = (): void => {
    const carNamesInput: HTMLInputElement = document.getElementById('car-name-input') as HTMLInputElement;
    if (carNamesInput) {
      CarNameComponent({ $app, carNames: carNamesInput.value });
    }
  };
  const raceCountInputEvent = () => {
    const raceCountInput: HTMLInputElement = document.querySelector('input[type="number"]') as HTMLInputElement;
    const carNamesInput: HTMLInputElement = document.querySelector('input[type="text"]') as HTMLInputElement;

    if (raceCountInput && carNamesInput.value !== '') {
      RaceComponent({
        $app,
        count: Number(raceCountInput.value),
      });
    } else {
      alert('자동차 이름 먼저 입력해주세요!');
    }
  };

  const render = (): void => {};
  const controller = (): void => {
    const gameButton: HTMLCollectionOf<HTMLButtonElement> = document.getElementsByTagName('button');
    gameButton[0].onclick = carNameInputEvent;
    gameButton[1].onclick = raceCountInputEvent;
  };

  const init = (): void => {
    render();
    controller();
  };

  init();
};

export default Game;
