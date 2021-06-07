export function checkNamesValidation(inputString) {
    const rawNames = inputString.split(",");
    const names = rawNames
        .map(x => x.trim())
        .filter(x => x.length <= 5 && x.length > 0);
    if (rawNames.length != names.length || names.length > 5) {
        return false;
    }
    return true;
}
export function checkNumberValidation(inputNumber) {
    if (Number.isNaN(Number(inputNumber)) || Number(inputNumber) <= 0) {
        return false;
    }
    return true;
}
