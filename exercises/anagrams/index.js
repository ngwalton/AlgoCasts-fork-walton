// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

'use strict';

function clean(str) {
    return str
        .toLowerCase()
        .split('')
        .filter(char => /[a-z]/.test(char))
        .sort()
        .join('');
}

function anagrams(stringA, stringB) {
    return clean(stringA) === clean(stringB);
}


// function anagrams(stringA, stringB) {
//     const lookup = [];
//     const re = /[^a-z0-9]/i;

//     for (const char of stringA) {
//         if (re.test(char)) {
//             continue;
//         }

//         const code = char.toLowerCase().codePointAt(0);
//         lookup[code] = lookup[code] + 1 || 1;
//     }

//     for (const char of stringB) {
//         if (re.test(char)) {
//             continue;
//         }

//         const code = char.toLowerCase().codePointAt(0);

//         if (!lookup[code]) {
//             return false;
//         }

//         lookup[code]--;
//     }

//     return lookup.reduce((sum, next) => sum + next) === 0;
// }


// function anagrams(stringA, stringB) {
//     function mkMapObj(string) {
//         string = string.replace(/[^a-z0-9]/gi, '').toLowerCase();
//         const map = Object.create(null);

//         for (const char of string) {
//             map[char] = map[char] + 1 || 1;
//         }

//         return map;
//     }

//     const mapA = mkMapObj(stringA);
//     const mapB = mkMapObj(stringB);

//     const keysA = Object.keys(mapA).sort();
//     const keysB = Object.keys(mapB).sort();

//     if (keysA.join('') !== keysB.join('')) {
//         return false;
//     }

//     return keysA.every(k => mapA[k] === mapB[k]);
// }

module.exports = anagrams;
