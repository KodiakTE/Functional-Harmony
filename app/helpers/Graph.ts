class Graph {
  private adjacencyList: Map<string, string[]>;

  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex: string): void {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  addEdge(vertex1: string, vertex2: string): void {
    if (this.adjacencyList.has(vertex1)) {
      this.adjacencyList.get(vertex1)?.push(vertex2);
    } else {
      this.adjacencyList.set(vertex1, [vertex2]);
    }
  }

  getNeighbors(vertex: string): string[] | undefined {
    return this.adjacencyList.get(vertex);
  }

  displayGraph(): void {
    for (let [vertex, edges] of this.adjacencyList.entries()) {
      console.log(`${vertex} -> ${edges.join(', ')}`);
    }
  }
}

export default Graph;