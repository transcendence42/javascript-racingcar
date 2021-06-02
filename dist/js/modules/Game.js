import CarNameComponent from './CarName.js';
import RaceComponent from './Race.js';
import WinnerComponent from './Winner.js';
const Game = ({ $app }) => {
    const carNameInputEvent = () => {
        const carNamesInput = document.getElementById('car-name-input');
        if (carNamesInput) {
            CarNameComponent({ $app, carNames: carNamesInput.value });
        }
    };
    const raceCountInputEvent = () => {
        const raceCountInput = document.querySelector('input[type="number"]');
        if (raceCountInput) {
            const result = RaceComponent({ count: Number(raceCountInput.value) });
            WinnerComponent({ $app, cars: result });
        }
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
