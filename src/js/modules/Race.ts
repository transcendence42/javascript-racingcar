import WinnerComponent from './Winner.js';

import { Car, getRandomSingleDigit, wait, initEnable, countEnable } from './@share/utils.js';
import { racingCountInputInit, carNameInputInit } from './@share/init.js';
import { ERROR_MESSAGE, MESSAGE, DELAY } from './@share/constants.js';
import { checkCarNameDataset } from './@share/dom-dataset.js';
import { removeSpinner } from './@share/spinner.js';
import { forwardIconDiv } from './@share/view.js';

const RaceComponent = ({ $app, count }: { $app: HTMLDivElement | null; count: number }): void => {
  let _cars: Car[];

  const checkValidCount = (count: number): boolean => {
    return count - Math.floor(count) === 0 && count > 0;
  };

  const getInputCarsName = (): string[] => {
    const carNameInput = document.getElementById('car-name-input') as HTMLInputElement;

    return carNameInput.value.split(',').map((x) => x.trim());
  };

  const assignCarsName = (): Car[] => {
    const cars: Car[] = [];
    const inputCarNames = getInputCarsName();
    inputCarNames.forEach((name) => {
      cars.push(new Car(name));
    });

    return cars;
  };

  const render = async ({ count }: { count: number }): Promise<void> => {
    const carPlayer: HTMLCollectionOf<Element> = document.getElementsByClassName(
      'car-player',
    ) as HTMLCollectionOf<Element>;
    let tryCount: number = count;

    while (tryCount > 0) {
      for (let i = 0; i < carPlayer.length; i += 1) {
        if (getRandomSingleDigit(0, 9) >= 4) {
          _cars[i].move();
          carPlayer[i].insertAdjacentHTML('afterend', forwardIconDiv);
        }
        if (tryCount <= 1) {
          removeSpinner(carPlayer[i]);
        }
      }
      tryCount -= 1;
      await wait(DELAY.RACE);
    }
  };

  const init = async (count: number): Promise<void> => {
    if (!checkCarNameDataset()) {
      alert(ERROR_MESSAGE.INVALID_INPUT_PROCEDURE);
      carNameInputInit();
      initEnable();

      return;
    }
    if (!checkValidCount(count)) {
      alert(ERROR_MESSAGE.INVALID_COUNT_INPUT);
      racingCountInputInit();
      countEnable();

      return;
    }
    _cars = assignCarsName();
    await render({ count });
    WinnerComponent({ $app, cars: _cars });
    await wait(DELAY.ALERT);
    alert(MESSAGE.CELEBRATE_WINNER);

    return;
  };

  init(count);
};

export default RaceComponent;
