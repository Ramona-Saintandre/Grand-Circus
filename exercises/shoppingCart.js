

class Items {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class ShoppingCart {
    shoppingCart = [];

    constructor(cart) {
        this.shoppingCart = cart;
    }

    addProduct(product) {
        this.shoppingCart = [...this.shoppingCart, product]
    }

    removeItem(name) {
        this.shoppingCart.splice(this.shoppingCart.findIndex( product => {
            return name === product.name;
        }), 1);
    }

    editItem(product) {
        this.shoppingCart[this.shoppingCart.findIndex( product => {
            return name === product.name;
        }) ] = product;
    }
}

const itemList = [
    new Items('Tiger', 3000),
    new Items('Laptop', 2000),
    new Items('Phone', 600),
    new Items('Gum', 2.50),
    new Items('Batman Comic', 4.99)
]

let cart = new ShoppingCart(itemList);
console.log(cart.shoppingCart);
cart.removeItem('Tiger');
console.log(cart.shoppingCart);
