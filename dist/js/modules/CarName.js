const carNamesSection = (carNames) => {
    return `<section class="d-flex justify-center mt-5">
            <div class="mt-4 d-flex">
              ${carNames}
            </div>
          </section>`;
};
const carNameDiv = (carName) => {
    return `<div class="mr-2">
            <div class="car-player">${carName}</div>
          </div>`;
};
const CarNameComponent = ({ $app, carNames, }) => {
    const checkCarNames = (carNameList) => carNameList.length ===
        carNameList.filter((x) => x.length <= 5 && x !== '').length;
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
            alert('유효하지 않은 입력입니다. 재입력 해주세요.');
            const carNameInput = document.getElementById('car-name-input');
            carNameInput.value = '';
            carNameInput.focus();
        }
    };
    init(carNames);
};
export default CarNameComponent;
// <div class="forward-icon mt-2">⬇️️</div>
// <div class="relative spinner-container">
// <span class="material spinner"></span>
// </div>
