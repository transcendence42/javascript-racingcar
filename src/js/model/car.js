class Car {
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
export default class Cars {
    constructor(names) {
        this._cars = [];
        names.forEach(item => {
            this._cars.push(new Car(item));
        });
    }
}
