import { inputSection, progressSection, carNameDiv, spinnerDiv, resultSection } from './templates/index.js';

const renderInputSection = (): void => {
  document.getElementById('app')!.innerHTML = inputSection();
};

const renderProgressSection = (): void => {
  document.getElementById('app')!.insertAdjacentHTML(`beforeend`, progressSection());
};

const renderCarNameDiv = (carNameArray: Array<string>): void => {
  carNameArray.forEach((carName) => {
    document.getElementsByClassName('mt-4 d-flex')[0].insertAdjacentHTML(`beforeend`, carNameDiv(carName));
  });
};

const renderSpinnerDiv = (carNameArray: Array<string>): void => {
  console.log(carNameArray.length)
  for (let index = 0; index < carNameArray.length; index += 1) {
    console.log(index);
    document.getElementsByClassName('mr-2')[index].insertAdjacentHTML(`beforeend`, spinnerDiv());
  }
};

const renderArrowDiv = (carNameArray: Array<string>): void => {};

const renderResultSection = (winners: string): void => {
  document.getElementById('app')!.insertAdjacentHTML(`beforeend`, resultSection(winners));
};

export {
  renderInputSection,
  renderProgressSection,
  renderCarNameDiv,
  renderSpinnerDiv,
  renderArrowDiv,
  renderResultSection,
};
