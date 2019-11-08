// const isEven = number => (number % 2 === 0);

// isEven(4);

function success() {
    console.log("The number is even.");
    return 4;
}

  function isEven(num) {
    if (num % 2 === 0) {
      return success;
    } else {
      return function() {
        console.log("The number is not even.");
      }
    }
  }

  let result = isEven(4); // value of result is now the success function
  //let result = isEven(4); // value of result is now the success function

  success();
  result(); // result is now a function and can be executed to see "The number is even."