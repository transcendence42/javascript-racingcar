import { $ } from './utils.js';
const setCarNameDataset = (data) => {
    const carNamesInput = $('input[type="text"]');
    if (carNamesInput) {
        carNamesInput.dataset.click = data;
    }
};
const checkCarNameDataset = () => {
    const carNamesInput = $('input[type="text"]');
    if (carNamesInput) {
        return carNamesInput.dataset.click === 'click';
    }
    return false;
};
export { setCarNameDataset, checkCarNameDataset };
