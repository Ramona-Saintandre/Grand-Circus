const itemList = [
    new Items('Tiger', 3000),
    new Items('Laptop', 2000),
    new Items('Phone', 600),
    new Items('Gum', 2.50),
    new Items('Batman Comic', 4.99)
]

class Items {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class ShoppingCart {
    shoppingCart = [];

    addProduct(product) {
        this.shoppingCart = [...this.shoppingCart, product]
    }

    removeItem(name) {

    }
}