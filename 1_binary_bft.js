// class node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// function traverse(root) {
//   const value = [];
//   const queue = [];
//   queue.push(root);

//   while (current.length) {
//     queue.push(current.value);
//   }
//   if (current.left !== null) {
//     queue.push(current.left);
//   }
//   if (current.right !== null) {
//     queue.push(current.righth);
//   }
// }
// return values;

// // Test cases:
// const head = new node(6);
// head.left = new node(3);
// head.right = new node(9);

// console.log(traverse(head)); // 6, 3, 9

class node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
// Implement a breadth-first traversal (BFT) for a binary tree.
// Inputs:
//   root: node (root of the binary tree)

// Output: list of values in the order of a breadth-first traversal

function traverse(root) {
  const value = [];
  const queue = [];

  // your BFT code here
  // Enque: queue.push(value)
  queue.push(root);
  while (queue.length) {
    // Serve level
    const current = queue.shift();
    value.push(current.value);
    let leftChild = current.left;
    let rightChild = current.right;

    if (leftChild !== null) {
      queue.push(leftChild);
    }
    if (rightChild !== null) {
      queue.push(rightChild);
    }
  }
  return value;

  // Dequeue: queue.shift()
}

/* First Level Traversal ===  BFT (F.I.F.O.) === queue
   DFT  === Stack === (L.I.F.O.)
               6
            /    \
           3      10
         /  \    /  
        2    4  7    
*/

// function traverse(root) {
//   const value = [];
//   const queue = [];
//   queue.push(root);

//   while (current.length) {
//     queue.push(current.left);
//   }
//   if (current.left !== null) {
//     queue.push(current.left);
//   }
//   if (current.right !== null) {
//     queue.push(current.right);
//   }
// }
// return value;

// Test cases:
const head = new node(6);
head.left = new node(3);
head.right = new node(9);

console.log(traverse(head)); // 6, 3, 9


/*

      6
    /   \
   3     9

*/