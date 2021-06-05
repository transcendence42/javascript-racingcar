const $ = (selector: string): Element | null => document.querySelector(selector);

const $$ = (selector: string): NodeListOf<Element> => document.querySelectorAll(selector);

const clearInput = (element: HTMLInputElement) => {
  element.value = '';
  element.focus();
};

const toggleInputValueDisabled = (element: HTMLInputElement) => {
  if (element.disabled) {
    element.disabled = false;
  } else {
    element.disabled = true;
  }
};

const toggleClickButtonDisabled = (element: HTMLButtonElement) => {
  if (element.disabled) {
    element.disabled = false;
  } else {
    element.disabled = true;
  }
};

const removeChildNodes = (element: Element | null) => {
  if (element) {
    while (element.hasChildNodes()) {
      if (element.lastChild) {
        element.removeChild(element.lastChild);
      }
    }
  }
};

export { $, $$, clearInput, toggleInputValueDisabled, toggleClickButtonDisabled, removeChildNodes };
