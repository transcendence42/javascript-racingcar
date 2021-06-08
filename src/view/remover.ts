import { $$ } from '../utils.js';

const removeSpinners = (): void => {
  $$('div.d-flex.justify-center.mt-3').forEach((element) => {
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
