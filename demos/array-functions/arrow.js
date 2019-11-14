// Declaration
function myFunction() {

}

// Expression
const myFunction = function(arg1, arg2) {
    return `Arg 1: ${arg1}, Arg 2: ${arg2}`;
}

let name = "BJ";

// Mildly overweight Arrow Function
const myFunction2 = _ => {
    name = "Shut your mouth";

    return  `Arg 1: no args`;
}
console.log(name);


console.log(myFunction('not', 'fat arrow'));
console.log(myFunction2('is', 'fat arrow'));

