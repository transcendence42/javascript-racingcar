export function makeCars(names) {
    const cars = [];
    names.forEach(name => {
        cars.push(new Car(name));
    });
    return cars;
}
export function getChampions(cars) {
    const maxValue = Math.max.apply(null, cars.map(x => x.score));
    return cars.filter(x => x.score === maxValue).map(x => x.name);
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
    set score(num) {
        this._score = num;
    }
    get name() {
        return this._name;
    }
}
