// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
    const fizz = "fizz";
    const buzz = "buzz";

    for (let i = 1; i <= n; i++) {
        let isMult3 = i % 3 === 0;
        let isMult5 = i % 5 === 0;

        // this is multiples of 15
        if (isMult3 && isMult5) {
            console.log(fizz + buzz);
        } else if (isMult3) {
            console.log(fizz);
        } else if (isMult5) {
            console.log(buzz);
        } else {
            console.log(i);
        }
    }
}

module.exports = fizzBuzz;
