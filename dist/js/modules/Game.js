import { inputController } from './@share/controller.js';
import { startSection } from './@share/view.js';
const Game = ({ $app }) => {
    const render = (JSX) => {
        const sectionElement = $app;
        if (sectionElement) {
            sectionElement.insertAdjacentHTML('beforeend', JSX);
        }
        return;
    };
    const init = () => {
        render(startSection);
        inputController();
    };
    init();
};
export default Game;
