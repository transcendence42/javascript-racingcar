import { $ } from '../utils.js';
import { ID } from '../constants/index.js';
import { getCarNames, getTryCount, restartApp } from './linstener.js';

const setInputButtonsEvent = (): void => {
  $(ID.CARNAME_SUBMIT)!.addEventListener('click', () => getCarNames());
  $(ID.TRYCOUNT_SUBMIT)!.addEventListener('click', () => getTryCount());
};

const setRestartButtonEvent = (): void => {
  $(ID.RESTART_SUBMIT)!.addEventListener('click', () => restartApp());
};

export { setInputButtonsEvent, setRestartButtonEvent };
