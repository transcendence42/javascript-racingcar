import CarNameComponent from './CarNameComponent.js';
const Game = ({ $app }) => {
    const carNameInputEvent = () => {
        const carNamesInput = document.querySelector('input[type="text"]');
        if (carNamesInput) {
            CarNameComponent({ carNames: carNamesInput.value });
        }
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
