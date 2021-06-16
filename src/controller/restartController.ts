import { $ } from '../utils.js';
import { removeChildNodes } from '../view/utils.js';
import { renderInputSection } from '../view/inputSectionRenderer.js';

const init = (): void => {
  removeChildNodes($('#app'));
  renderInputSection();
  addRestartButtonEvent();
  ($('#car-names-input') as HTMLInputElement).focus();
};

const addRestartButtonEvent = (): void => {
  $('#restart-button')?.addEventListener('click', () => init());
};

export { addRestartButtonEvent };
