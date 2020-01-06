class RaceCar {
    constructor() {
        this.speed = 0;
        this.color = 'red';
    }

    changeColor(color) {
        this.color = color;
    }

    vroom(speed = 1) {
        if ( speed > 0)
            this.speed += speed;
    }

    brakes(speed = 1) {
        if ( speed > 0)
            this.speed -= speed;
    }

    stop() {
        this.speed = 0;
    }
}