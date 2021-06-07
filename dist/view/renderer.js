import { ID } from '../constants/index.js';
import { $, $$ } from '../utils.js';
import { inputSection, progressSection, carNameDiv, spinnerDiv, arrowDiv, resultSection } from './templates/index.js';
const renderInputSection = () => {
    $(ID.APP_DIV).innerHTML = inputSection();
};
const renderProgressSection = (carNameArray) => {
    $(ID.APP_DIV).insertAdjacentHTML('beforeend', progressSection());
    carNameArray.forEach((carName) => {
        $(ID.CARNAMES_DIV).insertAdjacentHTML('beforeend', carNameDiv(carName));
    });
    $$(ID.CAR_DIV_LIST).forEach((element) => {
        element.insertAdjacentHTML(`beforeend`, spinnerDiv());
    });
};
const renderArrowDiv = (roundWinnerIndex) => {
    $$(ID.CARNAME_DIV_LIST).forEach((element, index) => {
        index === roundWinnerIndex ? element.insertAdjacentHTML(`afterend`, arrowDiv()) : null;
    });
};
const renderResultSection = (winners) => {
    $(ID.APP_DIV).insertAdjacentHTML('beforeend', resultSection(winners));
};
export { renderInputSection, renderProgressSection, renderArrowDiv, renderResultSection };
