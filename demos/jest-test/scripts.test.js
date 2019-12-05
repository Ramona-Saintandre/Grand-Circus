describe("RaceCar", () => {
    it("Speed should start at 0", () => {
        const car = new RaceCar();

        expect(car.speed).toEqual(0);
    })

    it("Should be able to accelerate", () => {
        const car = new RaceCar();
        car.vroom();

        expect(car.speed).toEqual(1);
    })

    it("Should be able to increase by a named value", () => {
        const car = new RaceCar();
        car.vroom(5);

        expect(car.speed).toEqual(5);
    })

    it("Should be able to increase multiple times", () => {
        const car = new RaceCar();
        car.vroom();
        car.vroom(5);

        expect(car.speed).toEqual(6);
    })

    it("Vroom should only accelerate", () => {
        const car = new RaceCar();
        car.vroom();
        car.vroom(-1);

        expect(car.speed).toEqual(1);
    })

    it("brakes() should reduce speed", () => {
        const car = new RaceCar();
        car.vroom(6);
        car.brakes(1);

        expect(car.speed).toEqual(5);
    })

    it("stop() should set speed to 0", () => {
        const car = new RaceCar();
        car.vroom(10);
        car.stop();

        expect(car.speed).toEqual(0);
    })

    it("Color should default to red", () => {
        const car = new RaceCar();

        expect(car.color).toEqual('red');
    })

    it("Should be able to change color", () => {
        const car = new RaceCar();

        car.changeColor('blue');

        expect(car.color).toEqual('blue');
    })
})