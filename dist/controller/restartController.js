import { $ } from '../utils.js';
import { removeChildNodes } from '../view/utils.js';
import { renderInputSection } from '../view/inputSectionRenderer.js';
const init = () => {
    removeChildNodes($('#app'));
    renderInputSection();
    addRestartButtonEvent();
    $('#car-names-input').focus();
};
const addRestartButtonEvent = () => {
    var _a;
    (_a = $('#restart-button')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => init());
};
export { addRestartButtonEvent };
