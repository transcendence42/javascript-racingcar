const carNameInputInit = () => {
  const carNameInput = document.getElementById('car-name-input') as HTMLInputElement;
  carNameInput.value = '';
  carNameInput.focus();
};

const racingCountInputInit = () => {
  const racingCountInput = document.getElementById('racing-count-input') as HTMLInputElement;
  racingCountInput.value = '';
  racingCountInput.focus();
};

export { carNameInputInit, racingCountInputInit };
