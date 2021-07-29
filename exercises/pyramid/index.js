// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, level = "") {
    const width = n * 2 - 1;
    const midpoint = Math.floor(width / 2);

    if (row === n) {
        return;
    }

    if (level.length === width) {
        console.log(level);
        return pyramid(n, row + 1);
    }

    let right = midpoint + row;
    let left = midpoint - row;
    let isHash = level.length >= left && level.length <= right;
    level += isHash ? "#" : " ";

    return pyramid(n, row, level);
}

// function pyramid(n) {
//     "use strict";

//     const width = n * 2 - 1;
//     const midpoint = Math.floor(width / 2);

//     for (let row = 0; row < n; row++) {
//         let level = "";

//         for (let col = 0; col < width; col++) {
//             // if col is greater than the left most hash column and less than
//             // the right most hash column, add a hash mark, else add a space
//             let right = midpoint + row;
//             let left = midpoint - row;
//             let isHash = col >= left && col <= right;
//             level += isHash ? "#" : " "
//         }

//         console.log(level);
//     }
// }

module.exports = pyramid;
