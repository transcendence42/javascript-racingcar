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
          </div>`;
};

const CarNameComponent = ({ carNames }: { carNames: string }): void => {
  const checkCarNames = (carNameList: string[]) =>
    carNameList.length === carNameList.filter(x => x.length <= 5).length;

  const render = (JSX: string): void => {
    const sectionElement = document.getElementById('app');
    if (sectionElement) {
      sectionElement.insertAdjacentHTML('beforeend', JSX);
      // sectionElement.innerHTML += JSX;
    }
    return ;
  };

  const init = (carNames: string): void => {
    const carNameList: string[] = carNames.split(',').map(x=>x.trim());
    if (checkCarNames(carNameList)) {
      render(carNamesSection(carNameList.map(carName => carNameDiv(carName)).join('')));
    }
  };

  init(carNames);
};

export default CarNameComponent;

// <div class="forward-icon mt-2">⬇️️</div>
// <div class="relative spinner-container">
// <span class="material spinner"></span>
// </div>
