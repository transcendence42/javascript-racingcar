import { ALERT } from '../constants/index.js';
const checkEmptyInput = (input) => {
    return input.value.trim() === '';
};
const checkArrayHasEmptyElement = (array) => {
    console.log(array);
    return array.some((x) => x === '');
};
const checkArrayHasOneElement = (array) => {
    return array.length < 2;
};
const checkArrayDupElements = (array) => {
    return array.some((x) => {
        return array.indexOf(x) !== array.lastIndexOf(x);
    });
};
const checkArrayElementsLength = (array) => {
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
    else if (checkArrayHasEmptyElement(carNameArray)) {
        alert('빈 이름 있음');
        return false;
    }
    else if (checkArrayHasOneElement(carNameArray)) {
        alert(ALERT.CAR_INPUT_ALONE);
        return false;
    }
    else if (checkArrayDupElements(carNameArray)) {
        alert(ALERT.CAR_INPUT_DOUBLE);
        return false;
    }
    else if (checkArrayElementsLength(carNameArray)) {
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
    else if (Number(tryCountInput.value) < 1) {
        alert(ALERT.TRY_INPUT_UINT);
        return false;
    }
    else if (Number(tryCountInput.value) > 20) {
        alert(ALERT.TRY_INPUT_TOO_BIG);
        return false;
    }
    return true;
};
export { checkCarNames, checkTryCount };
