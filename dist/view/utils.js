const clearInput = (element) => {
    element.value = '';
    element.focus();
};
const enableInput = (element) => {
    element.disabled = false;
};
const disableInput = (element) => {
    element.disabled = true;
};
const enableButton = (element) => {
    element.disabled = false;
};
const disableButton = (element) => {
    element.disabled = true;
};
const removeChildNodes = (element) => {
    if (!element) {
        return;
    }
    while (element.hasChildNodes()) {
        if (element.lastChild) {
            element.removeChild(element.lastChild);
        }
    }
};
export { clearInput, enableInput, disableInput, enableButton, disableButton, removeChildNodes };
