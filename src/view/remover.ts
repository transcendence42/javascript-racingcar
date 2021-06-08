import { $$ } from '../utils.js';
import { SELECTOR } from '../constants/selector.js';

const removeSpinners = (): void => {
  $$(SELECTOR.SPINNER_DIVS).forEach((element) => {
    element.remove();
  });
};

const removeChildNodes = (element: Element | null): void => {
  if (!element) {
    return;
  }
  while (element.hasChildNodes()) {
    if (element.lastChild) {
      element.removeChild(element.lastChild);
    }
  }
};

export { removeSpinners, removeChildNodes };
