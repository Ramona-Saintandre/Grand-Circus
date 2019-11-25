// Split the array into halves and merge them recursively
function mergeSort(arrayToSort) {
    // BASE STEP: if the array has only one item, we have our result
    if (arrayToSort.length === 1) {
        return arrayToSort
    }

    // RECURSIVE STEP:
    // Split the array into two, rounding down
    const indexOfMiddle = Math.floor(arrayToSort.length / 2) // get the middle item of the array rounded down

    // Get left side of array
    const left = arrayToSort.slice(0, indexOfMiddle) // items on the left side

    // Get right side of the array
    const right = arrayToSort.slice(indexOfMiddle) // items on the right side

    // Compare each of the arrays and return the merged result
    // Merge the left and the right recursively
    return merge(
        mergeSort(left),
        mergeSort(right)
    )
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
