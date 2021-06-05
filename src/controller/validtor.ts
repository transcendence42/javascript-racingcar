import { ALERT } from '../constants/index.js';

const checkEmptyInput = (input: HTMLInputElement) => {
  return input.value.trim() === '';
};

const checkElementsAlone = (array: Array<string>) => {
  return array.length < 2;
};

const checkElementsDouble = (array: Array<string>) => {
  return array.some((x) => {
    return array.indexOf(x) !== array.lastIndexOf(x);
  });
};

const checkElementsLength = (array: Array<string>) => {
  for (let index = 0; index < array.length; index += 1) {
    if (array[index].length > 5) {
      return true;
    }
  }
  return false;
};

const checkCarNames = (carNameInput: HTMLInputElement, carNameArray: Array<string>): boolean => {
  if (checkEmptyInput(carNameInput)) {
    alert(ALERT.CAR_INPUT_EMPTY);
    return false;
  } else if (checkElementsAlone(carNameArray)) {
    alert(ALERT.CAR_INPUT_ALONE);
    return false;
  } else if (checkElementsDouble(carNameArray)) {
    alert(ALERT.CAR_INPUT_DOUBLE);
    return false;
  } else if (checkElementsLength(carNameArray)) {
    alert(ALERT.CAR_INPUT_LENGTH);
    return false;
  }
  return true;
};

export { checkCarNames };
