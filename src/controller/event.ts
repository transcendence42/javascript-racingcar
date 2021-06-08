import { $ } from '../utils.js';
import { SELECTOR } from '../constants/index.js';
import { getCarNames, getTryCount, restartApp } from './linstener.js';

const setInputButtonsEvent = (): void => {
  $(SELECTOR.CARNAME_SUBMIT)?.addEventListener('click', () => getCarNames());
  $(SELECTOR.TRYCOUNT_SUBMIT)?.addEventListener('click', () => getTryCount());
};

const setRestartButtonEvent = (): void => {
  $(SELECTOR.RESTART_SUBMIT)?.addEventListener('click', () => restartApp());
};

export { setInputButtonsEvent, setRestartButtonEvent };
