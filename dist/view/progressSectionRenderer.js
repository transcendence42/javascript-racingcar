import { $, $$ } from '../utils.js';
import { SELECTOR } from '../constants.js';
const progressSection = () => {
    return `
  <section id="progress-section" class="d-flex justify-center mt-5">
    <div class="mt-4 d-flex">
    </div>
  </section>
  `;
};
const carNameDiv = (carName) => {
    return `
  <div class="mr-2">
    <div class="car-player">${carName}</div>
  </div>
  `;
};
const spinnerDiv = () => {
    return `
  <div class="d-flex justify-center mt-3">
    <div class="relative spinner-container">
      <span class="material spinner"></span>
    </div>
  </div>
  `;
};
const arrowDiv = () => {
    return `
  <div class="forward-icon mt-2">⬇️️</div>
  `;
};
const renderProgressSection = (carNameArray) => {
    $(SELECTOR.APP_DIV).insertAdjacentHTML('beforeend', progressSection());
    carNameArray.forEach((carName) => {
        $(SELECTOR.CARNAMES_DIV).insertAdjacentHTML('beforeend', carNameDiv(carName));
    });
    $$(SELECTOR.CAR_RACE_TRACK_DIVS).forEach((element) => {
        element.insertAdjacentHTML(`beforeend`, spinnerDiv());
    });
};
const renderArrowDiv = (roundWinnerIndex) => {
    $$(SELECTOR.CARNAME_DIVS).forEach((element, index) => {
        index === roundWinnerIndex ? element.insertAdjacentHTML(`afterend`, arrowDiv()) : null;
    });
};
const removeSpinnerDivs = () => {
    $$(SELECTOR.SPINNER_DIVS).forEach((element) => {
        element.remove();
    });
};
export { renderProgressSection, renderArrowDiv, removeSpinnerDivs };
