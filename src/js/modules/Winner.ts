import { Car } from './utils.js';

/* React Component 구조였으면 props로 함수를 넘겼을 것이다. */
import CarNameComponent from './CarName.js';
import RaceComponent from './Race.js';

const carNameInputEvent = (): void => {
  const carNamesInput: HTMLInputElement = document.getElementById(
    'car-name-input',
  ) as HTMLInputElement;
  if (carNamesInput) {
    CarNameComponent({ $app: document.querySelector<HTMLDivElement>('#app'), carNames: carNamesInput.value });
  }
};
const raceCountInputEvent = () => {
  const raceCountInput: HTMLInputElement = document.querySelector(
    'input[type="number"]',
  ) as HTMLInputElement;

  if (raceCountInput) {
    const result = RaceComponent({ count: Number(raceCountInput.value) });
    WinnerComponent({ $app: document.querySelector<HTMLDivElement>('#app'), cars: result });
  }
};
const inputController = (): void => {
  const gameButton: HTMLCollectionOf<HTMLButtonElement> =
    document.getElementsByTagName('button');
  gameButton[0].onclick = carNameInputEvent;
  gameButton[1].onclick = raceCountInputEvent;
};
/*****************************************************/

const winnerSection = (winner: string): string => {
  return `<section class="d-flex justify-center mt-5">
                <div>
                  <h2>🏆 최종 우승자: ${winner} 🏆</h2>
                  <div class="d-flex justify-center">
                    <button type="button" class="btn btn-cyan">다시 시작하기</button>
                  </div>
                </div>
            </section>`;
};

const WinnerComponent = ({
  $app,
  cars,
}: {
  $app: HTMLDivElement | null;
  cars: Car[];
}): void => {
  const findWinners = (cars: Car[]): string[] => {
    const totalDistances = cars.map((car) => car.distance);
    const maxDistance = Math.max(...totalDistances);
    return cars
      .filter((car) => {
        return car.distance === maxDistance;
      })
      .map((winner) => winner.name);
  };

  const render = ({ result }: { result: string }): void => {
    const sectionElement = $app;
    if (sectionElement) {
      sectionElement.insertAdjacentHTML('beforeend', result);
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
    const result: string = winnerSection(findWinners(cars).join(', '));
    render({ result });
    controller();
  };

  return init({ cars });
};

export default WinnerComponent;
