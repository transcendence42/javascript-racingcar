import { carNamesSection, carNameDiv } from './@share/view.js';
import { setCarNameDataset } from './@share/dom-dataset.js';
import { ERROR_MESSAGE } from './@share/constants.js';
import { carNameInputInit } from './@share/init.js';
import { initEnable } from './@share/utils.js';

const CarNameComponent = ({ $app, carNames }: { $app: HTMLDivElement | null; carNames: string }): void => {
  const checkCarNames = (carNameList: string[]) =>
    carNameList.length === carNameList.filter((x) => x.length <= 5 && x !== '').length;

  const render = (JSX: string): void => {
    const sectionElement: HTMLDivElement | null = $app;
    if (sectionElement) {
      sectionElement.insertAdjacentHTML('beforeend', JSX);
    }

    return;
  };

  const init = (carNames: string): void => {
    const carNameList: string[] = carNames.split(',').map((x) => x.trim());
    if (checkCarNames(carNameList)) {
      setCarNameDataset('click');
      render(carNamesSection(carNameList.map((carName) => carNameDiv(carName)).join('')));
    } else {
      alert(ERROR_MESSAGE.INVALID_CAR_NAME_INPUT);
      carNameInputInit();
      initEnable();
    }
  };

  init(carNames);
};

export default CarNameComponent;
