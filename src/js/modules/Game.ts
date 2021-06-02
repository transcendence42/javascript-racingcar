import Race from './Race.js';

const Game = ({ $app }: { $app: HTMLDivElement | null }): void => {
  const carNameInputEvent = () => {
    Race()
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
