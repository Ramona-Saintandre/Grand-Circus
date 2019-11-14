function Car(name, color) {
    let speed = 0;

    const vroomVroom = function() {
        speed++;
    }

    const getSpeed = function () {
        return speed;
    }

    const aaahhh = function () {
        speed = 0;
    }

    const getType = function() {
        console.log(`This is a ${color} ${name}`)
    }

    return {getSpeed, vroomVroom, aaahhh, getType};
}

let mustang = Car('Mustang', 'Red');
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

