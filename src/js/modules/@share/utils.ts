class Car {
  name: string;
  distance: number;

  constructor(name: string) {
    this.name = name;
    this.distance = 0;
  }

  move(): void {
    this.distance += 1;
  }
}

const getRandomSingleDigit = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
};

const wait = async (delay: number): Promise<number> => {
  return new Promise<number>((resolve) => setTimeout(resolve, delay));
};

const disable = (element: HTMLButtonElement | HTMLInputElement) => {
  element.disabled = true;
}
const enable = (element: HTMLButtonElement | HTMLInputElement) => {
  element.disabled = false;
}

const carNameEnable = () => {
  const carNamesInput: HTMLInputElement = document.getElementById('car-name-input') as HTMLInputElement;
  enable(carNamesInput);
  enable(<HTMLButtonElement>carNamesInput.parentElement?.children[1]);
}

const countEnable = () => {
  const raceCountInput: HTMLInputElement = document.querySelector('input[type="number"]') as HTMLInputElement;
  enable(raceCountInput);
  enable(<HTMLButtonElement>raceCountInput.parentElement?.children[1]);
}

const initEnable = () => {
  const carNamesInput: HTMLInputElement = document.getElementById('car-name-input') as HTMLInputElement;
  const raceCountInput: HTMLInputElement = document.querySelector('input[type="number"]') as HTMLInputElement;
  enable(carNamesInput);
  enable(<HTMLButtonElement>carNamesInput.parentElement?.children[1]);
  enable(raceCountInput);
  enable(<HTMLButtonElement>raceCountInput.parentElement?.children[1]);
}

export { Car, getRandomSingleDigit, wait, disable, initEnable, carNameEnable, countEnable };
