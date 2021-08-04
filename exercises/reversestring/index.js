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
//     for (const v of str) out = v + out;
//     return out;
// }


// function reverse(str) {
//     const tmp = [];
//     const midPoint = Math.floor(str.length / 2);
//     const iter = Array(midPoint).fill().map((_, i) => i);

//     for (let i of iter) {
//         [tmp[i], tmp[str.length - 1 - i]] = [str[str.length - 1 - i], str[i]];
//     }

//     if (str.length % 2) {
//         tmp[midPoint] = str[midPoint]
//     }

//     return tmp.join('');
// }

module.exports = reverse;
