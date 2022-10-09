// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {

    constructor() {
        this.head = null;
    }
    
    [Symbol.iterator] = function() {
        return {
            current: this.head,
            next () {
                const temp = this.current;
                this.current = temp?.next;
                return {value:temp, done: temp == null};
            }
        };
    }

    insertFirst(data) {
        if (!this.head) {
            this.head = new Node(data)
        } else {
            const temp = this.head;
            this.head = new Node(data, temp)
        }
    }

    size() {
        let current = this.head;
        let count = 0;
        while (current) {
            count++;
            current = current.next;
        }

        return count;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        let current = this.head;
        while (current.next) {
            current = current.next;
        }

        return current;
    }

    clear() {
        this.head = null
    }

    removeFirst() {
        this.head = this.head.next;
    }

    removeLast() {
        let current = this.head;

        if (this.size() === 1) {
            this.removeFirst() 
        } else {
            while (current?.next?.next) {
                current = current.next;
            }
    
            if (current) {
                current.next = null;
            }
        }
    }

    insertLast(data) {
        const n = new Node(data);
        if (this.size()) {
            this.getLast().next = n;
        } else {
            this.head = n;
        }
    }

    getAt(index) {
        if (!this.size() || index < 0 || index+1 > this.size()) {
            return null;
        } else {
            let current = this.head;
            for (let j = 1; j <= index; j++) {
                current = current.next;
            }

            return current;
        }
    }

    removeAt(index) {
        if (!this.size() || index < 0 || index+1 > this.size()) {
            return
        } else {
            const prev = this.getAt(index - 1);
            if (prev) {
                prev.next = prev.next.next;
            } else {
                this.head = this.head.next;
            }
        }
    }

    insertAt(data, index) {
        if (!this.size() || index < 0 || index+1 > this.size()) {
            this.insertLast(data)
        } else {
            const prev = this.getAt(index - 1);
            if (prev) {
                const n = new Node(data, prev.next);
                prev.next = n;
            } else {
                this.insertFirst(data);
            }
        }
    }

    forEach(func) {
        let current = this.head;
        while (current) {
            func(current)
            current = current.next
        }
    }
}

module.exports = { Node, LinkedList };
