import { $, $$ } from '../utils.js';
import { SELECTOR } from '../constants/index.js';
import { inputSection, progressSection, carNameDiv, spinnerDiv, arrowDiv, resultSection } from './templates/index.js';

const renderInputSection = (): void => {
  ($(SELECTOR.APP_DIV) as HTMLDivElement).innerHTML = inputSection();
};

const renderProgressSection = (carNameArray: Array<string>): void => {
  ($(SELECTOR.APP_DIV) as HTMLDivElement).insertAdjacentHTML('beforeend', progressSection());
  carNameArray.forEach((carName) => {
    ($(SELECTOR.CARNAMES_DIV) as HTMLDivElement).insertAdjacentHTML('beforeend', carNameDiv(carName));
  });
  ($$(SELECTOR.CAR_RACE_TRACK_DIVS) as NodeListOf<HTMLDivElement>).forEach((element) => {
    element.insertAdjacentHTML(`beforeend`, spinnerDiv());
  });
};

const renderArrowDiv = (roundWinnerIndex: number): void => {
  ($$(SELECTOR.CARNAME_DIVS) as NodeListOf<HTMLDivElement>).forEach((element, index) => {
    index === roundWinnerIndex ? element.insertAdjacentHTML(`afterend`, arrowDiv()) : null;
  });
};

const renderResultSection = (winners: string): void => {
  ($(SELECTOR.APP_DIV) as HTMLDivElement).insertAdjacentHTML('beforeend', resultSection(winners));
};

export { renderInputSection, renderProgressSection, renderArrowDiv, renderResultSection };
