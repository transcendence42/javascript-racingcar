const carNamesSection = (carNames: string): string => {
  return `<section class="d-flex justify-center mt-5">
            <div class="mt-4 d-flex">
              ${carNames}
            </div>
          </section>`;
};

const carNameDiv = (carName: string): string => {
  return `<div class="mr-2">
            <div class="car-player">${carName}</div>
            <div class="d-flex justify-center mt-3">
              <div class="relative spinner-container">
                <span class="material spinner"></span>
              </div>
            </div>
          </div>`;
};

const CarNameComponent = ({ $app, carNames }: { $app: HTMLDivElement | null; carNames: string }): void => {
  const checkCarNames = (carNameList: string[]) =>
    carNameList.length === carNameList.filter((x) => x.length <= 5 && x !== '').length;

  const render = (JSX: string): void => {
    const sectionElement = $app;
    if (sectionElement) {
      sectionElement.insertAdjacentHTML('beforeend', JSX);
    }
    return;
  };

  const init = (carNames: string): void => {
    const carNameList: string[] = carNames.split(',').map((x) => x.trim());
    if (checkCarNames(carNameList)) {
      render(carNamesSection(carNameList.map((carName) => carNameDiv(carName)).join('')));
    } else {
      alert('유효하지 않은 입력입니다. 재입력 해주세요.');
      const carNameInput = document.getElementById('car-name-input') as HTMLInputElement;
      carNameInput.value = '';
      carNameInput.focus();
    }
  };

  init(carNames);
};

export default CarNameComponent;
