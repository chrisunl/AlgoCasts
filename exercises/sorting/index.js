// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

// [-124, -40, 0, 7, 21, 100, 500]

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - i) - 1; j++) {
            if (arr[j] > arr[j+1]) {
                const temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }

    return arr;
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        // assume current index is index of lowest
        let indexOfMin = i;
        for (j = i+1; j < arr.length; j++) {
            if (arr[j] < arr[indexOfMin]) {
                // find index of element, if any, with lower value
                indexOfMin = j;
            }
        }
        if (indexOfMin !== i) {
            // if there was an element with a lower value then copy it into the current lowest value position 
            // (zero position first time, position one 2nd time etc)
            const lesser = arr[indexOfMin];
            arr[indexOfMin] = arr[i];
            arr[i] = lesser;
        }
    }

    return arr;
}

function mergeSort(arr) {
    if (arr.length == 1) {
        return arr;
    } else {
        const centre = Math.floor(arr.length / 2);
        const left = arr.slice(0, centre);
        const right = arr.slice(centre);
        
        return merge(mergeSort(left), mergeSort(right));
    }
}

function merge(left, right) {
    results = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            results.push(left.shift())
        } else {
            results.push(right.shift())
        }
    }  

    // doesn't matter if remainder of left or right are empty, no downside to concating an empty array
    return [...results, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
