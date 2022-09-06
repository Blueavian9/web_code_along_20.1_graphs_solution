function traverse(graph, root) {
  const values = []
  const queue = []
  queue.push(root)

  const visited = new Set
  visited.add(root)

  while (queue.length) {
    // Dequeue a vertex from queue
    const current = queue.shift()
    values.push(current)

    // If not yet visited, mark it as visited, and enqueue it
    for (let neighbor of graph[current]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor)
        queue.push(neighbor)
      }
    }
  }
  return values
}

// Test cases
// We'll be using this simple undirected graph to test our BFT:
// 5 -- 3
// | \
// |  2
// | / \
// 1    4
const graph = { 1: [2, 5], 2: [1, 4, 5], 3: [5], 4: [2], 5: [1, 2, 3] }
console.log(traverse(graph, 1)) // 1, 2, 5, 4, 3
console.log(traverse(graph, 4)) // 4, 2, 1, 5, 3
console.log(traverse(graph, 5)) // 5, 1, 2, 3, 4
