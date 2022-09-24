// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

class Stack {
    constructor() {
        this.data = [];
    }

    // considering the head of the array the top of the stack
    // push(elem) {
    //     this.data.unshift(elem);
    // }

    // pop() {
    //     return this.data.length ? this.data.splice(0,1)[0] : null;
    // }

    // peek() {
    //     return this.data[0];
    // }

    // Simpler, consider the end of the array the top of the stack
    push(elem) {
        this.data.push(elem);
    }

    pop() {
        return this.data.pop()
    }

    peek() {
        return this.data[this.data.length - 1];
    }
}

module.exports = Stack;
