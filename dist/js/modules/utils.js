class Car {
    constructor(name) {
        this.name = name;
        this.distance = 0;
    }
    move() {
        this.distance += 1;
    }
}
const getRandomSingleDigit = (min, max) => {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
};
export { Car, getRandomSingleDigit };
