import { getCarNames, getTryCount, initGame } from './linstener.js';

const setInputButtonsEventListener = (): void => {
  document.getElementById('car-names-submit')!.addEventListener('click', () => getCarNames());
  document.getElementById('racing-count-submit')!.addEventListener('click', () => getTryCount());
};

const setRetryButtonEventListener = (): void => {
  document.getElementById('retry-button')!.addEventListener('click', () => initGame());
};

export { setInputButtonsEventListener, setRetryButtonEventListener };
