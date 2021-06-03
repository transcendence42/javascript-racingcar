import { inputController } from './@share/controller.js';
import { startSection } from './@share/view.js';

const Game = ({ $app }: { $app: HTMLDivElement | null }): void => {
  const render = (JSX: string): void => {
    const sectionElement = $app;
    if (sectionElement) {
      sectionElement.insertAdjacentHTML('beforeend', JSX);
    }
    return;
  };
  const init = (): void => {
    render(startSection);
    inputController();
  };

  init();
};

export default Game;
