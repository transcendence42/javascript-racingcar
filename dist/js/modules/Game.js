import CarNameComponent from './CarNameComponent.js';
const Game = ({ $app }) => {
    const carNameInputEvent = () => {
        const carNamesInput = document.getElementById('car-name-input');
        if (carNamesInput) {
            CarNameComponent({ carNames: carNamesInput.value });
        }
        console.log('hi');
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
        gameButton[0].onclick = carNameInputEvent;
        gameButton[1].onclick = raceCountInputEvent;
    };
    const init = () => {
        render();
        controller();
    };
    init();
};
export default Game;
