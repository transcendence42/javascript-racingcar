/* React Component 구조였으면 props로 함수를 넘겼을 것이다. */
import CarNameComponent from './CarName.js';
import RaceComponent from './Race.js';
const carNameInputEvent = () => {
    const carNamesInput = document.getElementById('car-name-input');
    if (carNamesInput) {
        CarNameComponent({
            $app: document.querySelector('#app'),
            carNames: carNamesInput.value,
        });
    }
};
const raceCountInputEvent = () => {
    const raceCountInput = document.querySelector('input[type="number"]');
    if (raceCountInput) {
        const result = RaceComponent({ count: Number(raceCountInput.value) });
        WinnerComponent({
            $app: document.querySelector('#app'),
            cars: result,
        });
    }
};
const inputController = () => {
    const gameButton = document.getElementsByTagName('button');
    gameButton[0].onclick = carNameInputEvent;
    gameButton[1].onclick = raceCountInputEvent;
};
/*****************************************************/
const winnerSection = (winner) => {
    return `<section class="d-flex justify-center mt-5">
                <div>
                  <h2>🏆 최종 우승자: ${winner} 🏆</h2>
                  <div class="d-flex justify-center">
                    <button type="button" class="btn btn-cyan">다시 시작하기</button>
                  </div>
                </div>
            </section>`;
};
const WinnerComponent = ({ $app, cars }) => {
    const findWinners = (cars) => {
        const totalDistances = cars.map((car) => car.distance);
        const maxDistance = Math.max(...totalDistances);
        return cars
            .filter((car) => {
            return car.distance === maxDistance;
        })
            .map((winner) => winner.name);
    };
    const render = ({ result }) => {
        const sectionElement = $app;
        if (sectionElement) {
            sectionElement.insertAdjacentHTML('beforeend', result);
        }
        return;
    };
    const retryButtonEvent = (e) => {
        var _a;
        if ($app) {
            $app.children[2].remove();
            $app.children[1].remove();
            $app.innerHTML = $app.children[0].outerHTML;
        }
        (_a = e.currentTarget) === null || _a === void 0 ? void 0 : _a.removeEventListener('click', retryButtonEvent);
        inputController();
        return;
    };
    const controller = () => {
        const retryButton = document.getElementsByTagName('button')[2];
        if (retryButton) {
            retryButton.onclick = retryButtonEvent;
        }
    };
    const init = ({ cars }) => {
        const result = winnerSection(findWinners(cars).join(', '));
        render({ result });
        controller();
    };
    return init({ cars });
};
export default WinnerComponent;
