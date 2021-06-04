import $ from "../selector.js";
import { Car, makeCars } from "../model/car.js";
import {
  checkNamesValidation,
  checkNumberValidation
} from "../model/validation.js";
import { makeCarPlayerTemplate, makeArrowTemplate } from "./templates.js";
import { sleep } from "../utils.js";

export function renderRepetitionInput() {
  if (checkNamesValidation($("#names input").value)) {
    $("#names input").setAttribute("readonly", "");
    $("#repetition").show();
  } else {
    $("#names input").value = "";
    alert("이름을 올바르게 입력해 주세요.");
  }
}

function renderCarPlayerSections(inputString: string): Car[] {
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

async function renderEachRound(num: number, cars: Car[]) {
  await sleep(1000);
  cars.map(car => {
    console.log(car.name);
    if (car.runDice()) {
      $(`#player-${car.name}`).insertAdjacentHTML(
        "afterend",
        makeArrowTemplate()
      );
    }
  });
}

async function renderRounds(cars: Car[], num: number) {
  let nu = 5;

  while (nu > 0){
    await renderEachRound(num, cars);
    nu--;
    console.log('minus num', nu);
  }
  console.log('finish rounds');
}

export function renderScore() {
  const inputString: string = $("#names input").value;
  if (!checkNumberValidation($("#repetition input").value)) {
    $("#repetition input").value = "";
    alert("시도 횟수를 올바르게 입력해 주세요.");
  } else {
    let cars: Car[] = renderCarPlayerSections(inputString);
    renderRounds(cars, Number(inputString));
  }
}

export function renderChampion() {}

function hideElements() {
  $("#repetition").setAttribute("style", "display: none;");
  $("#result").setAttribute("style", "display: none;");
  $("#champion").setAttribute("style", "display: none;");
}

function setIds() {
  const sections: NodeListOf<HTMLElement> = document.querySelectorAll(
    "section"
  );
  const fieldsets: NodeListOf<HTMLFieldSetElement> = document.querySelectorAll(
    "fieldset"
  );

  sections[1].setAttribute("id", "result");
  sections[2].setAttribute("id", "champion");
  fieldsets[0].setAttribute("id", "names");
  fieldsets[1].setAttribute("id", "repetition");
}

export function initView() {
  setIds();
  hideElements();
}
