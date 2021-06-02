import CarNameComponent from './CarNameComponent.js';
import Race from './Race.js';
import Winner from './Winner.js';
const Game = ({ $app }) => {
    const carNameInputEvent = () => {
        const carNamesInput = document.getElementById('car-name-input');
        if (carNamesInput) {
            CarNameComponent({ carNames: carNamesInput.value });
        }
    };
    const raceCountInputEvent = () => {
        const raceCountInput = document.querySelector('input[type="number"]');
        if (raceCountInput) {
            const result = Race({ count: Number(raceCountInput.value) });
            Winner({ cars: result });
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
