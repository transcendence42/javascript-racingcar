import { Car } from './Car.js';
import { RULE } from '../constants.js';

class Game {
  cars: Array<Car>;
  finalWinners: Array<string>;
  roundWinners: Array<number>;
  maxPosition: number;

  constructor(carNameArray: Array<string>) {
    this.cars = [];
    this.finalWinners = [];
    this.roundWinners = [];
    this.maxPosition = 0;
    this.setCarsObject(carNameArray);
  }

  play(): void {
    this.cars.forEach((car) => {
      if (Math.floor(Math.random() * RULE.MAX_SCORE) + RULE.MIN_SCORE >= RULE.THRESHOULD_SCORE) {
        car.moveForward();
        this.roundWinners.push(car.index);
      }
    });
    this.updateMaxPosition();
  }

  setCarsObject(carNameArray: Array<string>): void {
    carNameArray.forEach((car, index) => {
      this.cars.push(new Car(car, index));
    });
  };

  async makeDelay(ms: number): Promise<void> {
    return new Promise((r) => setTimeout(r, ms));
  };

  updateMaxPosition(): void {
    this.cars.forEach((car) => {
      if (car.position > this.maxPosition) {
        this.maxPosition = car.position;
      }
    });
  }

  initRoundWinners(): void {
    this.roundWinners = [];
  }

  judgeFinalWinners(): void {
    this.cars.forEach((car) => {
      if (car.position === this.maxPosition) {
        this.finalWinners.push(car.name);
      }
    });
  }
}

export { Game };
