import { Car, getRandomSingleDigit, wait } from './@share/utils.js';
import WinnerComponent from './Winner.js';
import { ERROR_MESSAGE, MESSAGE, DELAY } from './@share/constants.js';
import { racingCountInputInit } from './@share/init.js';
import { removeSpinner } from './@share/spinner.js';

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
          carPlayer[i].insertAdjacentHTML('afterend', '<div class="forward-icon mt-2">⬇️️</div>');
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
    if (!checkValidCount(count)) {
      alert(ERROR_MESSAGE.INVALID_COUNT_INPUT);
      racingCountInputInit();
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
