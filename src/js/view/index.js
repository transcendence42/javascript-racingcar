import $ from "../selector.js";
import { makeCars } from "../model/car.js";
import { checkNamesValidation, checkNumberValidation } from "../model/validation.js";
import { makeCarPlayerTemplate } from "./templates.js";
export function renderRepetitionInput() {
    if (checkNamesValidation($("#names input").value)) {
        $("#names input").setAttribute('readonly', '');
        $("#repetition").show();
    }
    else {
        $("#names input").value = '';
        alert('이름을 올바르게 입력해 주세요.');
    }
}
function renderCarPlayerSections(inputString) {
    let cars = makeCars(inputString.split(','));
    $("#result").show();
    $("#result div").innerHTML = "";
    cars.forEach(car => {
        $("#result div").insertAdjacentHTML("beforeend", makeCarPlayerTemplate(car.name));
    });
}
function clearInputs() {
}
export function renderScore() {
    const inputString = $("#names input").value;
    if (!checkNumberValidation($("#repetition input").value)) {
        $("#repetition input").value = '';
        alert('시도 횟수를 올바르게 입력해 주세요.');
    }
    else {
        renderCarPlayerSections(inputString);
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
