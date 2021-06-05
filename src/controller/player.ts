import { Car, Game } from '../model/index.js';
import { renderArrowDiv, renderResultSection } from '../view/renderer.js';
import { $$ } from './utils.js';

const createCarsObject = (carNameArray: Array<string>) => {
  let cars: Array<Car> = [];

  carNameArray.forEach((car, index) => {
    cars.push(new Car(car, index));
  });
  return cars;
};

const startGame = (carNameArray: Array<string>, tryCount: number) => {
  const racingGame: Game = new Game(createCarsObject(carNameArray));

  for (let index = 0; index < tryCount; index += 1) {
    racingGame.play();
  }
  $$('div.car-player').forEach((element, index) => {
    racingGame.cars.forEach((car) => {
      if (car.index === index) {
        for (let index = 0; index < car.position; index += 1) {
          renderArrowDiv(element);
        }
      }
    });
  });
  $$('div.d-flex.justify-center.mt-3').forEach((element) => {
    element.remove();
  })
  renderResultSection(racingGame.getWinners().join(',').toLowerCase());
};

export { startGame };
