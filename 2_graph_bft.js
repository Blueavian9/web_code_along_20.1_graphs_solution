// function traverse(graph, root) {
//   const value = [];
//   const queue = [];
//   queue.push(root);

//   const visited = [1, 2, 3, 4, 5]; // linear opr = O(N) 1k
//   const visited2 = [1, 2, 3, 5]; //constant time op = O(1)
//   visited.push(root);

//   while (queue.length) {
//     let current = queue.shift();
//     value.push(current);

//     for (let neighbor of graph[current]) {
//       if (visited.indexOf(neighbor) == -1) {
//         visited.push(neighbor);
//         queue.push(neighbor);
//       }
//     }
//   }
//   return value;
// }

// const head = new node(6);
// head.left = new node(3);
// head.right = new node(9);

// console.log(traverse(head)); //

// // Test cases:
// // We'll be using this simple undirected graph to test our BFT:
// // 5 -- 3
// // | \ /
// // |  2
// // | / \
// // 1    4

// // Test cases:
// // const student = { name: "Cesar", age: [3, 7] };
// // console.log(student["age"]);
// const graph = { 1: [2, 5], 2: [1, 4, 5], 3: [5], 4: [2], 5: [1, 2, 3] };
// console.log(traverse(graph, 1)); // 1, 2, 5, 4, 3
// console.log(traverse(graph, 4)); // 4, 2, 1, 5, 3
// console.log(traverse(graph, 5)); // 5, 1, 2, 3, 4
// // const myArr = [];
// // const mySet = new Set();
// // myArr.push(1);
// // myArr.push(1);
// // mySet.add(1);
// // console.log(mySet.has(3));
// // mySet.add(1);
// // console.log(myArr);
// // console.log(mySet);

/*
PLAN:
1. initialize queue and output array -done
2. enqueue head inside queue    -done 
3. keep serving elements in the queue  -done
3b. dequeue the queue + push to output array -done
3c. enqueue its children  -done
4. repeat until queue is empty -done 
5. return output array -done

*/


// Driver Task 
class Graph {
  constructor() {
    this.vertices = [];
    this.edges = {};
  }

  addVertex(vertex) {
    this.vertices.push(vertex); 
    this.edges[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    this.edges[vertex1].push(vertex2);
    this.edges[vertex2].push(vertex1);
  }

  printGraph() {
    console.log("Vertices:"); 
    console.log(this.vertices);

    console.log("Edges:");
    for (let vertex of this.vertices) {
      console.log(`${vertex} -> ${this.edges[vertex].join(', ')}`);
    }
  }
}

// Test graph
let myGraph = new Graph(); 
myGraph.addVertex('A');
myGraph.addVertex('B');
myGraph.addVertex('C');
myGraph.addEdge('A', 'B');
myGraph.addEdge('B', 'C');
myGraph.printGraph(); 