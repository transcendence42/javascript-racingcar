export function makeCars(names) {
    let cars = [];
    names.forEach((name) => {
        cars.push(new Car(name));
    });
    return cars;
}
export class Car {
    constructor(name) {
        this._name = name;
        this._score = 0;
    }
    runDice() {
        return Math.random() * 9 >= 4 ? true : false;
    }
    get score() {
        return this._score;
    }
    get name() {
        return this._name;
    }
}
