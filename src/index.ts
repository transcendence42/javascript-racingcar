import { renderInputSection } from './view/renderer.js';
import { setInputButtonsEventListener } from './controller/event.js';

const app = (): void => {
  renderInputSection();
  setInputButtonsEventListener();
};

app();
