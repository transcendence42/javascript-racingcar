import { renderInputSection } from './view/renderer.js';
import { setInputButtonsEvent } from './controller/event.js';
const app = () => {
    renderInputSection();
    setInputButtonsEvent();
};
app();
