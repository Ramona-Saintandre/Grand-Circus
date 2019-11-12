/**
 * Get random integer between two values, inclusive
 *
 * @param Number min
 * @param Number max
 */
const getRandomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

let name = "BJ";

// Check to see if we should run
let yn = prompt("Want to play a game?");

if (yn && yn.toLowerCase() === 'yes') {
    // Get name
    name = prompt("What is your name?");

    const grantInitialHealth = 10;
    let grantDeaths = 0;
    let userHealth = 30;
    let grantHealth = grantInitialHealth;

    // Run Game
    while (grantDeaths < 3 && userHealth > 0) {
        grantHealth -= getRandomNumber(1, 2);
        userHealth -= getRandomNumber(1, 2);

        console.log(`Grant health is ${grantHealth > 0 ? grantHealth : 0}`);
        console.log(`${name} health is ${userHealth > 0 ? userHealth : 0}`);

        if (grantHealth <= 0) {
            console.log("Grant died...too soon.");
            grantHealth = grantInitialHealth;
            grantDeaths++;
        }
    }

    // Note: Yoda conditionals
    if (3 === grantDeaths) {
        if (userHealth <= 0) {
            console.log("It's a tie!!");
        } else {
            console.log(`${name} has won!`)
        }
    } else {
        console.log("Grant has won!");
    }

} else {
    alert('Whatever');
}