import { getCarNames, getTryCount, restartApp } from './linstener.js';
const setInputButtonsEvent = () => {
    document.getElementById('car-names-submit').addEventListener('click', () => getCarNames());
    document.getElementById('racing-count-submit').addEventListener('click', () => getTryCount());
};
const setRestartButtonEvent = () => {
    document.getElementById('restart-button').addEventListener('click', () => restartApp());
};
export { setInputButtonsEvent, setRestartButtonEvent };
