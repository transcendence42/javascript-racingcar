import CarNameComponent from './CarName.js';
import RaceComponent from './Race.js';
const Game = ({ $app }) => {
    const carNameInputEvent = () => {
        const carNamesInput = document.getElementById('car-name-input');
        if (carNamesInput) {
            CarNameComponent({ $app, carNames: carNamesInput.value });
        }
    };
    const raceCountInputEvent = () => {
        const raceCountInput = document.querySelector('input[type="number"]');
        const carNamesInput = document.querySelector('input[type="text"]');
        if (raceCountInput && carNamesInput.value !== '') {
            RaceComponent({
                $app,
                count: Number(raceCountInput.value),
            });
        }
        else {
            alert('자동차 이름 먼저 입력해주세요!');
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
