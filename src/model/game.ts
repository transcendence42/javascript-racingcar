import { Car } from './car';

class Game {
  cars: Array<Car>;
  winners: Array<string>;
  tryCount: number;
  maxPosition: number;

  constructor(cars: Array<Car>, tryCount: number) {
    this.cars = cars;
    this.winners = [];
    this.tryCount = tryCount;
    this.maxPosition = 0;
  }

  playGame = (): void => {
    this.cars.forEach((car) => {
      if (Math.floor(Math.random() * 9) + 1 >= 4) {
        car.moveForward();
      }
    });
  };

  updateMaxPosition = (): void => {
    this.cars.forEach((car) => {
      if (car.position > this.maxPosition) {
        this.maxPosition = car.position;
      }
    });
  };

  getWinners = (): Array<string> => {
    this.cars.forEach((car) => {
      if (car.position === this.maxPosition) {
        this.winners.push(car.name);
      }
    });
    return this.winners;
  };
}

export { Game };

export function getCarNames() {
  const carNameInput = document.getElementById('car-names-input').value;
  const carNameArray = carNameInput.split(',');

  const carNameValid = checkCarNames(carNameInput, carNameArray);
  if (carNameValid !== ERROR_INPUT.NONE) {
    alert(carNameValid);
    resetCarNamesInput();
    return;
  }
  createCarObject(carNameArray);
}

export function getCount() {
  racingCount = document.getElementById('racing-count-input').value;

  const racingCountValid = checkRacingCount();
  if (racingCountValid !== ERROR_INPUT.NONE) {
    alert(racingCountValid);
    resetRacingCountInput();
    return;
  }
  startRacing(carObjectArray, racingCount);
}
