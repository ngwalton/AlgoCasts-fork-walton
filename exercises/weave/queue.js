// --- Directions
// Implement a 'peek' method in this Queue class.
// Peek should return the last element (the next
// one to be returned) from the queue *without*
// removing it.

class Queue {
  #data;
  constructor() {
    this.#data = [];
  }

  add(record) {
    this.#data.unshift(record);
  }

  remove() {
    return this.#data.pop();
  }

  // to see what the next value would/check if there is one
  peek() {
    return this.#data.slice(-1)[0];
  }
}

module.exports = Queue;
