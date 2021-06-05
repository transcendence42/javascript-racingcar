const $ = (selector: string): Element | null => document.querySelector(selector);

const $$ = (selector: string): NodeListOf<Element> => document.querySelectorAll(selector);

const clearInput = (element: HTMLInputElement) => {
  element.value = '';
  element.focus();
};

const disableInputValue = (element: HTMLInputElement) => {
  element.disabled = true;
}

const disableButtonClick = (element: HTMLButtonElement) => {
  element.disabled = true;
}


export { $, $$, clearInput, disableInputValue, disableButtonClick };
