export default class Car {
  name: string;
  position: number;

  constructor(name: string) {
    this.name = name;
    this.position = 0;
  }

  moveForward(): void {
    this.position += 1;
  }
}
