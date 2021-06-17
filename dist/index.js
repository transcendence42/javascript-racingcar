import { renderInputSection } from './view/inputSectionRenderer.js';
import { addInputButtonsEvent } from './controller/inputController.js';
const app = () => {
    renderInputSection();
    addInputButtonsEvent();
};
app();
