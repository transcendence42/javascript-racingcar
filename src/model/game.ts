import { Car } from './car';
class Game {
  cars: Array<Car>;
  finalWinners: Array<string>;
  roundWinnersIndex: Array<number>;
  maxPosition: number;

  constructor(cars: Array<Car>) {
    this.cars = cars;
    this.finalWinners = [];
    this.roundWinnersIndex = [];
    this.maxPosition = 0;
  }

  play = (): void => {
    this.cars.forEach((car) => {
      if (Math.floor(Math.random() * 9) + 1 >= 4) {
        car.moveForward();
        this.roundWinnersIndex.push(car.index);
        this.updateMaxPosition();
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

  initRoundWinnersIndex = (): void => {
    this.roundWinnersIndex = [];
  }

  getWinners = (): Array<string> => {
    this.cars.forEach((car) => {
      if (car.position === this.maxPosition) {
        this.finalWinners.push(car.name);
      }
    });
    return this.finalWinners;
  };
}

export { Game };
