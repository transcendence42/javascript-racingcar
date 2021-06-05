class Car {
    constructor(name, index) {
        this.name = name;
        this.position = 0;
        this.index = index;
    }
    moveForward() {
        this.position += 1;
    }
}
export { Car };
