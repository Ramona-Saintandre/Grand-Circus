// How can we make this better?
let firstName, lastName;

function helloWorld(firstName, lastName, helloWorldFn) {
    console.log(`Hello, my name is ${firstName} ${lastName}`);
    helloWorldFn(firstName, lastName);
}

let helloWorld = function(firstName, lastName) {
    console.log(`Hello, my name is ${firstName} ${lastName}`);
}

helloWorld1 = function(firstName, lastName) {
    console.log(`Hello, my name is not ${firstName} ${lastName}`);
}

helloWorld1 = (firstName, lastName) => {
    console.log(`What up, my name is ${firstName} ${lastName}`);
}

helloWorld('BJ', 'Clark', helloWorld1);
helloWorld('Bat', 'Man', helloWorld1);
helloWorld('John', 'Rumery', helloWorld1);
helloWorld('John', 'Smith', helloWorld1);