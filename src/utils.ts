const $ = (selector: string): Element | null => document.querySelector(selector);

const $$ = (selector: string): NodeListOf<Element> => document.querySelectorAll(selector);

const inputElementClear = (element: HTMLInputElement): void => {
  element.value = '';
  element.focus();
};

const inputElementEnable = (element: HTMLInputElement): void => {
  element.disabled = false;
};

const inputElementDisable = (element: HTMLInputElement): void => {
  element.disabled = true;
};

const buttonElementEnable = (element: HTMLButtonElement): void => {
  element.disabled = false;
};

const buttonElementDisable = (element: HTMLButtonElement): void => {
  element.disabled = true;
};

export {
  $,
  $$,
  inputElementClear,
  inputElementEnable,
  inputElementDisable,
  buttonElementEnable,
  buttonElementDisable
};
