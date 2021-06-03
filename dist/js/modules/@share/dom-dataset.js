const setCarNameDataset = (data) => {
    const carNamesInput = document.querySelector('input[type="text"]');
    if (carNamesInput) {
        carNamesInput.dataset.click = data;
    }
};
const checkCarNameDataset = () => {
    const carNamesInput = document.querySelector('input[type="text"]');
    if (carNamesInput) {
        return carNamesInput.dataset.click === 'click';
    }
    return false;
};
export { setCarNameDataset, checkCarNameDataset };
