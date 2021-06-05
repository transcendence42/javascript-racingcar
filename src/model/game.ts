import { Car } from './car';
class Game {
  cars: Array<Car>;
  winners: Array<string>;
  maxPosition: number;

  constructor(cars: Array<Car>) {
    this.cars = cars;
    this.winners = [];
    this.maxPosition = 0;
  }


  play = (): void => {
    this.cars.forEach((car) => {
      if (Math.floor(Math.random() * 9) + 1 >= 4) {
        car.moveForward();
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
