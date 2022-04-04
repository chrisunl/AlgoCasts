// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {

    const numChunks = Math.ceil(array.length / size);
    const result = [];

    for (let index = 0; index < numChunks; index++) {
        const start = index * size;
        const end = start + size;
        const chunk = array.slice(start, end);  
        result.push(chunk); 
    }

    return result;
}

// Original solution
// function chunk(array, size) {
//     const results = []; //array of arrays
    
//     let index = 0;
//     let elem = array[index++];
//     let chunk = [];
//     while (elem) {
//         if (chunk.length === size) {
//             results.push(chunk);
//             chunk = [];
//         }

//         chunk.push(elem);
//         elem = array[index++];
//     }

//     if (chunk.length) {
//         results.push(chunk);
//     }

//     return results;
// }

module.exports = chunk;
