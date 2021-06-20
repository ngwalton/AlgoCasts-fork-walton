// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//     return str.split('').reduce((i, j) => j + i);
// }

function reverse(str) {
    return str ? reverse(str.slice(1)) + str[0] : str
}

// function reverse(str) {
//     return str.split("").reverse().join("");
// }

// function reverse(str) {
//     let out = '';
//     debugger;
//     for (const v of str) out = v + out;
//     return out;
// }

module.exports = reverse;
