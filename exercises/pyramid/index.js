// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

  //  '---x---' 0 + 1 
  //  '--xxx--' 1 + 2
  //  '-xxxxx-' 2 + 3
  //  'xxxxxxx' 3 + 4

// Width = n + n - 1

// function pyramid(n) {
//     for (let row = 0; row < n; row++) {
//         let line = '';
//         const numColumns = n + (n - 1);
//         const numHashes = row + (row + 1);
//         const numSpacesOnLeft = (numColumns - numHashes) / 2;
//         let hashes = 0;
//         let spaces = 0;
//         for (let col = 0; col < numColumns; col++) {
//             let symbol = '';
//             if (spaces < numSpacesOnLeft) {
//                 symbol = ' ';
//                 spaces++;
//             } else if (hashes < numHashes) {
//                 symbol = '#';
//                 hashes++;
//             } else {
//                 // symetrical so whatever space remains on the right (if any) after all the hashes must be spaces
//                 symbol = ' ';
//             }

//             line += symbol;
//         }
//         console.log(line);
//     }
// }

// function pyramid(n, lineNum = 0, line = '', hashes = 0, spaces = 0) {

//     const numColumns = n + (n - 1);
//     const numHashes = lineNum + (lineNum + 1);
//     const numSpacesOnLeft = (numColumns - numHashes) / 2;

//     if (lineNum === n) {
//         return;
//     }

//     if (line.length === numColumns) {
//         console.log(line);
//         return pyramid(n, ++lineNum, '', 0, 0);
//     }

//     if (spaces < numSpacesOnLeft) {
//         symbol = ' ';
//         spaces++;
//     } else if (hashes < numHashes) {
//         symbol = '#';
//         hashes++;
//     } else {
//         // symetrical so whatever space remains on the right (if any) after all the hashes must be spaces
//         symbol = ' ';
//     }

//     return pyramid(n, lineNum, line += symbol, hashes, spaces);
// }

// udemy iteration solution
// function pyramid(n) {
//     const numCols = (2 * n) - 1; // or n + n - 1
//     const midPoint = Math.floor(numCols / 2);

//     for (let row = 0; row < n; row++) {
//         let line = '';
//         for (let col = 0; col < numCols; col++) {
//             // i.e ' ### ' (2nd row of n = 3 ). is col within range of midpoint (mid - 1 <= col && mid + 1 >=col)
//             if (midPoint - row <= col && midPoint + row >=col) {
//                 line += '#';
//             } else {
//                 line += ' ';
//             }
//         }
//         console.log(line);
//     }
// }

// udemy recursive solution
function pyramid(n, line = '', rowNum = 0) {
    const numCols = (2 * n) - 1; // or n + n - 1
    const midPoint = Math.floor(numCols / 2);

    if (rowNum === n) {
        return;
    }

    if (line.length === numCols) {
        console.log(line);
        return pyramid(n, '', ++rowNum);
    }

    const col = line.length;
    line += (col >= midPoint - rowNum && col <= midPoint + rowNum) ? '#' : ' ';
    return pyramid(n, line, rowNum);
}

module.exports = pyramid;
