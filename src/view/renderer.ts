import { ID } from '../constants/index.js';
import { inputSection, progressSection, carNameDiv, spinnerDiv, arrowDiv, resultSection } from './templates/index.js';

const renderInputSection = (): void => {
  document.getElementById(ID.APP_DIV)!.innerHTML = inputSection();
};

const renderProgressSection = (): void => {
  document.getElementById(ID.APP_DIV)!.insertAdjacentHTML(`beforeend`, progressSection());
};

const renderCarNameDiv = (element: Element, carName: string): void => {
  element.insertAdjacentHTML(`beforeend`, carNameDiv(carName));
};

const renderSpinnerDiv = (element: Element): void => {
  element.insertAdjacentHTML(`beforeend`, spinnerDiv());
};

const renderArrowDiv = (element: Element): void => {
  element.insertAdjacentHTML(`afterend`, arrowDiv());
};

const renderResultSection = (winners: string): void => {
  document.getElementById(ID.APP_DIV)!.insertAdjacentHTML(`beforeend`, resultSection(winners));
};

export {
  renderInputSection,
  renderProgressSection,
  renderCarNameDiv,
  renderSpinnerDiv,
  renderArrowDiv,
  renderResultSection,
};
