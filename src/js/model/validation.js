export function checkNamesValidation(inputString) {
    const rawNames = inputString.split(",");
    const names = rawNames.filter(x => x.length <= 5);
    if (rawNames.length != names.length || names.length > 5) {
        return false;
    }
    return true;
}
export function checkNumberValidation(inputNumber) {
    console.log(Number(inputNumber));
    if (Number.isNaN(Number(inputNumber)) || Number(inputNumber) <= 0) {
        return false;
    }
    return true;
}
