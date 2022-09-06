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
//       ' ### ' 5 - 3 = 2
//       '#####'

  //  '---x---' 0 + 1 
  //  '--xxx--' 1 + 2
  //  '-xxxxx-' 2 + 3
  //  'xxxxxxx' 3 + 4

// Width = n + n - 1

function pyramid(n) {
    
    for (let row = 0; row < n; row++) {
        let line = '';
        const numColumns = n + (n - 1);
        const numHashes = row + (row + 1);
        const numSpacesOnLeft = (numColumns - numHashes) / 2;
        let hashes = 0;
        let spaces = 0;
        for (let col = 0; col < numColumns; col++) {
            let symbol = '';
            if (spaces < numSpacesOnLeft) {
                symbol = ' ';
                spaces++;
            } else if (hashes < numHashes) {
                symbol = '#';
                hashes++;
            } else {
                // symetrical so whatever space is left on the right (if any) after all the hashes must be spaces
                symbol = ' ';
                hashes++;
            }

            line += symbol;
        }
        console.log(line);
    }

}

module.exports = pyramid;
