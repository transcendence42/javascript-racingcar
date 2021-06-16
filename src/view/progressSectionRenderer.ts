import { $, $$ } from '../utils.js';
import { SELECTOR } from '../constants.js';

const progressSection = (): string => {
  return `
  <section id="progress-section" class="d-flex justify-center mt-5">
    <div class="mt-4 d-flex">
    </div>
  </section>
  `;
};

const carNameDiv = (carName: string): string => {
  return `
  <div class="mr-2">
    <div class="car-player">${carName}</div>
  </div>
  `;
};

const spinnerDiv = (): string => {
  return `
  <div class="d-flex justify-center mt-3">
    <div class="relative spinner-container">
      <span class="material spinner"></span>
    </div>
  </div>
  `;
};

const arrowDiv = (): string => {
  return `
  <div class="forward-icon mt-2">⬇️️</div>
  `;
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

const removeSpinnerDivs = (): void => {
  $$(SELECTOR.SPINNER_DIVS).forEach((element) => {
    element.remove();
  });
};

export { renderProgressSection, renderArrowDiv, removeSpinnerDivs };
