// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseIntV1(n) {

    const arr = n.toString().split('');
    let isMinus = arr.includes('-');

    if (isMinus) {
        arr.splice(arr.indexOf('-'), 1);
    }

    const str = arr.join('');
    let rev = str.split('').reverse().join('');

    if (isMinus) {
        rev = '-' + rev;
    }

    return parseInt(rev);
}

function reverseInt(n) {
    const rev = n.toString().split('').reverse().join('');
    return parseInt(rev) * Math.sign(n);
}


module.exports = reverseInt;
