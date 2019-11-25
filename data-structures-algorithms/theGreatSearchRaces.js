/**
 * We're going to find out who's the fastest algorithm of them all!
 *
 * Today, it's binarySearch vs good ol' fashioned linear search
 */
const length = 40000000;
let arr = Array.from({length: length}, x => x);
let searchFor = 39000000 //Math.floor(Math.random() * length);
arr = arr.sort( (b,a) => { return b-a } );

/*
Worst-case performance · O(log n) · Best-case performance · O(1) · Average performance · O(log n) ·
*/
const binarySearchRecursive = (inputArray, key, min, max) => {
    if (min > max) {
      return null; // Nothing left to search. It's not in the array.
    } else {
      const mid = Math.floor((min + max) / 2); // Find the middle
      const element = inputArray[mid];

      if (key === element) {
        return mid; // Found it!
      } else if (key < element) {
        // It's in the first half.
        return binarySearchRecursive(inputArray, key, min, mid - 1);
      } else {
        // It's in the second half.
        return binarySearchRecursive(inputArray, key, mid + 1, max);
      }
    }
  };

/*
Worst-case performance · n · Best-case performance · O(1) · Average performance · n ·
*/
const linearSearch = (array, toFind) => {
    for(let i = 0; i < array.length; i++){
      if(array[i] === toFind)
        return i;
    }
    return -1;
};

  console.time('binarySearch')
  var index = binarySearchRecursive(arr, searchFor, 0, arr.length);
  console.timeEnd('binarySearch');

  console.time('linearSearch')
  var index = linearSearch(arr, searchFor);
  console.timeEnd('linearSearch');
  console.log(index);
