// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n, row = 0, stair = '') {
//     if (row === n) {
//         return;
//     }

//     // case hit end of row
//     if (stair.length === n) {
//         console.log(stair);
//         return steps(n, row + 1);
//     }

//     stair += stair.length <= row ? '#' : ' ';
//     steps(n, row, stair);
// }

// function steps(n) {
//     let stair;
//     for (let row = 0; row < n; row++) {
//         stair = '';

//         for (let col = 0; col < n; col++) {
//             stair += col <= row ? '#' : ' ';
//         }

//         console.log(stair)
//     }
// }

function steps(n) {
    Array(n)
        .fill(1)
        .map((v, k) => v + k)
        .forEach(i => {
            console.log('#'.repeat(i).padEnd(n, ' '));
        });
}

// function steps(n) {
//     for (let i = 1; i <= n; i++) {
//         console.log('#'.repeat(i).padEnd(n, ' '));
//     }
// }

// function steps(n, i = 1) {
//     if (i > n) {
//         return;
//     }

//     console.log('#'.repeat(i).padEnd(n, ' '));
//     steps(n, i + 1);
// }

module.exports = steps;
