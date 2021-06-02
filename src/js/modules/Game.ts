import CarNameComponent from './CarNameComponent.js';

const Game = ({ $app }: { $app: HTMLDivElement | null }): void => {
  const carNameInputEvent = () => {
    const carNamesInput = document.querySelector('input[type="text"]') as HTMLInputElement;
    if (carNamesInput) {
      CarNameComponent({carNames: carNamesInput.value})
    }
  }

  const render = (): void => {};
  const controller = (): void => {
    const gameButton: HTMLCollectionOf<HTMLButtonElement> = document.getElementsByTagName('button');
    gameButton[0].addEventListener('click', ()=>carNameInputEvent());
  };

  const init = (): void => {
    render();
    controller();
  };

  init();
};

export default Game;
