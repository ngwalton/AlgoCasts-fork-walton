// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    'use strict'
    const cnt = Object.create(null)  // char count; safe way to use object as map
    let maxC = '';      // char with max freq
    let maxN = 0;       // freq of maxC

    for (const char of str) {
        cnt[char] = cnt[char] + 1 || 1
    }

    for (const [k, v] of Object.entries(cnt)) {
        if (v > maxN) {
            maxC = k;
            maxN = v;
        }
    }

    return maxC
}

module.exports = maxChar;
