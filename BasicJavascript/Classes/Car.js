export class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getCarInfo() {
        return `The make: ${this.make} The model: ${this.model} The year: ${this.year}`
    }

    start() {
        this.isRunning = true;
        return "The car has started";
    }

    stop() {
        this.isRunning = false;
        return "The car has stopped";
    }
}