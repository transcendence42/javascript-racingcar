import CarNameComponent from './CarNameComponent.js';
import Race from './Race.js';

const Game = ({ $app }: { $app: HTMLDivElement | null }): void => {
  const carNameInputEvent = (): void => {
    const carNamesInput: HTMLInputElement = document.getElementById(
      'car-name-input'
    ) as HTMLInputElement;
    if (carNamesInput) {
      CarNameComponent({ carNames: carNamesInput.value });
    }
    console.log('hi');
  };
  const raceCountInputEvent = () => {
    // const raceCountInput: HTMLInputElement = document.querySelector(
    //   'input[type="number"]'
    // ) as HTMLInputElement;
    // console.log('hi');
    // if (raceCountInput) {
    //   Race({ count: Number(raceCountInput.value) });
    // }
    console.log('hi2');
  };

  const render = (): void => {};
  const controller = (): void => {
    const gameButton: HTMLCollectionOf<HTMLButtonElement> =
      document.getElementsByTagName('button');
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
