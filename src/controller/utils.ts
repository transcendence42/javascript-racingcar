const $ = (selector: string): Element | null => document.querySelector(selector);

const $$ = (selector: string): NodeListOf<Element> => document.querySelectorAll(selector);

const clearInput = (element: HTMLInputElement): void => {
  element.value = '';
  element.focus();
};

const toggleInputValueDisabled = (element: HTMLInputElement): void => {
  if (element.disabled) {
    element.disabled = false;
  } else {
    element.disabled = true;
  }
};

const toggleClickButtonDisabled = (element: HTMLButtonElement): void => {
  if (element.disabled) {
    element.disabled = false;
  } else {
    element.disabled = true;
  }
};

const removeChildNodes = (element: Element | null): void => {
  if (!element) {
    return;
  }
  while (element.hasChildNodes()) {
    if (element.lastChild) {
      element.removeChild(element.lastChild);
    }
  }
};

const makeDelay = async (ms: number) => {
  return new Promise((r) => setTimeout(r, ms));
};

export { $, $$, clearInput, toggleInputValueDisabled, toggleClickButtonDisabled, removeChildNodes, makeDelay };
