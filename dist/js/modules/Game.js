import CarNameComponent from './CarNameComponent.js';
const Game = ({ $app }) => {
    const carNameInputEvent = () => {
        const carNamesInput = document.querySelector('input[type="text"]');
        if (carNamesInput) {
            CarNameComponent({ carNames: carNamesInput.value });
        }
    };
    const raceCountInputEvent = () => {
        // const raceCountInput: HTMLInputElement = document.querySelector(
        //   'input[type="number"]'
        // ) as HTMLInputElement;
        // console.log('hi');
        // if (raceCountInput) {
        //   Race({ count: Number(raceCountInput.value) });
        // }
        console.log('hi2');
    };
    const render = () => { };
    const controller = () => {
        const gameButton = document.getElementsByTagName('button');
        gameButton[0].addEventListener('click', () => carNameInputEvent());
        gameButton[1].addEventListener('click', () => raceCountInputEvent());
    };
    const init = () => {
        render();
        controller();
    };
    init();
};
export default Game;
