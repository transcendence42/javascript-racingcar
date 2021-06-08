import { $ } from '../utils.js';
import { ID } from '../constants/index.js';
import { getCarNames, getTryCount, restartApp } from './linstener.js';
const setInputButtonsEvent = () => {
    var _a, _b;
    (_a = $(ID.CARNAME_SUBMIT)) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => getCarNames());
    (_b = $(ID.TRYCOUNT_SUBMIT)) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => getTryCount());
};
const setRestartButtonEvent = () => {
    var _a;
    (_a = $(ID.RESTART_SUBMIT)) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => restartApp());
};
export { setInputButtonsEvent, setRestartButtonEvent };
