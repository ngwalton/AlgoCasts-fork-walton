// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//     array_cp = Array.from(array);
//     const result = [];

//     while (array_cp.length) {
//         result.push(array_cp.splice(0, size));
//     }

//     return result;
// }

// function chunk(array = [], size = array.length) {
//     // initialize chunked with and empty array
//     const chunked = [[]];

//     for (const item of array) {
//         if (chunked[chunked.length - 1].length === size) {
//             chunked.push([]);
//         }

//         chunked[chunked.length - 1].push(item);
//     }

//     return chunked;
// }

function chunk(array = [], size = array.length) {
    let start = 0;
    const chunked = [];

    while (start < array.length) {
        chunked.push(array.slice(start, start + size));
        start += size;
    }

    return chunked;
}

module.exports = chunk;
