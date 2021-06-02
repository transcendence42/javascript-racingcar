import CarNameComponent from './CarNameComponent.js';
import Race from './Race.js';

const Game = ({ $app }: { $app: HTMLDivElement | null }): void => {
  const carNameInputEvent = () => {
    const carNamesInput: HTMLInputElement = document.querySelector(
      'input[type="text"]'
    ) as HTMLInputElement;
    if (carNamesInput) {
      CarNameComponent({ carNames: carNamesInput.value });
    }
  };
  const raceCountInputEvent = () => {
    // const raceCountInput: HTMLInputElement = document.querySelector(
    //   'input[type="number"]'
    // ) as HTMLInputElement;
    // console.log('hi');
    // if (raceCountInput) {
    //   Race({ count: Number(raceCountInput.value) });
    // }
    console.log('hi2')
  };

  const render = (): void => {};
  const controller = (): void => {
    const gameButton: HTMLCollectionOf<HTMLButtonElement> =
      document.getElementsByTagName('button');
    gameButton[0].addEventListener('click', () => carNameInputEvent());
    gameButton[1].addEventListener('click', () => raceCountInputEvent());
  };

  const init = (): void => {
    render();
    controller();
  };

  init();
};

export default Game;
