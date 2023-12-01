function Vehicle(brand, model, speed, fuelType) {
    this.brand = brand;
    this.model = model;
    this.speed = speed || 0;
    this.fuelType = fuelType;
}

Vehicle.prototype.accelerate = function (amount) {
    this.speed += amount;
    console.log(`${this.brand} ${this.model} is accelerating. Current speed: ${this.speed} km/h`);
};

Vehicle.prototype.brake = function (amount) {
    this.speed -= amount;
    console.log(`${this.brand} ${this.model} is braking. Current speed: ${this.speed} km/h`);
};

Vehicle.prototype.refuel = function () {
    console.log(`${this.brand} ${this.model} is refueling.`);
};

function Car(brand, model, speed, fuelType, Engine, Power,Transmission) {
    Vehicle.call(this, brand, model, speed, fuelType);

    this.Engine = Engine;
    this.Power = Power;
    this.Transmission = Transmission;
}

Car.prototype = Object.create(Vehicle.prototype);

Car.prototype.honk = function () {
    console.log(`${this.brand} ${this.model} is honking.`);
};

function Airplane(brand, model, speed, fuelType, numberOfEngines, hasLandingGear) {
    Vehicle.call(this, brand, model, speed, fuelType);

    this.numberOfEngines = numberOfEngines;
    this.hasLandingGear = hasLandingGear;
}

Airplane.prototype = Object.create(Vehicle.prototype);

Airplane.prototype.takeOff = function () {
    console.log(`${this.brand} ${this.model} is taking off.`);
};

let myCar = new Car("Lamborghini", "Harracan Evo", 0, "Petrol", "5.2-litre V10 petrol engine", "631 bhp @ 8,000 rpm", "7-speed dual-clutch automatic");
let myCar2 = new Car("Ferrari", "812 Super Fast", 0, "Petrol", "6.5-litre V12 petrol engine", "789 bhp @ 8,500 rpm", "7-speed dual-clutch automatic");
let myCar3 = new Car("Lamborghini", "Aventador SVJ Roadster", 0, "Petrol", "6.5-litre V12 petrol engine", "759 bhp @ 8,500 rpm", "7-speed single-clutch automatic");
let myCar4 = new Car("Bentley", "Continental GTC", 0, "Petrol", "6.0-litre W12 petrol engine", "626 bhp @ 6,000 rpm", "8-speed dual-clutch automatic");
let myAirplane = new Airplane("Boeing", "747", 0, "Jet Fuel", 4, true);

myCar.accelerate(325);
myCar.brake(50);
myCar.honk();
myCar.refuel();
console.log(myCar);

myCar2.accelerate(340);
myCar2.brake(50);
myCar2.honk();
myCar2.refuel();
console.log(myCar2);

myCar3.accelerate(350);
myCar3.brake(50);
myCar3.honk();
myCar3.refuel();
console.log(myCar3);

myCar4.accelerate(333);
myCar4.brake(50);
myCar4.honk();
myCar4.refuel();
console.log(myCar4)

myAirplane.accelerate(200);
myAirplane.takeOff();
myAirplane.refuel();
console.log(myAirplane)