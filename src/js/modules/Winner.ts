import { Car } from './utils.js';

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

const WinnerComponent = ({ $app, cars }: { $app: HTMLDivElement | null, cars: Car[] }): void => {
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

  const init = ({ cars }: { cars: Car[] }): void => {
    const result: string = winnerSection(findWinners(cars).join(', '));
    render({ result });
  };

  return init({ cars });
};

export default WinnerComponent;
