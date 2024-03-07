import Car from './10-car.js';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this.range = range;
  }

  // Getter method for the range property
  get range() {
    return this._range;
  }

  // Setter method for the range property
  set range(value) {
    this._range = value;
  }

  // Method to create a clone of the current car instance
  cloneCar() {
    // Get the species constructor to create a new instance
    const Species = super.constructor[Symbol.species];

    // Create and return a new instance of the same species
    return new Species();
  }
}

