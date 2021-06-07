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

const makeDelay = async (ms: number): Promise<void> => {
  return new Promise((r) => setTimeout(r, ms));
};

export {
  $,
  $$,
  inputElementClear,
  inputElementEnable,
  inputElementDisable,
  buttonElementEnable,
  buttonElementDisable,
  makeDelay,
};
