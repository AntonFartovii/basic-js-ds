const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor() {
    this.length = null
  }

  getUnderlyingList() {
    return this.length
  }

  enqueue( value ) {
    if ( this.length ) {
      let node = this.length
      while (node.next) {
        node = node.next
      }

      node.next = new ListNode(value)

    } else {
      this.length = new ListNode(value)
    }
  }

  dequeue() {
    let el = this.length.value
    this.length = this.length.next
    return el
  }
}

module.exports = {
  Queue
};
