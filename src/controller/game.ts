import { ALERT, DELAY } from '../constants/index.js';
import { Car, Game } from '../model/index.js';
import { renderArrowDiv, renderResultSection } from '../view/renderer.js';
import { setRestartButtonEvent } from './event.js';
import { makeDelay } from '../utils.js';
import { removeSpinners } from '../view/remover.js';

const createCarsObject = (carNameArray: Array<string>) => {
  let cars: Array<Car> = [];

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

const startGame = async (carNameArray: Array<string>, tryCount: number) => {
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
