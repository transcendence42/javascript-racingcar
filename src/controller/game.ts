import { ALERT, DELAY } from '../constants/index.js';
import { Car, Game } from '../model/index.js';
import { renderArrowDiv, renderResultSection } from '../view/renderer.js';
import { setRestartButtonEvent } from './event.js';
import { removeSpinners } from '../view/remover.js';

const makeDelay = async (ms: number): Promise<void> => {
  return new Promise((r) => setTimeout(r, ms));
};

const createCarsObject = (carNameArray: Array<string>) => {
  const cars: Array<Car> = [];

  carNameArray.forEach((car, index) => {
    cars.push(new Car(car, index));
  });
  return cars;
};

const playOnce = (racingGame: Game) => {
  racingGame.play();
  racingGame.roundWinnersIndex.forEach((roundWinnerIndex) => {
    renderArrowDiv(roundWinnerIndex);
  });
  racingGame.initRoundWinnersIndex();
};

const startGame = async (carNameArray: Array<string>, tryCount: number): Promise<void> => {
  const racingGame: Game = new Game(createCarsObject(carNameArray));
  let racingWinners: Array<string> = [];

  for (let index = 0; index < tryCount; index += 1) {
    await makeDelay(DELAY.TURN).then(() => playOnce(racingGame));
  }
  removeSpinners();
  racingWinners = racingGame.getWinners();
  renderResultSection(racingWinners.join(', ').toLowerCase());
  await makeDelay(DELAY.END).then(() => alert(racingWinners.join(', ') + ALERT.CONGRATULATION));
  setRestartButtonEvent();
};

export { startGame };
