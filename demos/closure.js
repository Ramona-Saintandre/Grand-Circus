function Car(name, color) {
    let speed = 0;

    function vroomVroom() {
        speed++;
    }

    function getSpeed() {
        return speed;
    }

    function aaahhh() {
        speed = 0;
    }

    function getType() {
        console.log(`This is a ${color} ${name}`)
    }

    return this;
   // return {getSpeed, vroomVroom, aaahhh, getType};
}

let mustang = new Car('Mustang', 'Red');
console.log(mustang.getSpeed());
mustang.vroomVroom();
console.log(mustang.getSpeed());
console.log(mustang.getType());


let sub = Car('Grey', 'SUV');
console.log(sub.vroomVroom());
console.log(sub.vroomVroom());
console.log(sub.vroomVroom());
console.log(sub.vroomVroom());
console.log(sub.vroomVroom());
sub.vroomVroom();
console.log(sub.getSpeed());
console.log(sub.getType());

console.log('Mustang speed', mustang.getSpeed());

console.log('SUV speed', sub.getSpeed());

