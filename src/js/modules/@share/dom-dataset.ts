const setCarNameDataset = (data: string): void => {
  const carNamesInput: HTMLInputElement = document.querySelector('input[type="text"]') as HTMLInputElement;
  if (carNamesInput) {
    carNamesInput.dataset.click = data;
  }
};

const checkCarNameDataset = (): boolean => {
  const carNamesInput: HTMLInputElement = document.querySelector('input[type="text"]') as HTMLInputElement;
  if (carNamesInput) {
    return carNamesInput.dataset.click === 'click';
  }
  return false;
};

export { setCarNameDataset, checkCarNameDataset };
