import $ from "../selector.js";
export function renderRepetitionInput() {
    $("#repetition").show();
}
export function renderScore() { }
export function renderChampion() { }
function hideElements() {
    console.log($("#repetition"));
    $("#repetition").setAttribute("style", "display: none;");
    console.log($("#result"));
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
