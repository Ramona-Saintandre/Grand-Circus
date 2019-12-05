// let store = {
//     inventory: [
//         'a',
//         'b',
//         'c'
//     ],
//     name: 'MY store',
//     addProduct() {

//     },
//     getProductByName() {

//     },
//     removeProduct() {

//     }
// }

// console.log(store.inventory);
// console.log(store.name);


class Store {
    constructor(inventory) {
        // Array of Objects
        this.inventory = [
            new Computer("Lenova", 1200),
            new Computer("Dell", 850),
            new Laptop("HP envy", 900),
            new Laptop("Apple", 1500),
            new HDMI("mini", 25),
            new HDMI("Type-C", 54),
            new Sticker("single", 1),
            new Sticker("pack", 12),
            new MountainDew("Code Red", 1),
            new MountainDew("Diet", 2),
            new Monitor("15in", 79),
            new Monitor("32in", 400),
        ];
        this.inventory = inventory;
    }

    addProduct = product => this.inventory.push(product)

    removeProduct = (productIndex) => {
        this.inventory.splice(productIndex,1);
    }

    // Get an array of all of the computer objects
    getComputers() {
        this.inventory.filter((item) => {
            if (isComputer) {
                return true;
            } else {
                return false;
            }
    removeProductByIndex = productNumber => this.inventory.splice(productNumber, 1);

    removeProductByName = productName => {
        this.getProductByName(productName).forEach((product, index) => {
            this.removeProductByIndex(product.productNumber);
        })
    };

    getProductByName = productName => {
        return this.inventory.filter((product, index) => {
            product.productNumber = index;
            return productName === product.name;
        })
    }

    getProductsByType = type => this.inventory.filter(item => item instanceof type);

    // Get an array of all of the computer objects
    getComputers = _ => this.getProductsByType(Computer);

    // Get an array of all of the laptop objects
    getLaptops = _ => this.getProductsByType(Laptop);
}

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.type = 'product';
    }

    getName() {
        return this.name;
    }

    getPrice() {
        return '$ ' + this.price;
    }

    getType() {
        return this.type;
    }
}

class Computer extends Product {
    constructor(name, price) {
        super(name, price);
        this.type = 'computer';
    }
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
    constructor(name, price) {
        super(name, price);
        this.type = 'beverage';
    }
}

let dell = new Laptop("Dell", 200);

console.log(dell.getPrice());

// console.log(dell instanceof Laptop);
// console.log(dell instanceof Computer);
// console.log(dell instanceof Product);

let store = new Store([
    new Computer('ASUS', 350),
    new Computer('Dell', 250),
    new Laptop('Macbook Pro', 250000),
    new Laptop('Chromebook', 27.12),
    new Sticker('Spiderman', 12),
    new Sticker('Spiderman', 12),
    new Sticker('Spiderman', 12),
    new HDMI('Cheap Chinese Knockoff', 2),
    new HDMI('Official Stuff', 70),
]);


let store2 = new Store([new Computer('ASUS', 250)]);

let computer = {
    name: 'my computer'
}
// add products
console.log(store.inventory);

store.addProduct(new Monitor('AlienWare', 30));
store2.inventory = [];
store.addProduct(dell);
store2.addProduct(dell);

console.log('STORE 1', store.inventory);
console.log(store2.inventory);

// get all laptops
console.log(store.getComputers());

// remove a specific product
store.removeProductByName('AlienWare');
console.log(store.inventory);

console.log(store.getProductByName('Spiderman'));

// get the price of a specific product
console.log(store.getProductByName('Spiderman')[0].getPrice());
console.log(store.getProductByName('Chromebook')[0].getPrice());
