const clearInput = (element: HTMLInputElement) => {
  element.value = '';
  element.focus();
};

const preventInputValue = (element: HTMLInputElement) => {
  element.disabled = true;
}

const preventButtonClick = (element: HTMLButtonElement) => {
  element.disabled = true;
}


export { clearInput, preventInputValue, preventButtonClick };
