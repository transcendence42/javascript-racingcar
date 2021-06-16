import { renderInputSection } from './view/inputSectionRenderer.js';
import { addInputButtonsEvent } from './controller/inputController.js';

const app = (): void => {
  renderInputSection();
  addInputButtonsEvent();
};

app();
