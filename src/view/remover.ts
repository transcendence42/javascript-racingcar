import { $$ } from '../utils.js';
import { ID } from '../constants/elements.js';

const removeSpinners = (): void => {
  $$(ID.SPINNER_DIVS).forEach((element) => {
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
