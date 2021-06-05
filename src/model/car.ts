class Car {
  name: string;
  position: number;
  index: number;

  constructor(name: string, index: number) {
    this.name = name;
    this.position = 0;
    this.index = index;
  }

  moveForward(): void {
    this.position += 1;
  }
}

export { Car };