// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(5) === 5
//   fib(4) === 3
//   fib(3) === 2


// recursive solution has exponential time complexity (!) O(2^n) (calls itself twice for each N)
// function fib(n) {
//     if (n <= 2) {
//         return 1; 
//     } else {
//         return fib(n - 1) + fib(n - 2);
//     }
// }

// recursive solution with caching, O(n), fixes exponential time complexity of simple recursive solution
function fib(n, cache = null) {

    if (n <= 2) {
        return 1; 
    }

    if (!cache) {
        cache = new Map();
    }

    if (cache.has(n)) {
        return cache.get(n);
    } else {
        const result = fib(n - 1, cache) + fib(n - 2, cache)
        cache.set(n, result);
        return result;
    }
}

// fib iterative, linear O(n)
// function fib(n) {
//     const fibArr = [0,1];
//     for (let i = 2; i <= n; i++) {
//         if (fibArr.length > 1) {
//             fibArr.push(fibArr[i - 1] + fibArr[i - 2]);
//         }       
//     }

//     return fibArr[n];
// }

module.exports = fib;
