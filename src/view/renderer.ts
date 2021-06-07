import { ID } from '../constants/index.js';
import { $, $$ } from '../utils.js';
import { inputSection, progressSection, carNameDiv, spinnerDiv, arrowDiv, resultSection } from './templates/index.js';

const renderInputSection = (): void => {
  $('#app')!.innerHTML = inputSection();
};

const renderProgressSection = (): void => {
  $('#app')!.insertAdjacentHTML('beforeend', progressSection());
};

const renderCarNameDiv = (carName: string): void => {
  $('#progress-section > div')!.insertAdjacentHTML('beforeend', carNameDiv(carName));
};

const renderSpinnerDiv = (): void => {
  $$('#progress-section > div > div')!.forEach((element) => {
    element.insertAdjacentHTML(`beforeend`, spinnerDiv());
  });
};

const renderArrowDiv = (element: Element): void => {
  element.insertAdjacentHTML(`afterend`, arrowDiv());
};

const renderResultSection = (winners: string): void => {
  $('#app')!.insertAdjacentHTML('beforeend', resultSection(winners));
};

export {
  renderInputSection,
  renderProgressSection,
  renderCarNameDiv,
  renderSpinnerDiv,
  renderArrowDiv,
  renderResultSection,
};
