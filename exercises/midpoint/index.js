// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }


function midpoint(list) {
    let slow = list.getFirst();
    let fast = list.getFirst();
    // fast travels twice as fast as slow so when fast hits the end (or end - 1) then slow is halfway there, thus at the midpoint
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

// array impl, kind of cheating, array has a counter
// function midpoint(list) {
//     let current = list.getFirst();
//     const arr = [];
//     while (current) {
//         arr.push(current);
//         current = current.next;
//     }

//     if (arr.length % 2 == 0) {
//         return arr[(arr.length / 2) -1];
//     } else {
//         return arr[Math.floor(arr.length / 2)];
//     }
// }

module.exports = midpoint;
