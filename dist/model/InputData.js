import { RULE, ALERT } from '../constants.js';
class InputData {
    constructor() {
        this.carNameArray = [];
        this.tryCount = 0;
    }
    checkEmptyInput(input) {
        return input.value.trim() === '';
    }
    ;
    checkArrayHasEmptyElement(array) {
        return array.some((x) => x === '');
    }
    checkArrayHasOneElement(array) {
        return array.length < 2;
    }
    ;
    checkArrayDupElements(array) {
        return array.some((x) => {
            return array.indexOf(x) !== array.lastIndexOf(x);
        });
    }
    ;
    checkArrayElementsLength(array) {
        for (let index = 0; index < array.length; index += 1) {
            if (array[index].length > RULE.MAX_CARNAME_LENGTH) {
                return true;
            }
        }
        return false;
    }
    ;
    checkCarNames(carNameInput, carNameArray) {
        if (this.checkEmptyInput(carNameInput)) {
            alert(ALERT.CARNAME_NOTHING);
            return false;
        }
        else if (this.checkArrayHasOneElement(carNameArray)) {
            alert(ALERT.CARNAME_ALONE);
            return false;
        }
        else if (this.checkArrayHasEmptyElement(carNameArray)) {
            alert(ALERT.CARNAME_EMPTY);
            return false;
        }
        else if (this.checkArrayDupElements(carNameArray)) {
            alert(ALERT.CARNAME_DOUBLE);
            return false;
        }
        else if (this.checkArrayElementsLength(carNameArray)) {
            alert(ALERT.CARNAME_LENGTH);
            return false;
        }
        return true;
    }
    ;
    checkTryCount(tryCountInput) {
        if (this.checkEmptyInput(tryCountInput)) {
            alert(ALERT.TRYCOUNT_NOTHING);
            return false;
        }
        else if (Number(tryCountInput.value) < RULE.MIN_TRYCOUNT) {
            alert(ALERT.TRYCOUNT_UINT);
            return false;
        }
        else if (Number(tryCountInput.value) > RULE.MAX_TRYCOUNT) {
            alert(ALERT.TRYCOUNT_TOO_BIG);
            return false;
        }
        return true;
    }
    ;
}
export { InputData };
