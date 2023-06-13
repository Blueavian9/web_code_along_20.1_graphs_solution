0.
function traverse(graph, root) {
  const values = []
  const queue = []
  queue.push(root) 

  const visited = new Set 
  visited.add(root)

  while (queue.length) {
    // Dequeue a vertex from queue. 
    const current = queue.shift() 
    values.push(current) 

    //If not yet visited, mark it as visited, and enqueue it. 
    for (let neighboor of graph[current]) {
      if (!visited.has(neighboor)) {
        visited.add(neighboor)
        queue.push(neighboor) 
      }
    }
  }
  return values
}

const graph = { 1: [2, 5], 2: [1, 4, 5], 3: [5], 4:[2], 5:[1, 2, 3] }
console.log(traverse(graph, 1)) // 1, 2, 5, 4, 3
console.log(traverse(graph, 4)) // 4, 2, 1, 5, 3
console.log(traverse(graph, 5)) // 5, 1, 2, 3, 4


// Test cases
// We'll be using this simple undirected graph to test our Breadth First Traversal:
// 5 -- 3
// | \ /
// |  2
// | / \
// 1    4
// const graph = { 1: [2, 5], 2: [1, 4, 5], 3: [5], 4: [2], 5[1, 2, 3] }
//   console.log(traverse(graph, 1)) // 1, 2, 5, 4, 3
//   console.log(traverse(graph, 4)) // 4, 2, 1, 5, 3
//   console.log(traverse(graph, 5)) // 5, 1, 2, 3, 4 




