// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// reduce array to a single result, iterate over elements
function reverse(str) {
    // 2nd param is start value, func->acc is result of previous invocation, 
    // func->char is current char from arr
    return str.split('').reduce((acc, char) => char + acc, '');
}

function reverseV1(str) {
    // trivial
    return str.split('').reverse().join('');
}

// manual
function reverseV2(str) {
    let rev = "";
    //es2015 'for of' loop
    for (let char of str) {
       rev = char + rev;
    }

    return rev;
}

module.exports = reverse;
