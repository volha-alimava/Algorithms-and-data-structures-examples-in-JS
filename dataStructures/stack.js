// insertion: O(1), removal: O(1), search: O(n), access: O(n)
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.size = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.size === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      let temp = this.top;
      this.top = newNode;
      this.top.next = temp;
    }
    return ++this.size;
  }

  pop() {
    if (this.size === 0) return null;
    let top = this.top;
    if (this.size === 1) {
      this.top = null;
      this.bottom = null;
    } else {
      this.top = this.top.next;
    }
    this.size--;
    return top.value;
  }
}

const stack = new Stack();
stack.push('Third');
stack.push('Second');
stack.push('First');
stack.pop();
console.log(stack);
