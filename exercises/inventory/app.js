class Store {
    constructor() {
        // Array of Objects
        this.inventory = [
           new Computer ("Lenova",1200),
           new Computer ("Dell",850),
           new Laptop ("HP envy",900),
           new Laptop ("Apple",1500),
           new HDMI ("mini", 25),
           new HDMI ("Type-C",54),
           new Sticker ("single",1),
           new Sticker ("pack",12),
           new MountainDew ("Code Red",1),
           new MountainDew ("Diet",2),
           new Monitor ("15in",79),
           new Monitor ("32in",400), 
        ];
    }

    addProduct = product => {
        this.inventory.push(product);
    }

    removeProduct = (product) => {
this.inventory.splice(product);
    }

    // Get an array of all of the computer objects
    getComputers() {
        this.inventory.filter((item) => {
            if (isComputer) {
                return true;
            } else {
                return false;
            }
        })
    }

    // Get an array of all of the laptop objects
    getLaptops() {

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
// console.log(dell instanceof Laptop);
// console.log(dell instanceof Computer);
// console.log(dell instanceof Product);

let store = new Store();
// add products

// get all laptops

// remove a specific product

// get the price of a specific product