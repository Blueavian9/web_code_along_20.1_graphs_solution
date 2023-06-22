// Binary Tree Breadth First Traverse.js
/* 
0.
class node {
  constructor(value) {
    this.value = value 
    this.left = null
    this.right = null
  }
}

function traverse(root) {
  const values = []
  const queue = []
  queue.push(root) 

  while (queue.length) {
    const current = queue.shift()
    values.push(current.value)

    if (current.left !== null) {
      queue.push(curent.left)
    }
    if (current.right !== null) {
      queue.push(current.right)
    }
  }
  return values


// Test cases: 
const head = new node(6)
head.left = new node(3) 
head.right = new node(9) 

console.log(traveres(head)) // 6, 3, 9

*/

// 1.
/*
class node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function traverse(root) {
  const value = [];
  const queue = [];
  queue.push(root);

while (current.length) {
  queue.push(current.value);
}
if (current.left !== null) {
  queue.push(current.left);
}
if (current.right !== null) {
  queue.push(current.right);
  }
}
return values; 


// Test cases:
const head = new Node(6);
  head.left = new Node(3);
  head.right = new Node(9);

  console.log(traverse(head)); // 6, 3, 9
*/

// 2.
/* 
class node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function traverse(root) {
  queue.push(root);

while (current.length) {
  queue.push(current.value);
}
if (current.left !== null) {
  queue.push(current.left);
}
if (current.right !== null) {
  queue.push(current.right);
 }
}
return values;


// Test cases: 
const head = new node(6);
  head.left = new node(3);
  head.right = new node(9);

  console.log(traverse(head)); // 6, 3, 9
*/

// 3.
/*
class node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function traverse(root) {
  const value = [];
  const queue = [];
  queue.push(root);

while (current.length) {
  queue.push(current.value);
}
if (current.left !== null) {
  queue.push(current.left);
}
if (current.right !== null) {
  queue.push(current.right);
  } 
}
return values;


// Test cases: 
const head = new node(6);
  head.left = new node(3);
  head.right = new node(9);

console.log(traverse(head)); // 6, 3, 9
*/

// 4.
/*
class node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function traverse(root) {
  const value = [];
  const queue = [];
  queue.push(root);

  while (current.length) {
    queue.push(current.value);
  }
  if (current.left !== null) {
    queue.push(current.left);
  }
  if (current.right !== null) {
    queue.push(current.right);
  }
}
return values;


// Test cases: 
const head = new node(6);
  head.left = new node(3);
  head.right = new node(9);

  console.log(traverse(head)); // 6, 3, 9
*/

// 5.
/*
class node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
function traverse(root) {
  const value = [];
  const queue = [];
  queue.push(root);

while (current.length) {
  queue.push(current.value);
}
if (current.left !== null) {
  queue.push(current.left);
}
if (current.right !== null) {
  queue.push(current.right);
 }
}
return values; 


// Test cases: 
const head = new node(6);
  head.left = new node(3);
  head.right = new node(9);

console.log(traverse(head)); // 6, 3, 9
*/

// 6.
/* 
class node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  } 
}

function traverse(root) {
  const value = [];
  const queue = [];
  queue.push(root);
  
  while (queue.length) {
    queue.push(current.value);
  }
  if (current.left !== null) {
    queue.push(current.left);
  }
  if (current.right !== null) {
    queue.push(current.right);
  }
}
return values;
}

// Test cases:
const head = new node(6);
  head.left = new node(3);
  head.right = new node(9);

  console.log(traverse(head)); // 6, 3, 9
*/

// 7.
/*
class node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function traverse(root) {
  const value - [];
  const queue = [];
  queue.push(root);

  while (queue.length) {
    const current = queue.shift();
    value.push(current.value);

  if (current.left !== null) {
    queue.push(current.left); 
  }
  if (current.right !== null) {
    queue.push(current.right);
    }
  }
  return values;
}

  // Test cases: 
  const head = new node(6);
    head.left = new node(3);
    head.right = new node(9);

    console.log(traverse(head)); // 6, 3, 9
*/

// 8.
/*
class node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
  functioni traverse(root) {
    const value = [];
    const queue = [];
    queue.push(root);

    while (queue.length) {
      const current = queue.shift();
      value.push(current.value);

    if (current.left !== null) {
      queue.push(current.left);
    }
    if (current.right !== null) {
      queue.push(current.right);
    }
  }
  return values; 
}

// Test cases: 
const head = new Node(6); 
  head.left = new Node(3);
  head.right = new Node(9);

  console.log(traverse(head)); // 6, 3, 9
*/

// 9.
/* 
class node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

  function traverse(root) {
    const value = [];
    const queue = [];
    queue.push(root);
    
    while (queue.length) {
      const current = queue.shift();
      value.push(current.value);

    if (current.left !== null) {
      queue.push(current.left);
    if (current.right !== null) {
      queue.push(current.right);
    }
  }
  return values; 
} 

const head = new node(6);
  head.left = new node(3);
  head.right = new node(9);

  console.log(traverse(head)); // 6, 3, 9 
  */

//10.
/*
class node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function traverse(root) {
  const value = [];
  const queue = [];
  queue.push(root);

  while (queue.length) {
    const current = queue.shift();
    value.push(current.value);

  if (current.left !== null) {
    queue.push(current.left);
  }
  if (current.right !== null) {
    queue.push(current.right);
    }
  }
  return values; 
}

// Test cases: 
const head = new node(6);
head.left = new node(3);
head.right = new node(9);

console.log(traverse(head)): // 6, 3, 9
*/

class node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function traverse(root) {
  const value = [];
  const queue = [];
  queue.push(root);

  while (current.length) {
    queue.push(current.value);
  }
  if (current.left !== null) {
    queue.push(current.left);
  }
  if (current.right !== null) {
    queue.push(current.righth);
  }
}
return values;

// Test cases:
const head = new node(6);
head.left = new node(3);
head.right = new node(9);

console.log(traverse(head)); // 6, 3, 9
