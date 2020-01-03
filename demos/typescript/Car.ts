interface IVehicle {
    color : string;
    make : string;
    model : string;
    vroom( number ) : void;
    getSpeed() : number;
};

class Car implements IVehicle {
    private speed : number;

    constructor(public make, public model, public color) {
        this.speed = 0;
    }

    getSpeed() {
        return this.speed;
    }

    vroom() {
    }
}