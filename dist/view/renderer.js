import { $, $$ } from '../utils.js';
import { inputSection, progressSection, carNameDiv, spinnerDiv, arrowDiv, resultSection } from './templates/index.js';
const renderInputSection = () => {
    $('#app').innerHTML = inputSection();
};
const renderProgressSection = (carNameArray) => {
    $('#app').insertAdjacentHTML('beforeend', progressSection());
    carNameArray.forEach((carName) => {
        $('#progress-section > div').insertAdjacentHTML('beforeend', carNameDiv(carName));
    });
    $$('#progress-section > div > div').forEach((element) => {
        element.insertAdjacentHTML(`beforeend`, spinnerDiv());
    });
};
// const renderArrowDiv = (element: Element): void => {
//   element.insertAdjacentHTML(`afterend`, arrowDiv());
// };
const renderArrowDiv = (roundWinnerIndex) => {
    $$('div.car-player').forEach((element, index) => {
        index === roundWinnerIndex ? element.insertAdjacentHTML(`afterend`, arrowDiv()) : null;
    });
};
const renderResultSection = (winners) => {
    $('#app').insertAdjacentHTML('beforeend', resultSection(winners));
};
export { renderInputSection, renderProgressSection, renderArrowDiv, renderResultSection, };
