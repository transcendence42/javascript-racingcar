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

export { Car, getRandomSingleDigit };
