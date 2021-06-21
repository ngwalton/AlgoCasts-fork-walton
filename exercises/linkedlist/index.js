// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

// Ask if we'll be writing any addional methods if asked to write, e.g.,
// .getFirst to avoid refactoring/unneeded code. Just write .getAt, .insertAt,
// .deleteAt, and size, and then write the other methods as special cases of each.
// Write .getAt first as it is used in .insertAt and .deleteAt. Follow by
// .insertAt as you can't delete anything without having something entered.

// Interviewers may not ask about .forEach and for..of but bring up especially
// for..of to use generator/iterator for extra points.

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

    getAt(index) {
        let count = 0;
        let node = this.head;

        while (node) {
            if (count === index) {
                return node;
            }

            node = node.next;
            count++;
        }

        return null;
    }

    size() {
        let node = this.head;
        let count = 0;

        while (node) {
            count++;
            node = node.next;
        }

        return count;
    }

    getFirst() {
        return this.getAt(0);
    }

    getLast() {
        return this.getAt(this.size() - 1);
    }

    insertAt(data, index) {
        if (!this.head) {
            this.head = new Node(data);
            return;
        }

        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }

        // handle case index is out of bounds
        let previous = this.getAt(index - 1) || this.getLast();
        previous.next = new Node(data, previous.next);
    }

    insertFirst(data) {
        this.insertAt(data, 0);
    }

    insertLast(data) {
        this.insertAt(data, this.size());  // not .size - 1!!!
    }

    removeAt(index) {
        if (!this.head) {
            return;
        }

        if (index === 0) {
            this.head = this.head.next;
            return;
        }

        let previous = this.getAt(index - 1);
        // could use getAt(index + 1), but could be expensive
        // previous.next = this.getAt(index + 1);
        if (!previous || !previous.next) {
            return;
        }
        previous.next = previous.next.next;
    }

    removeFirst() {
        this.removeAt(0);
    }

    removeLast() {
        this.removeAt(this.size() - 1);
    }

    clear() {
        this.head = null;
    }

    forEach(fn) {
        let node = this.head;
        let count = 0;
        while (node) {
            fn(node, count);
            node = node.next;
            count++;
        }
    }

    // iterator to allow using linkedList with for..of
    *[Symbol.iterator]() {
        let node = this.head;
        while (node) {
            yield node;
            node = node.next;
        }
    }
}

// let x = new LinkedList();
// x.insertFirst(1);
// x.insertFirst(2);
// x.removeLast();

module.exports = { Node, LinkedList };
