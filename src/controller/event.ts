import { getCarNames, getTryCount, initGame } from './linstener.js';

const setInputButtonsEvent = (): void => {
  document.getElementById('car-names-submit')!.addEventListener('click', () => getCarNames());
  document.getElementById('racing-count-submit')!.addEventListener('click', () => getTryCount());
};

const setRetryButtonEvent = (): void => {
  document.getElementById('retry-button')!.addEventListener('click', () => initGame());
};

export { setInputButtonsEvent, setRetryButtonEvent };
