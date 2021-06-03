class Car {
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
}

export default class Cars {
  private _cars: Car[];

  constructor(names: string[]) {
    this._cars = [];
    names.forEach(item => {
      this._cars.push(new Car(item));
    });
  }
}
