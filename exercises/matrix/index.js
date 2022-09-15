// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,  2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]


function matrix(n) {
    const results = new Array(n);

    for (let i = 0; i < n; i++) {
        results[i] = [];
    }

    let counter = 1;
    let startColumn = 0
    let endColumn = n - 1;
    let startRow = 0;
    let endRow = n - 1;

    while (startColumn <= endColumn && startRow <= endRow) {
        //Top Row
        for (let i = startColumn; i <= endColumn; i++) {
            results[startRow][i] = counter;
            counter++;
        }
        startRow++;
        //Right Column
        for (let j = startRow; j <= endRow; j++) {
            results[j][endColumn] = counter;
            counter++;
        }
        endColumn--;
        // Bottom Row
        for (let k = endColumn; k >=startColumn; k--) {
            results[endRow][k] = counter;
            counter++;
        }
        endRow--;
        // Start Column
        for (let l = endRow; l >=startRow; l--) {
            results[l][startColumn] = counter;
            counter++;
        }
        startColumn++;
    }
    
    console.log("results: ", results);
    return results;
}

module.exports = matrix;
