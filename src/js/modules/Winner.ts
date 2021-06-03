import { Car } from './@share/utils.js';
import { inputController } from './@share/controller.js';
import { winnerSection } from './@share/view.js';

const WinnerComponent = ({ $app, cars }: { $app: HTMLDivElement | null; cars: Car[] }): void => {
  const findWinners = (cars: Car[]): string[] => {
    const totalDistances = cars.map((car) => car.distance);
    const maxDistance = Math.max(...totalDistances);

    return cars
      .filter((car) => {

        return car.distance === maxDistance;
      })
      .map((winner) => winner.name);
  };

  const render = (JSX: string): void => {
    const sectionElement = $app;
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

    return;
  };

  const controller = (): void => {
    const retryButton = document.getElementsByTagName('button')[2];
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
