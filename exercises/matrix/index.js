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

// for i <= n
// while i < n top row left to right
// while i < n*2 last col top to bottom
// while i < n*3 last row right to left
// while i < n*4 first col bottom to top-1
// while i < n*5 (top row) + 1 left to (right - 1)
// while i < n*6 (top row) + 2 (right - 1) to left + 1

// rowIndex = 0, colIndex = 0
// traverse = col
// direction = forward

// for i <= n
// while i < n top row left to right, 
// while i < n*2 last col top to bottom
// while i < n*3 last row right to left
// while i < n*4 first col bottom to top-1
// while i < n*5 (top row) + 1 left to (right - 1)
// while i < n*6 (top row) + 2 (right - 1) to left + 1



function matrix(n) {
    const outer = new Array(n);

    for (let i = 0; i < n; i++) {
        outer[i] = new Array(n);
    }

    let number = 1;
    let traverseRow = true;
    let forward = true;
    let row = 0;
    let col = 0;
    let iteration = 1;

    while (number <= n*n) {
        outer[row][col] = number;
        console.log("number:", number);
        console.log("limit:", n*iteration);

        console.log("row:", row);
        console.log("col:", col);
        if (number <= n*iteration) {

            if (traverseRow) {
                if (forward) {
                    if (col < n && outer[row][col + 1] === undefined)
                    col++;   
                } else {
                    if (col > 0 &&outer[row][col - 1] === undefined)
                    col--;   
                }
            } else {
                if (forward) {
                    if (row < n && outer[row + 1][col] === undefined)
                    row++;   
                } else {
                    if (row > 0 && outer[row - 1][col] === undefined)
                    row--;   
                }
            }
        } else {
            iteration++
            traverseRow = !traverseRow;
            forward = !forward;
        }

        number++;
    }
    console.log("outer: ", outer);
    return outer;
}

module.exports = matrix;
