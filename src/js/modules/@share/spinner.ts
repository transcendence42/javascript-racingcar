const removeSpinner = (carPlayer: Element): void => {
  if (carPlayer.parentNode?.lastElementChild?.className === 'd-flex justify-center mt-3') {
    carPlayer.parentNode?.lastElementChild?.remove();
  }
};

export { removeSpinner };
