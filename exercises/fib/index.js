// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function memoise(fn) {
    const cache = Object.create(null);

    return function (...args) {
        if (!cache[args]) {
            cache[args] = fn(...args);
        }

        return cache[args];
    }
}

function fib(n) {
    if (n < 1) {
        return 0;
    } else if (n === 1) {
        return 1
    }

    return fib(n - 1) + fib(n - 2);
}

fib = memoise(fib);

// function fib(n, result = [0, 1]) {
//     if (result.length > n) {
//         return result[result.length - 1];
//     }

//     let a = result[result.length - 2];
//     let b = result[result.length - 1];
//     result.push(a + b);
//     return fib(n, result);
// }

// function fib(n) {
//     const fibArray = [0, 1];

//     for (let i = 2; i <= n; i++) {
//         fibArray.push(fibArray[i - 2] + fibArray[i - 1]);
//     }

//     return fibArray[n];
// }

// function fib(n) {
//     const fibArray = [0, 1];

//     while (fibArray.length <= n) {
//         let next = fibArray[fibArray.length - 2] + fibArray[fibArray.length - 1];
//         fibArray.push(next)
//     }

//     return fibArray.slice(-1)[0];
// }

// function fib(n) {
//     let i = 1;
//     let last = 0;
//     let current = 1;

//     while (i < n) {
//         current = last + current;
//         last = current - last;
//         i++;
//     }

//     return current;
// }

module.exports = fib;
