import $ from "../selector.js";
import { Car } from "../model/car.js";
import { MSG } from "../constants.js"
import { ftSleep } from "../utils.js";
import { deleteSpinners, renderArrow, renderChampion } from "../view/index.js";

async function runEachRound(num: number, cars: Car[]) {
  await ftSleep(1000);
  cars.map(car => {
    if (car.runDice()) {
      car.score += 1;
      renderArrow(car.name);
    }
  });
}

export async function startGame(cars: Car[], num: number): Promise<void> {
  let dupNum = num;

  while (dupNum > 0) {
    await runEachRound(num, cars);
    dupNum--;
  }
  deleteSpinners();
  renderChampion(cars);
  await ftSleep(2000);
  alert(MSG.GAMEOVER_MSG);
}

export function resetGame(): void {
  $("#result div").innerHTML = "";
  $("#names input").value = "";
  $("#names input").element.removeAttribute("readonly");
  $("#repetition input").value = "";
  $("#repetition").hide();
  $("#champion").hide();
}
