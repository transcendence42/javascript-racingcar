import { $, $$ } from '../utils.js';
import { SELECTOR } from '../constants/index.js';
import { inputSection, progressSection, carNameDiv, spinnerDiv, arrowDiv, resultSection } from './templates/index.js';
const renderInputSection = () => {
    $(SELECTOR.APP_DIV).innerHTML = inputSection();
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
const renderResultSection = (winners) => {
    $(SELECTOR.APP_DIV).insertAdjacentHTML('beforeend', resultSection(winners));
};
export { renderInputSection, renderProgressSection, renderArrowDiv, renderResultSection };
