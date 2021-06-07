import { $, $$ } from '../utils.js';
import { inputSection, progressSection, carNameDiv, spinnerDiv, arrowDiv, resultSection } from './templates/index.js';

const renderInputSection = (): void => {
  $('#app')!.innerHTML = inputSection();
};

const renderProgressSection = (carNameArray: Array<string>): void => {
  $('#app')!.insertAdjacentHTML('beforeend', progressSection());
  carNameArray.forEach((carName) => {
    $('#progress-section > div')!.insertAdjacentHTML('beforeend', carNameDiv(carName));
  });
  $$('#progress-section > div > div')!.forEach((element) => {
    element.insertAdjacentHTML(`beforeend`, spinnerDiv());
  });
};

const renderArrowDiv = (roundWinnerIndex: number): void => {
  $$('div.car-player').forEach((element, index) => {
    index === roundWinnerIndex ?  element.insertAdjacentHTML(`afterend`, arrowDiv()) : null;
  });
}

const renderResultSection = (winners: string): void => {
  $('#app')!.insertAdjacentHTML('beforeend', resultSection(winners));
};

export {
  renderInputSection,
  renderProgressSection,
  renderArrowDiv,
  renderResultSection,
};
