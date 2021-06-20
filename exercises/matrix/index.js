// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    'use strict';
    const results = Array(n).fill().map(e => []);
    let count = 1;
    let startCol = 0, endCol = n - 1;
    let startRow = 0, endRow = n - 1;

    while (startCol <= endCol && startRow <= endRow) {
        // top row
        for (let c = startCol; c <= endCol; c++) {
            results[startRow][c] = count++;
        }
        startRow++;

        // right column
        for (let r = startRow; r <= endRow; r++) {
            results[r][endCol] = count++;
        }
        endCol--;

        // bottom row
        for (let c = endCol; c >= startCol; c--) {
            results[endRow][c] = count++;
        }
        endRow--;

        // left column
        for (let r = endRow; r >= startRow; r--) {
            results[r][startCol] = count++;
        }
        startCol++;
    }

    return results;
}

module.exports = matrix;
