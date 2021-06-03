import CarNameComponent from '../CarName.js';
import RaceComponent from '../Race.js';
const carNameInputEvent = () => {
    const carNamesInput = document.getElementById('car-name-input');
    if (carNamesInput) {
        CarNameComponent({ $app: document.querySelector('#app'), carNames: carNamesInput.value });
    }
};
const raceCountInputEvent = () => {
    const raceCountInput = document.querySelector('input[type="number"]');
    const carNamesInput = document.querySelector('input[type="text"]');
    if (raceCountInput && carNamesInput.value !== '') {
        RaceComponent({
            $app: document.querySelector('#app'),
            count: Number(raceCountInput.value),
        });
    }
    else {
        alert('자동차 이름 먼저 입력해주세요!');
    }
};
const inputController = () => {
    const gameButton = document.getElementsByTagName('button');
    gameButton[0].onclick = carNameInputEvent;
    gameButton[1].onclick = raceCountInputEvent;
};
export { inputController };
