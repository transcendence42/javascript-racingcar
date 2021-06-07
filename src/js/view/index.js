var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import $ from "../selector.js";
import { makeCars, getChampions } from "../model/car.js";
import { makeCarPlayerTemplate, makeArrowTemplate, makeChampionText } from "./templates.js";
export function renderCarPlayerSections(inputString) {
    const cars = makeCars(inputString.split(",").map(x => x.trim()));
    $("#result").show();
    $("#result div").innerHTML = "";
    cars.forEach(car => {
        $("#result div").insertAdjacentHTML("beforeend", makeCarPlayerTemplate(car.name));
    });
    return cars;
}
export function deleteSpinners() {
    var _a;
    let spinner = $(".spinner-container").element;
    while (spinner) {
        (_a = spinner.parentElement) === null || _a === void 0 ? void 0 : _a.remove();
        spinner = $(".spinner-container").element;
    }
}
export function renderArrow(name) {
    $(`#player-${name}`).insertAdjacentHTML("afterend", makeArrowTemplate());
}
export function renderChampion(cars) {
    return __awaiter(this, void 0, void 0, function* () {
        const championMsg = makeChampionText(getChampions(cars));
        $("h2").innerHTML = championMsg;
        $("#champion").show();
    });
}
function hideElements() {
    $("#repetition").setAttribute("style", "display: none;");
    $("#result").setAttribute("style", "display: none;");
    $("#champion").setAttribute("style", "display: none;");
}
export function initView() {
    hideElements();
}
