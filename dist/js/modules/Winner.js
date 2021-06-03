import { inputController } from './@share/controller.js';
import { winnerSection } from './@share/view.js';
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
