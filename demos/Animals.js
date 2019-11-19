class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.lives = 1;
    }

    breathe() {
        console.log('hhhhh');
    }

    die() {
        this.lives--;
    }
}

class Mammal extends Animal {
    constructor(name, age) {
        super(name, age);
        this.isWarmBlooded = true;
        this.hasFur = true;
    }
}

class Cat extends Mammal {
    constructor(name, age) {
        super(name, age);
        this.legs = 4;
        this.fur = "Fluffy";
        this.eyes = 2;
        this.hasTail = true;
        this.lives = 9;
        this.cuteness = 10;
    }

    fall() {
        console.log('Landed on my feet');
    }

    petAnimal() {
        if ( Math.round(Math.random()) === 0 ) {
            console.log("Growl, hiss");
        } else {
            console.log("Purr...");
        }
    }
}

class ThreeLeggedCat extends Cat {
    constructor(name, age) {
        super(name, age);
        this.cuteness = 999;
        this.legs = 3;
    }
}

class NiceCat extends Cat {
    petAnimal() {
        console.log("Purr");
    }
}

class Dog extends Mammal {
    constructor(name, age) {
        super(name, age);
        this.legs = 4;
        this.fur = "Curly";
        this.eyes = 2;
        this.cuteness = 10;
    }

    fall() {
        console.log("Thump");
    }

    petAnimal() {
        console.log("Speaks in dog: 'I will love you forever'");
    }
}

const sadie = new Dog('Sadie', 3);
const mia = new Cat('Mia', 4);

sadie.breathe();
mia.breathe();

sadie.petAnimal();
mia.petAnimal();

sadie.fall();
mia.fall();

const tripod = new ThreeLeggedCat("Tripod", 4);