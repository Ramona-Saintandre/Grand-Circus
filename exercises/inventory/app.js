class Store {
    constructor() {
        // Array of Objects
        this.inventory = [

        ];
    }

    addProduct = product => {
        this.inventory.push(product);
    }

    removeProduct = (product) => {

    }
}

class Product {
    constructor() {
        this.name = "Generic Product";
        this.price = 1;
        this.type = 'product';
    }

    getName() {
        return this.name;
    }

    getPrice() {
        return this.price;
    }

    getType() {
        return this.type;
    }
}

class Computer extends Product {

}

class Laptop extends Computer {

}

class Sticker extends Product {

}

class HDMI extends Product {

}

class Monitor extends Product {

}

class MountainDew extends Product {

}

let dell = new Laptop();
console.log(dell instanceof Laptop);
console.log(dell instanceof Computer);
console.log(dell instanceof Product);