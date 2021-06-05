import { ID } from '../constants/index.js';
import { inputSection, progressSection, carNameDiv, spinnerDiv, arrowDiv, resultSection } from './templates/index.js';
const renderInputSection = () => {
    document.getElementById(ID.APP_DIV).innerHTML = inputSection();
};
const renderProgressSection = () => {
    document.getElementById(ID.APP_DIV).insertAdjacentHTML(`beforeend`, progressSection());
};
const renderCarNameDiv = (element, carName) => {
    element.insertAdjacentHTML(`beforeend`, carNameDiv(carName));
};
const renderSpinnerDiv = (element) => {
    element.insertAdjacentHTML(`beforeend`, spinnerDiv());
};
const renderArrowDiv = (element) => {
    element.insertAdjacentHTML(`afterend`, arrowDiv());
};
const renderResultSection = (winners) => {
    document.getElementById(ID.APP_DIV).insertAdjacentHTML(`beforeend`, resultSection(winners));
};
export { renderInputSection, renderProgressSection, renderCarNameDiv, renderSpinnerDiv, renderArrowDiv, renderResultSection, };
