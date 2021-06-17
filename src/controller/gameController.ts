import { ALERT, DELAY } from '../constants.js';
import { $ } from '../utils.js';
import { Game } from '../model/Game.js';
import { enableButton } from '../view/utils.js';
import { renderArrowDiv, removeSpinnerDivs } from '../view/progressSectionRenderer.js';
import { renderResultSection } from '../view/resultSectionRenderer.js';
import { addRestartButtonEvent } from './restartController.js';
import { InputData } from '../model/InputData.js';

const playOnce = (racingGame: Game) => {
  racingGame.play();
  racingGame.roundWinners.forEach((index) => {
    renderArrowDiv(index);
  });
  racingGame.initRoundWinners();
};

const startGame = async (inputData: InputData): Promise<void> => {
  const racingGame: Game = new Game(inputData.carNameArray);

  for (let index = 0; index < inputData.tryCount; index += 1) {
    await racingGame.makeDelay(DELAY.GAME_TURN).then(() => playOnce(racingGame));
  }
  racingGame.judgeFinalWinners();
  removeSpinnerDivs();
  renderResultSection(racingGame.finalWinners.join(', ').toLowerCase());
  await racingGame.makeDelay(DELAY.GAME_END).then(() => alert(racingGame.finalWinners.join(', ') + ALERT.CONGRATULATION));
  enableButton($('#restart-button') as HTMLButtonElement);
  addRestartButtonEvent();
};

export { startGame };
