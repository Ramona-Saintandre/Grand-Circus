/**
 * Print a factorial using recursion
 */

function factorial( number ) {
    // Base step: solution solved
    if ( number === 1 ) {
      return 1;
    }

    // Recusive step: call itself while iterating argument
    return number * factorial( number - 1 );
}

console.log(factorial(1));
console.log(factorial(2));

console.log(factorial(5));
console.log(5*4*3*2*1);

console.log(factorial(12));
