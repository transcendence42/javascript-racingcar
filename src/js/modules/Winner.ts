import { setCarNameDataset } from './@share/dom-dataset.js';
import { inputController } from './@share/controller.js';
import { $$, Car, initEnable } from './@share/utils.js';
import { winnerSection } from './@share/view.js';

const WinnerComponent = ({ $app, cars }: { $app: HTMLDivElement | null; cars: Car[] }): void => {
  const findWinners = (cars: Car[]): string[] => {
    const totalDistances: number[] = cars.map((car) => car.distance);
    const maxDistance: number = Math.max(...totalDistances);

    return cars
      .filter((car) => {
        return car.distance === maxDistance;
      })
      .map((winner) => winner.name);
  };

  const render = (JSX: string): void => {
    const sectionElement: HTMLDivElement | null = $app;
    if (sectionElement) {
      sectionElement.insertAdjacentHTML('beforeend', JSX);
    }

    return;
  };

  const retryButtonEvent = (e: Event): void => {
    if ($app) {
      $app.children[2].remove();
      $app.children[1].remove();
      $app.innerHTML = $app.children[0].outerHTML;
    }
    e.currentTarget?.removeEventListener('click', retryButtonEvent);
    inputController();
    initEnable();
    setCarNameDataset('');
    return;
  };

  const controller = (): void => {
    const retryButton: HTMLButtonElement = $$('button')[2] as HTMLButtonElement;
    if (retryButton) {
      retryButton.onclick = retryButtonEvent;
    }
  };

  const init = ({ cars }: { cars: Car[] }): void => {
    render(winnerSection(findWinners(cars).join(', ')));
    controller();
  };

  return init({ cars });
};

export default WinnerComponent;
