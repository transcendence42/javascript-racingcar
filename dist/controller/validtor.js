import { ALERT } from '../constants/index.js';
const checkEmptyInput = (input) => {
    return input.value.trim() === '';
};
const checkElementsAlone = (array) => {
    return array.length < 2;
};
const checkElementsDouble = (array) => {
    return array.some((x) => {
        return array.indexOf(x) !== array.lastIndexOf(x);
    });
};
const checkElementsLength = (array) => {
    for (let index = 0; index < array.length; index += 1) {
        if (array[index].length > 5) {
            return true;
        }
    }
    return false;
};
const checkCarNames = (carNameInput, carNameArray) => {
    if (checkEmptyInput(carNameInput)) {
        alert(ALERT.CAR_INPUT_EMPTY);
        return false;
    }
    else if (checkElementsAlone(carNameArray)) {
        alert(ALERT.CAR_INPUT_ALONE);
        return false;
    }
    else if (checkElementsDouble(carNameArray)) {
        alert(ALERT.CAR_INPUT_DOUBLE);
        return false;
    }
    else if (checkElementsLength(carNameArray)) {
        alert(ALERT.CAR_INPUT_LENGTH);
        return false;
    }
    return true;
};
const checkTryCount = (tryCountInput) => {
    if (checkEmptyInput(tryCountInput)) {
        alert(ALERT.TRY_INPUT_EMPTY);
        return false;
    }
    else if (Number(tryCountInput.value) > 20) {
        alert(ALERT.TRY_INPUT_TOO_BIG);
        return false;
    }
    return true;
};
export { checkCarNames, checkTryCount };
