import Race from './Race.js';
const Game = ({ $app }) => {
    const carNameInputEvent = () => {
        Race();
    };
    const render = () => { };
    const controller = () => {
        const gameButton = document.getElementsByTagName('button');
        gameButton[0].addEventListener('click', () => carNameInputEvent());
    };
    const init = () => {
        render();
        controller();
    };
    init();
};
export default Game;
