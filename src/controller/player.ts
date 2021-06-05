import { Car } from '../model/car.js';
import { renderProgressSection, renderCarNameDiv, renderSpinnerDiv } from '../view/renderer.js';
import { $, $$ } from './utils.js';

const setProgressSection = (carNameArray: Array<string>) => {
  renderProgressSection();
  carNameArray.forEach((carName) => {
    renderCarNameDiv($('.mt-4.d-flex') as Element, carName);
  });
  $$('.mr-2').forEach((element) => {
    renderSpinnerDiv(element);
  })
};

const playGame = (cars: Array<Car>, carNameArray: Array<string>, tryCount: number) => {
  setProgressSection(carNameArray);
};

export { playGame };
