const carNameInputInit = () => {
    const carNameInput = document.getElementById('car-name-input');
    carNameInput.value = '';
    carNameInput.focus();
};
const racingCountInputInit = () => {
    const racingCountInput = document.getElementById('racing-count-input');
    racingCountInput.value = '';
    racingCountInput.focus();
};
export { carNameInputInit, racingCountInputInit };
