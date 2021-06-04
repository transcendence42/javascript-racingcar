import { setEventListener } from './controller/observer.js';
import { renderInputSection } from './view/renderer.js';

const app = (): void => {
  renderInputSection();
  setEventListener();
};

app();
