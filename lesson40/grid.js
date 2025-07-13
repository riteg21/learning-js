"use strict";

class Bus {
  #doors;

  constructor(capacity, model) {
    this.capacity = capacity;
    this.model = model;
    this.type = null;
    this.#doors = null;
  }

  get _doors() {
    return this.#doors; // при обращении к _doors будет вызываться этот геттер
  }

  set _doors(doors) {
    // занесение значения в #doors
    this.#doors = doors;
    this._updateType();
  }
  _updateType() {
    switch (this.#doors) {
      case 1:
        this.type = "intercity";
        break;
      case 2:
        this.type = "suburban";
        break;
      case 3:
        this.type = "city";
        break;
    }
  }
}

const bus1 = new Bus(25, "Toyota");
bus1._doors = 1;
console.log("Bus1:", bus1); // type = "intercity"

class AirportBus extends Bus {
  constructor(capacity, model, doors, typeOfBus) {
    super(capacity, model);
    this._doors = doors;
    this.type = typeOfBus;
  }
}
const airPortBus = new AirportBus(13, "BMW", 2, "airport");
console.log(airPortBus);
