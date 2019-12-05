let shoppingCart = [{
    name: 'Pizza',
    price: 5
}];

function addItem(name, price) {
    let newCart = [...shoppingCart, { name, price }]
}