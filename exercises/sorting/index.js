// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

// O(n^2)
// iteratively push the max value to arr.length - i
function bubbleSort(arr) {
    arr = arr.map(el => el);

    // "i < arr.length - 1" because there would be a single iteration at the end
    // in the outer loop that did nothing in the inner loop without the "-1"
    for (let i = 0; i < arr.length - 1; i++) {

        // large values "bubble" to the end of the array, so check one less
        // value on each iteration of outer loop; "j < arr.length - i - 1" is
        // the only place we use i
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
            }
        }
    }

    return arr;
}

// O(n^2)
// iteratively find the min value in i through arr.length and swap it with i
function selectionSort(arr) {
    arr = arr.map(el => el);

    for (let i = 0; i < arr.length; i++) {
        // "assume i is the min value and then try to prove this wrong"
        let indexOfMin = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[indexOfMin]) {
                indexOfMin = j;
            }
        }

        // if arr[i] is not the min, switch it with the min value
        if (i !== indexOfMin) {
            [arr[i], arr[indexOfMin]] = [arr[indexOfMin], arr[i]];
        }
    }

    return arr;
}

// O(n log n)
// divide and conquer
function mergeSort(arr) {
    if (arr.length === 1) {
        return arr;
    }

    const center = Math.floor(arr.length / 2);
    const left = arr.slice(0, center);
    const right = arr.slice(center);

    return merge(mergeSort(left), mergeSort(right));
}

// merge two sorted arrays
function merge(left, right) {
    const result = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    return [...result, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
