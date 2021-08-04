// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


function anagrams(stringA, stringB) {
    'use strict';
    function clean(str) {
        return str
            .replace(/\W/g, '')
            .toLowerCase()
            .split('')
            .sort()
            .join('');
    }

    return clean(stringA) === clean(stringB);
}


// function anagrams(stringA, stringB) {
//     'use strict';
//     const lookup = [];

//     for (const el of stringA) {
//         if (/\W/.test(el)) {
//             continue;
//         }

//         let code = el.toLowerCase().charCodeAt(0);
//         lookup[code] = lookup[code] + 1 || 1
//     }

//     for (const el of stringB) {
//         if (/\W/.test(el)) {
//             continue;
//         }

//         let code = el.toLowerCase().charCodeAt(0);

//         if (!lookup[code]) {
//             return false;
//         }

//         lookup[code]--
//     }

//     if (lookup.reduce((total, el) => total + el)) {
//         return false;
//     }

//     return true
// }


// function anagrams(stringA, stringB) {
//     'use strict';
//     function mkMapObj(string) {
//         string = string.replace(/\W/g, '').toLowerCase();
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

//     if (keysA.some(k => mapA[k] !== mapB[k])) {
//         return false;
//     }

//     return true;
// }

module.exports = anagrams;
