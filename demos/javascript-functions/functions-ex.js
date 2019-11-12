/**
 * Get area of a circle.
 *
 * @todo    Check to make sure that the number is a positive number type.
 * @param   Number radius Radius of circle to measure.
 * @return  Area of the circle
 */
const getAreaOfCircle = (radius) => {
    // if is positive number and number type
    // pi * r squared
   return Math.PI * (radius * radius);
}

/**
 * Get circumference of a circle.
 *
 * @see     https://www.mathplanet.com/education/pre-algebra/more-about-equation-and-inequalities/calculating-the-circumference-of-a-circle
 * @todo    Check to make sure that the number is a positive number type.
 * @param   Number radius Radius of circle to measure.
 * @return  Area of the circle
 */
const getCircumferenceOfCircle = function(radius) {
    // if is positive number and number type

    // 2pi * r
    return 2 * Math.PI * radius;
}

function getAreaOfSquare(side) {
    // if is positive number and number type

    // l*l
    return side * side;
}

function getAreaOfTriangle(base, height, callback) {
    // if is positive number and number type
    // (b * h) / 2
    let result = (base * height) / 2;

    callback(result);
    return result;
}

function callLog(result) {
    console.log(result * 2);
}

let circleArea = getAreaOfCircle(-1); // PI
console.log(circleArea);
console.log(getCircumferenceOfCircle(0)); // 2 PI
console.log(getAreaOfSquare('5')); // 4
console.log(getAreaOfTriangle(true,700, callLog)); // 1

console.log(getAreaOfTriangle);
