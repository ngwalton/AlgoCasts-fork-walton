// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
//// My note: with even length, return "first" middle node
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
    // slow moves forward one step at a time
    // fast movers forward two steps at a time
    let slow = list.getFirst();
    let fast = slow;

    while (fast?.next?.next) {  // check if fast has somewhere to go
        fast = fast.next.next;
        slow = slow.next;
    }

    return slow;
}

module.exports = midpoint;
