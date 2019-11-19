class Vehicle {
    constructor(make, model, color) {
        this.color = color;
        this.make =  make;
        this.model = model;
        this.speed = 0;
        this.tires = 4;
    }

    accelerate(speed) {
        this.speed += speed;
    }

    getFuel() {
        console.log('At the gas station...');
    }
}

class SemiTruck extends Vehicle {
    constructor(make, model, color) {
        super(make,model,color);
        this.tires = 16;
    }
}

class TeslaSemiTruck extends SemiTruck {
    constructor(model, color) {
        super('Tesla',model,color);
        this.emissions = 0;
    }

    getFuel() {
        console.log('Plugging in...');
    }
}

class SUV extends Vehicle {
    constructor(make, model, color) {
        super(make,model,color);

        this.boxy = true;
    }

    plowRoads() {
        console.log("Everyone is happy");
    }
}

let car = new Vehicle("Toyota", "Camry", "Red");
let suv = new TeslaSemiTruck("Traverse", "Grey");

console.log(car.tires, suv.tires);
suv.accelerate(2);
console.log(suv.speed);
console.log(car.boxy, suv.boxy);

console.log(suv.getFuel());