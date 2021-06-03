import { carNamesSection, carNameDiv } from './@share/view.js';
import { ERROR_MESSAGE } from './@share/message.js';
const CarNameComponent = ({ $app, carNames }) => {
    const checkCarNames = (carNameList) => carNameList.length === carNameList.filter((x) => x.length <= 5 && x !== '').length;
    const render = (JSX) => {
        const sectionElement = $app;
        if (sectionElement) {
            sectionElement.insertAdjacentHTML('beforeend', JSX);
        }
        return;
    };
    const init = (carNames) => {
        const carNameList = carNames.split(',').map((x) => x.trim());
        if (checkCarNames(carNameList)) {
            render(carNamesSection(carNameList.map((carName) => carNameDiv(carName)).join('')));
        }
        else {
            alert(ERROR_MESSAGE.INVALID_CAR_NAME_INPUT);
            const carNameInput = document.getElementById('car-name-input');
            carNameInput.value = '';
            carNameInput.focus();
        }
    };
    init(carNames);
};
export default CarNameComponent;
