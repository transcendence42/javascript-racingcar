export function makeCars(names: string[]): Car[] {
  let cars: Car[] = [];
  names.forEach(name => {
    cars.push(new Car(name));
  });
  return cars;
}

export function getChampions(cars: Car[]): string[] {
  const maxValue = Math.max.apply(
    null,
    cars.map(x => x.score)
  );
  return cars.filter(x => x.score === maxValue).map(x => x.name);
}

export class Car {
  private _name: string;
  private _score: number;

  constructor(name: string) {
    this._name = name;
    this._score = 0;
  }

  runDice() {
    return Math.random() * 9 >= 4 ? true : false;
  }

  get score(): number {
    return this._score;
  }

  get name(): string {
    return this._name;
  }

  set score(num: number) {
    this._score = num;
  }
}
