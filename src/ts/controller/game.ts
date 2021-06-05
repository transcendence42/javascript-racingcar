import $ from "../selector.js";
import { Car } from "../model/car.js"
import { ftSleep } from "../utils.js";
import { makeArrowTemplate } from "../view/templates.js"
import { deleteSpinners, renderArrow, renderChampion } from "../view/index.js"

async function runEachRound(num: number, cars: Car[]) {
    await ftSleep(1000);
    cars.map(car => {
      if (car.runDice()) {
        car.score += 1;
        renderArrow(car.name);
      }
    });
  }

export async function startGame(cars: Car[], num: number) {
    let dupNum =  num;
  
    while (dupNum > 0){
      await runEachRound(num, cars);
      dupNum--;
    }
    deleteSpinners();
    renderChampion(cars);
    await ftSleep(2000);
    alert('경기가 종료되었습니다. 우승을 축하합니다! 🎉');
  }