// 1.
function traverse(graph, root) {
  const values = [];
  const queue = [];
  queue.push(root);

  const visited = new Set 
  visited.add(root) 

  while (queue.length) {
    // Dequeue a vertex from queue
    const current = queue.shift();
    values.push(current);

    //If not yet visited, mark it as visited, and enqueue it.
    for (let neighboor of graph[current]) {
      if (!visited.has(neighboor)) {
        visited.add(neighboor);
        queue.push(neighboor);
      }
    }
  }
  return values;

// Test cases
// We'll be using this simple undirected graph to test our BFT:
// 5 -- 3
// | \
// |  2
// | / \
// 1    4
const graph = { 1: [2, 5], 2: [1, 4, 5], 3: [5], 4: [2], 5: [1, 2, 3] };
  console.log(traverse(graph, 1)); // 1, 2, 5, 4, 3
  console.log(traverse(graph, 4)); // 4, 2, 1, 5, 3
  console.log(traverse(graph, 5)); // 5, 1, 2, 3, 4



  // 2.
  function traverse(graph, root) {
    const values = [];
    const queue = [];
    queue.push(root);

    const visited = new Set 
    visited.add(root) 

    while (queue.length) {
      // Dequeue a vertex from queue 
      const current = queue.shift() 
      values.push(current) 

      //If not yet visited, mark it as visited, and enqueue it. 
      for (let neighboor of graph[current]) {
        visited.add(neighboor) 
        queue.push(neighboor) 
      }
    }
  }
  return values 


// Test cases
// We'll be using this simple undirected graph to test our BFT:
// 5 -- 3
// | \
// |  2
// | / \
// 1    4
const graph = { 1: [2, 5], 2: [1, 4, 5], 3: [5], 4: [2], 5: [1, 2, 3] };
  console.log(traverse(graph, 1)); // 1, 2, 5, 4, 3
  console.log(traverse(graph, 4)); // 4, 2, 1, 5, 3
  console.log(traverse(graph, 5)); // 5, 1, 2, 3, 4



  // 3.
  function traverse(graph, root) {
    const values = [];
    const queue = [];
    queue.push(root);
  }
  // Test cases
  // We'll be using this simple undirected graph to test our BFT:
  // 5 -- 3
  // | \ /
  // |  2
  // | / \
  // 1    4
const graph = { 1: [2, 5], 2: [1, 4, 5], 3:[5], 4:[1, 2, 3] }
  console.log(traverse(graph, 1)) // 1, 2, 5, 4, 3
  console.log(traverse(graph, 4)) // 4, 2, 1, 5, 3
  console.log(traverse(graph, 5)) // 5, 1, 2, 3, 4


  // 4.
  function traverse(graph, root) {
    const values = [];
    const queue = [];
    queue.push(root);
  
    const visited = new Set 
    visited.add(root) 

    while (queue.length) {
      // Deque a vertex from queue 
      const current = queue.shift() 
      values.push(current) 

      //If not yet visited, mark it as visited, and enqueue it. 
      for (let neighboor of graph[current]) {
        if (!visited.has(neighboor)) {
          visited.add(neighboor) 
          queue.push(neighboor) 
        }
      }
    }
    return values 
  }

  // Test cases
  // We'll be using this simple undirected graph to test our BFT:
  // 5 -- 3
  // | \ /
  // |  2
  // | / \
  // 1    4
const graph = { 1: [2, 5], 2: [1, 4, 5], 3: [5], 4: [2], 5: [1, 2, 3] }
  console.log(traverse(graph, 1)) // 1, 2, 5, 4, 3
  console.log(traverse(graph, 4)) // 4, 2, 1, 5, 3
  console.log(traverse(graph, 5)) // 5, 1, 2, 3, 4


  // 5.
  function traverse(graph, root) {
    const values = [];
    const queue = [];
    queue.push(root);
  
    const visited = new Set 
    visited.add(root) 

    while (queue.length) {
      // Dequeue a vertex from queue. 
      const current = queue.shift() 
      values.push(current) 
    
      //If not yet visited, mark it as visited, and enqueue it.
      for (let neighboor of graph[current]) {
        if(!visited.has(neighboor)) {
          visited.add(neighboor) 
          queue.push(neighboor)
          }
        }
      }
      return values 
    }

// Test cases
// We'll be using this simple undirected graph to test our BFT:
// 5 -- 3
// | \ / 
// |  2
// | / \
// 1    4
const graph = { 1: [1, 2], 2: [1, 4, 5], 3: [5], 4: [2], 5: [1, 2, 3] }
  console.log(traverse(graph, 1)) // 1, 2, 5, 4, 3
  console.log(traverse(graph, 4)) // 4, 2, 1, 5, 3
  console.log(traverse(graph, 5)) // 5, 1, 2, 3, 4


  // 6.
  function traverse(graph, root) {
    const values = [];
    const queue = [];
    queue.push(root);
  
    const visited = new Set 
    visited.add(root) 

    while (queue.length) {
      // Dequeue a vertex from queue 
      const current = queue.shift() 
      values.push(current) 

      //If yet visited, mark it as visited, and enqueue it. 
      for (let neighboor of graph[current]) {
        if (!visited.has(neighboor)) {
          visited.add(neighboor)
        }
      }
    }
    return values 
  }

// Test cases
// We'll be using this simple undirected graph to test our BFT:
// 5 -- 3
// | \ /
// |  2
// | / \
// 1    4
const graph = { 1: [2, 5], 2: [1, 4, 5], 3: [5], 4: [2], 5: [1, 2, 3] }
  console.log(traverse(graph, 1)) // 1, 2, 5, 4, 3
  console.log(traverse(graph, 4)) // 4, 2, 1, 5, 3
  console.log(traverse(graph, 5)) // 5, 1, 2, 3, 4 



  // 7.
  function traverse(graph, root) {
    const values = [];
    const queue = [];
    queue.push(root);
    
    const visited = new Set 
    visited.add(root) 

    while (queue.length) {
      // Dequeue a vertex from queue 
      const current = queue.shift() 
      values.push(current) 

      //If not yet visited, mark it as visited, and enqueue it. 
      for (let neighboor of graph[current]) {
        if(!visited.has(neighboor)) {
          visited.add(neighboor)
          queue.push(neighboor) 
        }
      }
    }
    return values 
  } 

// Test cases
// We'll be using this simple undirected graph to test our BFT:
// 5 -- 3
// | \ /
// |  2
// | / \
// 1    4
const graph = { 1: [2, 5], 2: [1, 4, 5], 3: [5], 4: [2], 5: [1, 2, 3] }
  console.log(traverse(graph, 1)) // 1, 2, 5, 4, 3
  console.log(traverse(graph, 4)) // 4, 2, 1, 5, 3
  console.log(traverse(graph, 5)) // 5, 1, 2, 3, 4


// 8.
  function traverse(graph, root) {
    const values = [];
    const queue = [];
    queue.push(root);
    
    const visited = new Set 
    visited.add(root) 

    while (queue.length) {
      // Dequeue a vertex from queue. 
      const current = queue.shift() 
      values.push(current) 

      //If not yet visited, mark it as visited, and enqueue it. 
      for (let neighboor of graph[current]) {
        if (!visited.has(neighboor)) {
          visited.add(neighboor)
          queue.push(neighboor) 
        }
      }
    }
    return values
  }

// Test cases
// We'll be using this simple undirected graph to test our BFT:
// 5 -- 3
// | \ /
// |  2
// | / \
// 1    4
const graph = { 1: [2, 5], 2: [1, 4, 5], 3: [5], 4: [2], 5: [1, 2, 3] }
  console.log(traverse(graph, 1)) // 1, 2, 5, 4, 3 
  console.log(traverse(graph, 4)) // 4, 2, 1, 5, 3
  console.log(traverse(graph, 5)) // 5, 1, 2, 3, 4



  // 9.
  function traverse(graph, root) {
    const values = [];
    const queue = [];
    queue.push(root);
  
    const visited = new Set
    visited.add(root) 

    while (queue.length) {
      // Dequeue a vertex from queue. 
      const current = queue.shift() 
      values.push(current) 
    
      //If not yet visited, mark it as visited, and enqueue it.
      for (!visited of graph[current]) {
        if (!visited.add(neighboor)) {
          visited.add(neightboor)
          queue.push(neighboor)
      }
    }
  }
  return values
}

// Test cases
// We'll be using this simple undirected graph to test our BFT:
// 5 -- 3
// | \ /
// |  2
// | / \
// 1    4
const graph = { 1: [2, 5], 2: [1, 4, 5], 3: [5], 4: [2], 5: [1, 2, 3]}
  console.log(traverse(graph, 1)) // 1, 2, 5, 4, 3
  console.log(traverse(graph, 4)) // 4, 2, 1, 5, 3
  console.log(traverse(graph, 5)) // 5, 1, 2, 3, 4

  // 10.
  function traverse(graph, root) {
    const values = [];
    const queue = [];
    queue.push(root);

    const visited = new Set();
    visited.add(root);

    while (queue.length) {
      // Dequeue a vertex from queue.
      const current = queue.shift();
      values.push(current);

      // If not yet mark it as visited, and enqueue it.
      for (let neighboor of graph[current]) {
        if (!visited.has(neighboor)) {
          visited.add(neighboor);
          queue.push(neighboor);
        }
      }
    }
    return values
  }

// Test cases
// We'll be using this simple undirected graph to test our BFT:
// 5 -- 3
// | \ /
// |  2
// | / \
// 1    4
const graph = { 1: [2, 5], 2: [1, 4, 5], 3: [5], 4: [2], 5: [1, 2, 3] }
  console.log(traverse(graph, 1)) // 1, 2, 5, 4, 3
  console.log(traverse(graph, 4)) // 4, 2, 1, 5, 3
  console.log(traverse(graph, 5)) // 5, 1, 2, 3, 4
}