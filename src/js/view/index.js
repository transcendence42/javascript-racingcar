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
import { makeCars } from "../model/car.js";
import { checkNamesValidation, checkNumberValidation } from "../model/validation.js";
import { makeCarPlayerTemplate, makeArrowTemplate } from "./templates.js";
import { ftSleep } from "../utils.js";
export function renderRepetitionInput() {
    if (checkNamesValidation($("#names input").value)) {
        $("#names input").setAttribute("readonly", "");
        $("#repetition").show();
    }
    else {
        $("#names input").value = "";
        alert("이름을 올바르게 입력해 주세요.");
    }
}
function renderCarPlayerSections(inputString) {
    let cars = makeCars(inputString.split(",").map(x => x.trim()));
    $("#result").show();
    $("#result div").innerHTML = "";
    cars.forEach(car => {
        $("#result div").insertAdjacentHTML("beforeend", makeCarPlayerTemplate(car.name));
    });
    return cars;
}
function renderEachRound(num, cars) {
    return __awaiter(this, void 0, void 0, function* () {
        yield ftSleep(1000);
        cars.map(car => {
            console.log(car.name);
            if (car.runDice()) {
                car.score += 1;
                $(`#player-${car.name}`).insertAdjacentHTML("afterend", makeArrowTemplate());
            }
        });
    });
}
function deleteSpiners() {
    let spinner = $(".spinner-container").parentElement;
    while (spinner) {
        spinner.remove();
        spinner = $(".spinner-container").parentElement;
    }
}
function renderRounds(cars, num) {
    return __awaiter(this, void 0, void 0, function* () {
        let dupNum = num;
        while (dupNum > 0) {
            yield renderEachRound(num, cars);
            dupNum--;
        }
        yield deleteSpiners();
    });
}
export function renderScore() {
    if (!checkNumberValidation($("#repetition input").value)) {
        $("#repetition input").value = "";
        alert("시도 횟수를 올바르게 입력해 주세요.");
    }
    else {
        let cars = renderCarPlayerSections($("#names input").value);
        renderRounds(cars, parseInt($("#repetition input").value));
    }
}
export function renderChampion() { }
function hideElements() {
    $("#repetition").setAttribute("style", "display: none;");
    $("#result").setAttribute("style", "display: none;");
    $("#champion").setAttribute("style", "display: none;");
}
function setIds() {
    const sections = document.querySelectorAll("section");
    const fieldsets = document.querySelectorAll("fieldset");
    sections[1].setAttribute("id", "result");
    sections[2].setAttribute("id", "champion");
    fieldsets[0].setAttribute("id", "names");
    fieldsets[1].setAttribute("id", "repetition");
}
export function initView() {
    setIds();
    hideElements();
}
