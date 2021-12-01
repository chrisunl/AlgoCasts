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

function reverseIntV2(n) {
    const rev = n.toString().split('').reverse().join('');
    return parseInt(rev) * Math.sign(n);
}

// https://stackoverflow.com/questions/38053729/javascript-how-to-reverse-a-number
function reverseInt(n){
    var digit, result = 0
    // bitwise arithmetic
    while( n ){
        digit = n % 10  //  Get right-most digit. Ex. 123/10 → 12.3 → (Mod is) 3
        result = (result * 10) + digit  //  Ex. 0 → 0 + 3 → 3
        n = n/10|0  //  Remove right-most digit. Ex. 123 → 12.3 → 12
    }  
  
    return result
}


module.exports = reverseInt;
