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

    insertFirst(data) {
        this.head = new Node(data, this.head);
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
        return this.head;
    }

    getLast() {
        let node = this.head;

        if (!node) {
            return null;
        }

        while (node) {
            if (!node.next) {
                return node;
            }
            node = node.next;
        }

        return last;
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if (!this.head) {
            return;
        }

        this.head = this.head.next;
    }

    removeLast() {
        let previous = this.head;

        if (!previous) {
            return;
        }

        let node = previous.next;

        if (!node) {
            this.head = null;
            return;
        }

        while (node.next) {
            previous = node;
            node = node.next;
        }

        previous.next = null;
    }

    insertLast(data) {
        const last = this.getLast();

        if (last) {
            // at least one node in linked list
            last.next = new Node(data);
            return;
        }

        // no nodes in linked list
        this.head = new Node(data);
    }

    // insertLast without getLast
    // insertLast(data) {
    //     let node = this.head;

    //     if (!node) {
    //         this.head = new Node(data);
    //         return;
    //     }

    //     while (node.next) {
    //         node = node.next;
    //     }

    //     node.next = new Node(data);
    // }

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

    removeAt(index) {
        if (!this.head) {
            return;
        }

        if (index === 0) {
            this.removeFirst();
            // this.head = this.head.next;
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
}

// let x = new LinkedList();
// x.insertFirst(1);
// x.insertFirst(2);
// x.removeLast();

module.exports = { Node, LinkedList };
