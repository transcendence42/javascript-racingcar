import $ from "../selector.js";
import { Car, makeCars, getChampions } from "../model/car.js";
import {
  makeCarPlayerTemplate,
  makeArrowTemplate,
  makeChampionText
} from "./templates.js";

export function renderCarPlayerSections(inputString: string): Car[] {
  let cars: Car[] = makeCars(inputString.split(",").map(x => x.trim()));
  $("#result").show();
  $("#result div").innerHTML = "";
  cars.forEach(car => {
    $("#result div").insertAdjacentHTML(
      "beforeend",
      makeCarPlayerTemplate(car.name)
    );
  });
  return cars;
}

export function deleteSpinners(): void {
  let spinner: HTMLElement | null = $(".spinner-container").element;
  while (spinner) {
    spinner.parentElement?.remove();
    spinner = $(".spinner-container").element;
  }
}

export function renderArrow(name: string): void {
  $(`#player-${name}`).insertAdjacentHTML("afterend", makeArrowTemplate());
}

export async function renderChampion(cars: Car[]) {
  const championMsg: string = makeChampionText(getChampions(cars));
  $("h2").innerHTML = championMsg;
  $("#champion").show();
}

function hideElements(): void {
  $("#repetition").setAttribute("style", "display: none;");
  $("#result").setAttribute("style", "display: none;");
  $("#champion").setAttribute("style", "display: none;");
}

export function initView(): void {
  hideElements();
}
