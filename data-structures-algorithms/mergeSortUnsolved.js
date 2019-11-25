/**
 * mergeSort() is outlined for you.
 * 
 * Let's try to fill in the implmentation by adding code under each comment
 */

// Split the array into halves and merge them recursively 
function mergeSort(arrayToSort) {
    // BASE STEP: if the array has only one item, we have our result
    if () {
        return arrayToSort;
    }

    // RECURSIVE STEP:
    // Split the array into two, rounding down

    // Get left side of array

    // Get right side of the array

    // Compare each of the arrays and return the merged result
    // Merge the left and the right recursively

}

// compare the arrays item by item and return the concatenated result
function merge(left, right) {
    // console.log('left: ' + left, 'right: ' + right);

    console.log(left, right);
    let result = []
    let indexLeft = 0;
    let indexRight = 0;

    // Compare left and right
    while (indexLeft < left.length && indexRight < right.length) {
        if (left[indexLeft] < right[indexRight]) {
            result.push(left[indexLeft])
            indexLeft++
        } else {
            result.push(right[indexRight])
            indexRight++
        }
    }

  result = result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
  console.log('sorted ->',result);
  return result;
}

mergeSort([4,2,5,7,8,9,1,3,6]);
