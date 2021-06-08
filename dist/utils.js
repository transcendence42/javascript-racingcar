const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);
const inputElementClear = (element) => {
    element.value = '';
    element.focus();
};
const inputElementEnable = (element) => {
    element.disabled = false;
};
const inputElementDisable = (element) => {
    element.disabled = true;
};
const buttonElementEnable = (element) => {
    element.disabled = false;
};
const buttonElementDisable = (element) => {
    element.disabled = true;
};
export { $, $$, inputElementClear, inputElementEnable, inputElementDisable, buttonElementEnable, buttonElementDisable };
