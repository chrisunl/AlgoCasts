// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindromeV1(str) {
    const rev = str.split('').reverse().join('');
    return str === rev;
}

//less space complexity, no creating another str
function palindromev2(str) {
    let result = true;
    for (let i = 0; i <= str.length / 2; i++) {
        const j = (str.length-1) - i;
        if (str[i] !== str[j]) {
            result = false;
        }
    }

    return result;
}

// compared to v2 will touch every elem twice, pointers will cross
function palindrome(str) {
    const arr = str.split('');
    return arr.every((char, i) => {
        return char === arr[(arr.length -1) - i];
    })
}

module.exports = palindrome;
