import { $ } from '../utils.js';
import { SELECTOR } from '../constants.js';
import { removeChildNodes } from '../view/utils.js';
import { renderInputSection } from '../view/inputSectionRenderer.js';

const init = (): void => {
  removeChildNodes($(SELECTOR.APP_DIV));
  renderInputSection();
  addRestartButtonEvent();
  ($(SELECTOR.CARNAME_INPUT) as HTMLInputElement).focus();
};

const addRestartButtonEvent = (): void => {
  $(SELECTOR.RESTART_SUBMIT_BUTTON)?.addEventListener('click', () => init());
};

export { addRestartButtonEvent };
