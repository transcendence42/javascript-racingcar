const clearInput = (element: HTMLInputElement): void => {
  element.value = '';
  element.focus();
};

const enableInput = (element: HTMLInputElement): void => {
  element.disabled = false;
};

const disableInput = (element: HTMLInputElement): void => {
  element.disabled = true;
};

const enableButton = (element: HTMLButtonElement): void => {
  element.disabled = false;
};

const disableButton = (element: HTMLButtonElement): void => {
  element.disabled = true;
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

export { clearInput, enableInput, disableInput, enableButton, disableButton, removeChildNodes };
