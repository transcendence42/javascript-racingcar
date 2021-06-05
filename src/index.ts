import { renderInputSection } from './view/renderer.js';
import { setInputButtonsEvent } from './controller/event.js';

const app = (): void => {
  renderInputSection();
  setInputButtonsEvent();
};

app();
