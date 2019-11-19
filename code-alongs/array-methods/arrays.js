// Use built-in array methods to make the following changes
let myArray = [1,4,2,7,4,345,732423,134,56];

// Shuffle array
myArray = myArray.sort( (a, b) => {
    let randNum = Math.round(Math.random() * 2) - 1;
    return randNum;
});

// Sort the array from smallest to biggest
myArray = myArray.sort( (a, b) => {
    return a - b;
});

console.log(myArray);

// Add the number 12 to the end of the array
myArray.push(12);
console.log(myArray);

myArray = myArray.sort( (a, b) => {
    return a - b;
});

// Remove 732423 from the array
let index = myArray.indexOf(732423);
myArray.splice(index, 1);
console.log(myArray);

// Remove the last item from the array and console it out
console.log(myArray.pop());
console.log(myArray);

// Reverse the array
myArray.reverse();
console.log(myArray);

// Find out if the array includes the number 8
console.log(myArray.includes(8));

// Find the first item in the array that is greater than 18
myArray.reverse();
console.log(myArray.find( item => item > 18 ));

// Console.log an array made up of only the
// numbers that are greater than 18
console.log(myArray.filter( item => item > 18));

// Remove the first item from the array
myArray.shift();
console.log(myArray);

// Add 700 to the beginning of the array
myArray.unshift(700);
console.log(myArray);

// Get the min and max of the numbers in the array
console.log(myArray.reduce( (min, nextValue) => {

    if ( min > nextValue ) {
        return nextValue;
    }

    return min;
}, 999999));


console.log(myArray.reduce( (max, nextValue) => {

    if ( max < nextValue ) {
        return nextValue;
    }

    return max;
}, 0));


// Get the sum of the numbers in the array
console.log(myArray);
let sum = myArray.reduce( (sum, nextValue) => {
    return sum + nextValue;
}, 0);


// Convert all of the numbers in the array to strings
myArray = myArray.map( (item) => {
    return item.toString();
})

console.log(myArray);


