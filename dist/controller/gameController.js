var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ALERT, DELAY, SELECTOR } from '../constants.js';
import { $ } from '../utils.js';
import { Game } from '../model/Game.js';
import { enableButton } from '../view/utils.js';
import { renderArrowDiv, removeSpinnerDivs } from '../view/progressSectionRenderer.js';
import { renderResultSection } from '../view/resultSectionRenderer.js';
import { addRestartButtonEvent } from './restartController.js';
const playOnce = (racingGame) => {
    racingGame.play();
    racingGame.roundWinners.forEach((index) => {
        renderArrowDiv(index);
    });
    racingGame.initRoundWinners();
};
const startGame = (inputData) => __awaiter(void 0, void 0, void 0, function* () {
    const racingGame = new Game(inputData.carNameArray);
    for (let index = 0; index < inputData.tryCount; index += 1) {
        yield racingGame.makeDelay(DELAY.GAME_TURN).then(() => playOnce(racingGame));
    }
    racingGame.judgeFinalWinners();
    removeSpinnerDivs();
    renderResultSection(racingGame.finalWinners.join(', ').toLowerCase());
    yield racingGame.makeDelay(DELAY.GAME_END).then(() => alert(racingGame.finalWinners.join(', ') + ALERT.CONGRATULATION));
    enableButton($(SELECTOR.RESTART_SUBMIT_BUTTON));
    addRestartButtonEvent();
});
export { startGame };
