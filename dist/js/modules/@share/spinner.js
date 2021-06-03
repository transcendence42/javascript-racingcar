const removeSpinner = (carPlayer) => {
    var _a, _b, _c, _d;
    if (((_b = (_a = carPlayer.parentNode) === null || _a === void 0 ? void 0 : _a.lastElementChild) === null || _b === void 0 ? void 0 : _b.className) === 'd-flex justify-center mt-3') {
        (_d = (_c = carPlayer.parentNode) === null || _c === void 0 ? void 0 : _c.lastElementChild) === null || _d === void 0 ? void 0 : _d.remove();
    }
};
export { removeSpinner };
