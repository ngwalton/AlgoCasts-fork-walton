// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    'use strict'
    const lookup = [];

    for (const char of str) {
        const code = char.codePointAt(0);
        lookup[code] = lookup[code] + 1 || 1;
    }

    // can't use Math.max(...lookup) because of empty values
    // also avoids issue with passing too many args to Math.max
    const nMax = lookup.reduce((max, next) => Math.max(max, next));
    const codeMax = lookup.indexOf(nMax);

    return String.fromCodePoint(codeMax);
}

// function maxChar(str) {
//     'use strict'
//     const lookup = Object.create(null)  // char count; safe way to use object as map
//     let charMax = '';      // char with max freq
//     let nMax = 0;          // freq of charMax

//     for (const char of str) {
//         lookup[char] = lookup[char] + 1 || 1
//     }

//     for (const [key, val] of Object.entries(lookup)) {
//         if (val > nMax) {
//             charMax = key;
//             nMax = val;
//         }
//     }

//     return charMax
// }

module.exports = maxChar;
