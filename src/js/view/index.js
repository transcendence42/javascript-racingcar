import $ from "../selector.js";
import { makeCars } from "../model/car.js";
export function renderRepetitionInput() {
    $("#repetition").show();
}
export function renderScore() {
    //여기서부터!
    const input = document.querySelector("#names input");
    let cars = makeCars(input.value.split(','));
    $("#result").show();
    $("#result div").innerHTML = "";
    cars.forEach(car => {
        $("#result div").insertAdjacentHTML("beforeend", `<div class="mr-2">
        <div class="car-player">${car.name}</div>
        <div class="d-flex justify-center mt-3">
          <div class="relative spinner-container">
            <span class="material spinner"></span>
          </div>
        </div>
      </div>`);
    });
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
