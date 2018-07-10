class Car {
  constructor(name) {
    this.name = name;
    this.odometer = 0;
    this.intervalId = undefined;
  }

  drive() {
    const tick = () => {
      console.log("my name is: " + this.name);
      this.odometer++;
    };
    this.intervalId = setInterval(tick, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
  }

  readOdometer() {
    return this.odometer;
  }
}
module.exports = Car;
