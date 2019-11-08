// REVERSING A STRING
// Using loops
const str = "hello, my name is BJ Clark";
let newString = "";

for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
   // console.log(newString)
}
console.log(newString);

// Using recursion
function revStr(str){
    if (str === '') {
        // Base step: what do when we're done
        return '';
    }

    str.substr()
    // Recursive step
    return revStr(str.substr(1)) + str[0];
}

// hello

console.log(revStr(str));

// Recursion with ternary operator
function reverseString(str) {
    return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
}
reverseString("hello");

