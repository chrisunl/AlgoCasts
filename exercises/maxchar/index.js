// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

//V1
// function maxChar(str) {
//     const charCount = new Map();

//     for (const char of str) {;
//         let count = charCount.has(char) ? charCount.get(char) : 0;
//         charCount.set(char, ++count);
//     }

//     const arr = Array.from(charCount);
//     arr.sort((a, b) => { return a[1] < b[1] ? 1 : -1; });

//     return arr[0][0];
// }

//v2 no array sort needed
function maxChar(str) {
    const charCount = new Map();
    let max = 0;
    let maxChar = '';

    for (const char of str) {
        count = charCount.get(char) || 0;   
        charCount.set(char, ++count);
        if (count > max) {
            max = count;
            maxChar = char;
        }
    }

    return maxChar;
}

module.exports = maxChar;
