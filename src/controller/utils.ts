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


export { clearInput, disableInputValue, disableButtonClick };
