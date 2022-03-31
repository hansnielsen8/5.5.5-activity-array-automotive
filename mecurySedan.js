//this includes the vehicle class as a module
const VehicleModule = require("./vehicle")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

// Import the original vehicle class

import Vehicle from "./vehicle.js";

// Create new Car class that extends vehicle class

class Car extends Vehicle {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maxPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maxSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }

    scheduleService() {
        if (this.mileage > 30000) {            
            this.scheduleService = true
            return this.scheduleService;                       
        }
    }

    start() {
        if (this.fuel > 0) {            
            console.log("Engine has enough fuel to run.");
            return this.started = true
        } else {
            console.log("There is not enough fuel to start engine.");
            return this.started = false;
        }
    }

    loadPassenger(num) {
        if (this.passenger < this.maxPassengers) {
            if ((num + this.passenger) <= this.maxPassengers) {
                this.passenger = num;
                console.log("You have enough space to bring all passengers.")
                return this.passenger;
                   
            } else {
                console.log("This car does not have enough space to take all passengers.");
            }
        }
    }

}

// Test to make sure everything works

let hansCar = new Car(`Audi`, `A3`, `2022`, `black`, 35000)

hansCar.scheduleService()

hansCar.start()

hansCar.loadPassenger(6)

//Consolelog to check

console.log(hansCar)
            
