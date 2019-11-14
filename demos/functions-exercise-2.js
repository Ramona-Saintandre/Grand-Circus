"use strict";
{
    let forward = true; // true/false
    let position = 0;

    const moveBackward = (distance) => {
        if ( !forward ) {
            position += distance;
        } else {
            position -= distance;
        }
    }

    const moveForward = (distance) => {
        if ( forward ) {
            position += distance;
        } else {
            position -= distance;
        }
    }

    const turnAround = () => {
        forward = !forward;
    }

    const printLocation = _ => {
        console.log(position);
    }

    printLocation();
    moveForward(6); // 6
    moveBackward(1); // 5
    turnAround();
    moveForward(2); // 3
    printLocation(); // 3
}

console.log(position); //undefined