import { $, $$ } from '../utils.js';
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
    $('#app').insertAdjacentHTML('beforeend', progressSection());
    carNameArray.forEach((carName) => {
        $('#progress-section .mt-4').insertAdjacentHTML('beforeend', carNameDiv(carName));
    });
    $$('#progress-section .mr-2').forEach((element) => {
        element.insertAdjacentHTML(`beforeend`, spinnerDiv());
    });
};
const renderArrowDiv = (roundWinnerIndex) => {
    $$('#progress-section .car-player').forEach((element, index) => {
        index === roundWinnerIndex ? element.insertAdjacentHTML(`afterend`, arrowDiv()) : null;
    });
};
const removeSpinnerDivs = () => {
    $$('#progress-section .mt-3').forEach((element) => {
        element.remove();
    });
};
export { renderProgressSection, renderArrowDiv, removeSpinnerDivs };
