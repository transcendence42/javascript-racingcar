var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Car {
    constructor(name) {
        this.name = name;
        this.distance = 0;
    }
    move() {
        this.distance += 1;
    }
}
const getRandomSingleDigit = (min, max) => {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
};
const wait = (delay) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve) => setTimeout(resolve, delay));
});
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);
const disable = (element) => {
    element.disabled = true;
};
const enable = (element) => {
    element.disabled = false;
};
const carNameEnable = () => {
    var _a;
    const carNamesInput = $('#car-name-input');
    enable(carNamesInput);
    enable((_a = carNamesInput.parentElement) === null || _a === void 0 ? void 0 : _a.children[1]);
};
const countEnable = () => {
    var _a;
    const raceCountInput = $('input[type="number"]');
    enable(raceCountInput);
    enable((_a = raceCountInput.parentElement) === null || _a === void 0 ? void 0 : _a.children[1]);
};
const initEnable = () => {
    var _a, _b;
    const carNamesInput = $('#car-name-input');
    const raceCountInput = $('input[type="number"]');
    enable(carNamesInput);
    enable((_a = carNamesInput.parentElement) === null || _a === void 0 ? void 0 : _a.children[1]);
    enable(raceCountInput);
    enable((_b = raceCountInput.parentElement) === null || _b === void 0 ? void 0 : _b.children[1]);
};
export { Car, getRandomSingleDigit, wait, $, $$, disable, initEnable, carNameEnable, countEnable };
