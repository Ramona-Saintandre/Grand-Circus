# Objects, Classes, Functions

If you want to reuse lines of code with or without variable input, use **functions**.

If you want to
 * store data in a key-value pair (properties)
 * use functions to change the state of properties (methods)

then you should **use objects**.

If you want to re-use objects to have the same base set of methods and properties (think of an agreement of how things work), use **classes**.

A class is a special type of function that creates objects. An object is an *instance* of a class. Each object contains its own data.

Every class has as `constructor()` that is what is run to initialize the data. The constructor is run when you first create an object.

Create an object without a class by using `{ key: value }` syntax. Store data like this:
```
const car = {
    color: "Red",
    make: "Toyota"
    model: "Camry",
    speed: 0,
    accelerate(speed) {
        this.speed += speed;
    }
}
```

Create an object with a class using this syntax:
```
class Car {
    constructor(make, model, color) {
        this.color = color;
        this.make =  make;
        this.model = model;
        this.speed = 0;
    }

    accelerate(speed) {
        this.speed += speed;
    }
}

const car = new Car("Toyota", "Camry", "Red");
```

The `this` variable is a special property that refers to the object itself.

