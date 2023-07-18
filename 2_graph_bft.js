function traverse(graph, root) {
  const value = [];
  const queue = [];
  queue.push(root);

  const visited = new Set();
  visited.add(root);

  while (queue.length) {
    // Dequeue a vertex from queue.
    const current = queue.shift();
    values.push(current);

    // if not yet mark it as visited, and enqueue it.
    for (let neighboor of graph[current]) {
      if (!visited.has(neighboor)) {
        visited.add(neighboor);
        queue.push(neighboor);
      }
    }
  }
  return values;
}

// Test cases:
// We'll be using this simple undirected graph to test our BFT:
// 5 -- 3
// | \ /
// |  2
// | / \
// 1    4

// Test cases:
const graph = { 1: [2, 5], 2: [1, 4, 5], 3: [5], 4: [2], 5: [1, 2, 3] };
console.log(traverse(graph, 1)); // 1, 2, 5, 4, 3
console.log(traverse(graph, 4)); // 4, 2, 1, 5, 3
console.log(traverse(graph, 5)); // 5, 1, 2, 3, 4
// const myArr = [];
// const mySet = new Set();
// myArr.push(1);
// myArr.push(1);
// mySet.add(1);
// console.log(mySet.has(3));
// mySet.add(1);
// console.log(myArr);
// console.log(mySet);
