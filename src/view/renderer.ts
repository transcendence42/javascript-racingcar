import { ID } from '../constants/index.js';
import { $, $$ } from '../utils.js';
import { inputSection, progressSection, carNameDiv, spinnerDiv, arrowDiv, resultSection } from './templates/index.js';

const renderInputSection = (): void => {
  ($(ID.APP_DIV) as HTMLDivElement).innerHTML = inputSection();
};

const renderProgressSection = (carNameArray: Array<string>): void => {
  ($(ID.APP_DIV) as HTMLDivElement).insertAdjacentHTML('beforeend', progressSection());
  carNameArray.forEach((carName) => {
    ($(ID.CARNAMES_DIV) as HTMLDivElement).insertAdjacentHTML('beforeend', carNameDiv(carName));
  });
  ($$(ID.CAR_DIV_LIST) as NodeListOf<HTMLDivElement>).forEach((element) => {
    element.insertAdjacentHTML(`beforeend`, spinnerDiv());
  });
};

const renderArrowDiv = (roundWinnerIndex: number): void => {
  ($$(ID.CARNAME_DIV_LIST) as NodeListOf<HTMLDivElement>).forEach((element, index) => {
    index === roundWinnerIndex ? element.insertAdjacentHTML(`afterend`, arrowDiv()) : null;
  });
};

const renderResultSection = (winners: string): void => {
  ($(ID.APP_DIV) as HTMLDivElement).insertAdjacentHTML('beforeend', resultSection(winners));
};

export { renderInputSection, renderProgressSection, renderArrowDiv, renderResultSection };
