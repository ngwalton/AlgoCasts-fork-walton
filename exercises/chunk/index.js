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

// function chunk(array, size) {
//     const out = [];

//     for (const i of array) {
//         const last = out[out.length - 1]

//         // if last is undefined (first iteration) or last is already full,
//         // add a new array with the current element in it
//         if (!last || last.length === size) {
//             out.push([i]);
//         } else {  // else just add the current element to the last chunk
//             last.push(i)
//         }
//     }

//     return out;
// }

function chunk(array, size) {
    let start = 0;
    let end = size;
    const out = [];

    while (start < array.length) {
        out.push(array.slice(start, end));
        start += size;
        end += size;
    }

    return out;
}

module.exports = chunk;
