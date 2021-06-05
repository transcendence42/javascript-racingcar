var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ftSleep } from "../utils.js";
import { deleteSpinners, renderArrow, renderChampion } from "../view/index.js";
function runEachRound(num, cars) {
    return __awaiter(this, void 0, void 0, function* () {
        yield ftSleep(1000);
        cars.map(car => {
            if (car.runDice()) {
                car.score += 1;
                renderArrow(car.name);
            }
        });
    });
}
export function startGame(cars, num) {
    return __awaiter(this, void 0, void 0, function* () {
        let dupNum = num;
        while (dupNum > 0) {
            yield runEachRound(num, cars);
            dupNum--;
        }
        deleteSpinners();
        renderChampion(cars);
        yield ftSleep(2000);
        alert('경기가 종료되었습니다. 우승을 축하합니다! 🎉');
    });
}
