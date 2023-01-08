// insertion: O(1), removal: O(1), search: O(n), access: O(n)
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // add to the end
  enqueue(value) {
    const newNode = new Node(value);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  // remove from the beginning
  dequeue() {
    if (this.size === 0) return null;
    let first = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }
    this.size--;
    return first.value;
  }
}

const queue = new Queue();
queue.enqueue('First');
queue.enqueue('Second');
queue.enqueue('Third');
queue.dequeue();
console.log(queue);
