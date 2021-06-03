import { Car, getRandomSingleDigit } from './utils.js';

const RaceComponent = ({ count }: { count: number }): Car[] => {
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

  const removeSpinner = (carPlayer: Element): void => {
    if (carPlayer.parentNode?.lastElementChild?.className === 'd-flex justify-center mt-3') {
      carPlayer.parentNode?.lastElementChild?.remove();
    }
  };

  const render = ({ cars, count }: { cars: Car[]; count: number }): Car[] => {
    const carPlayer: HTMLCollectionOf<Element> = document.getElementsByClassName(
      'car-player',
    ) as HTMLCollectionOf<Element>;
    let tryCount: number = count;

    while (tryCount > 0) {
      for (let i = 0; i < carPlayer.length; i += 1) {
        if (getRandomSingleDigit(0, 9) >= 4) {
          cars[i].move();
          removeSpinner(carPlayer[i]);
          carPlayer[i].insertAdjacentHTML('afterend', '<div class="forward-icon mt-2">⬇️️</div>');
        }
      }
      tryCount -= 1;
    }
    return cars;
  };

  const init = (count: number): Car[] => {
    if (!checkValidCount(count)) {
      alert(`유효하지 않은 입력입니다. 재입력 해주세요.`);
      const racingCountInput = document.getElementById('racing-count-input') as HTMLInputElement;
      racingCountInput.value = '';
      racingCountInput.focus();
    }
    return render({ cars: assignCarsName(), count });
  };

  return init(count);
};

export default RaceComponent;
