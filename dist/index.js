import { renderInputSection } from './view/renderer.js';
import { setInputButtonsEventListener } from './controller/event.js';
const app = () => {
    renderInputSection();
    setInputButtonsEventListener();
};
app();
