// simple example of weight graph
class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }

  DijkstraAlgo(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let path = [];
    let smallest;

    // build initial state
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }
    // as long as there is something to visit
    while (nodes.values.length) {
      smallest = nodes.dequeue().value;

      if (smallest === finish) {
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          // find neighboring node
          const neighborNode = this.adjacencyList[smallest][neighbor];
          // calculate new distance weight to neightbor node
          let candidate = distances[smallest] + neighborNode.weight;
          let nextNeighbor = neighborNode.node;
          if (candidate < distances[nextNeighbor]) {
            // updating new smallest distance to neightbor
            distances[nextNeighbor] = candidate;
            // updaiting previous (how we got to neighbor)
            previous[nextNeighbor] = smallest;
            // enqueue in priority queue with new priority
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}

class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
};

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    let newNode = new Node(value, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.values.length - 1;
    const insertedItem = this.values[index];

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (insertedItem.priority >= parent.priority) break;
      this.values[parentIndex] = insertedItem;
      this.values[index] = parent;
      index = parentIndex;
    }
  }

  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      // bubble down
      this.bubbleDown();
    }
    return min;
  }

  bubbleDown() {
    let index = 0;
    const length = this.values.length;
    const element = this.values[0];

    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild.priority < element.priority) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIndex;
        }
      }
      if (swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
  }
}

const graph = new WeightedGraph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A','B', 4);
graph.addEdge('A','C', 2);
graph.addEdge('B','E', 3);
graph.addEdge('C','D', 2);
graph.addEdge('C','F', 4);
graph.addEdge('D','E', 3);
graph.addEdge('D','F', 1);
graph.addEdge('E','F', 1);

console.log(graph.DijkstraAlgo('A', 'E'));
