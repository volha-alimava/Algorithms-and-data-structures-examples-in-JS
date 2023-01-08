
// basic undirected graph example
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
    }
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacencyVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacencyVertex);
    }
    delete this.adjacencyList[vertex];
  }

  depthFirstRecursive(vertex) {
    const result = [];
    let visited = {};
    const helper = (vertex) => {
      if (!vertex) return undefined;
      visited[vertex] = true;
      result.push(vertex);
      this.adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          return helper(neighbor);
        }
      })
    }
    helper(vertex);
    return result;
  }

  depthFirstIterative(vertex) {
    const stack = [vertex];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[vertex] = true;
    while (stack.length > 0) {
      currentVertex = stack.pop();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      })
    }
    return result;
  }

  breadthFirst(vertex) {
    const queue = [vertex];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[vertex] = true;
    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      })
    }
    return result;
  }
}

const graph = new Graph();
// graph.addVertex('Tokyo');
// graph.addVertex('Tokyo');
// graph.addVertex('Boston');
// graph.addVertex('New York');
// graph.addVertex('Olso');
// graph.addVertex('Dublin');
// graph.addEdge('Tokyo', 'Boston');
// graph.addEdge('Tokyo', 'New York');
// graph.addEdge('Tokyo', 'Olso');
// graph.addEdge('Tokyo', 'Dublin');
// graph.removeEdge('Tokyo', 'New York');
// graph.removeEdge('LA', 'SF');
// graph.removeVertex('Tokyo');
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');

console.log(graph.breadthFirst('A'));
