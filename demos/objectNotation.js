class Car {
    constructor(speed = 0) {
        this.speed = speed;
        this.isMetric;
        this.door = new CarDoor();
    }

    vroomVroom(){ // method
        this.speed++;

        if ( this.door.open )
            this.door.slamOnFinger();
    }

    getSpeed(){
        return this.speed;
    }
};

class CarDoor {
    constructor() {
        this.open = true;
    }

    openDoor() {
        this.open = true;
    }

    slamOnFinger() {
        this.open = false;
        console.log('Ouch');
    }
}


let car = new Car();

console.log(car.speed);
console.log(car.door.open);

car.vroomVroom();
car.vroomVroom();
car.vroomVroom();
car.vroomVroom();
car.vroomVroom();
console.log(car.getSpeed());
console.log(car.door.open);


let car2 = new Car(2);
console.log(car2.getSpeed());
car2.vroomVroom();
car2.speed++;
