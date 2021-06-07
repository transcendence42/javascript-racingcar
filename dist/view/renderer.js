import { $, $$ } from '../controller/utils.js';
import { inputSection, progressSection, carNameDiv, spinnerDiv, arrowDiv, resultSection } from './templates/index.js';
const renderInputSection = () => {
    $('#app').innerHTML = inputSection();
};
const renderProgressSection = () => {
    $('#app').insertAdjacentHTML('beforeend', progressSection());
};
const renderCarNameDiv = (carName) => {
    $('#progress-section > div').insertAdjacentHTML('beforeend', carNameDiv(carName));
};
const renderSpinnerDiv = () => {
    $$('#progress-section > div > div').forEach((element) => {
        element.insertAdjacentHTML(`beforeend`, spinnerDiv());
    });
};
const renderArrowDiv = (element) => {
    element.insertAdjacentHTML(`afterend`, arrowDiv());
};
const renderResultSection = (winners) => {
    $('#app').insertAdjacentHTML('beforeend', resultSection(winners));
};
export { renderInputSection, renderProgressSection, renderCarNameDiv, renderSpinnerDiv, renderArrowDiv, renderResultSection, };
