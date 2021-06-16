import { $ } from '../utils.js';
import { SELECTOR } from '../constants.js';
import { removeChildNodes } from '../view/utils.js';
import { renderInputSection } from '../view/inputSectionRenderer.js';
const init = () => {
    removeChildNodes($(SELECTOR.APP_DIV));
    renderInputSection();
    addRestartButtonEvent();
    $(SELECTOR.CARNAME_INPUT).focus();
};
const addRestartButtonEvent = () => {
    var _a;
    (_a = $(SELECTOR.RESTART_SUBMIT_BUTTON)) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => init());
};
export { addRestartButtonEvent };
