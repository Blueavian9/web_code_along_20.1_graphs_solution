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

//// Test cases:
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
  const outputArray = []; // the  output of the BFT traversal
  const queue = [];

  // your BFT code here
  // Enque: queue.push(value)
  queue.push(root);
  while (queue.length) {
    // Serve level
    const current = queue.shift();
    outputArray.push(current.value);
    let leftChild = current.left;
    let rightChild = current.right;

    if (leftChild !== null) {
      queue.push(leftChild);
    }
    if (rightChild !== null) {
      queue.push(rightChild);
    }
  }
  return outputArray;

  // Dequeue: queue.shift()
}

/* First Level Traversal ===  BFT (F.I.F.O.) === queue
   DFT  === Stack === (L.I.F.O.)
               6
            /    \
           3      10
         /  \    /  
        2    4  7    
    
        BFT = [6, 3, 10, 2, 4]
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

// Arrow Function: Arrow functions are a compact and concise way to write anonymous functions in JS
// They were introduced in ES6 and have some semantic differences and limitations compared to traditional function expressions arrow functions do not have their own bindings to this, arguments, or super, and cannot be used as methods, constructors, or generators. Arrow functions are written as a function expression with parenthesis, followed by an arrow (=>), followed by an expression that is returned by the function.

// function message() {
//   return "Hello World!";
// }

// let message = () => {
//   return "Hello World!";
// };

// console.log(message());

// Closure
//for (var i = 0; i < 3; i++) {
//1.
//  first we declare
//  a variable "i"
//  with the var keyword
//  then a for loop
//  that will run 3 times
//  by incrementing
//  that variable

// }
// const log = () => {
// console.log(i); // i == output
// }; // inside the for loop is where closures come into play define a function log that concole.log's the global variable "i". this is not a pure function because it depends on a variable outside of it's scope therefore creating a closure
//
// setTimeout(log, 100);  // then from there we set up a Timeout functioin as the callback this queue's up a task to execute the log function after 100 miliseconds.

// we are capturing the i in a varible for each iteration of a loop so
// The tricky part about a closure is that the var and let
// when we use var in a for loop that variable actually gets hoisted up into that parent scope which in this case would be the global scope
// with var we have a global variable that we are mutating over and over again
// but with let we are creating a variable that is scoped to the for loop in simple words it's local to the for loop and can't be accessed outside of it.
// Thus a closure is a combination of of a function and it's lexical environment
