// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    const n = Math.floor(str.length / 2);
    return [...Array(n).keys()].every(i => str[i] === str[str.length - i - 1]);
}

// function palindrome(str) {
//     const n = Math.floor(str.length / 2);
//     for (const i of Array(n).keys()) {
//         if (str[i] !== str[str.length - i - 1]) {
//             return false;
//         }
//     }
//     return true;
// }

// function palindrome(str) {
//     return str.split('').every((char, i) => {
//         const indx = str.length - 1 - i;  // length -1 is the last char
//         return char === str[indx];
//     });
// }

// function palindrome(str) {
//     return str.split('').reverse().join('') === str;
// }

module.exports = palindrome;
