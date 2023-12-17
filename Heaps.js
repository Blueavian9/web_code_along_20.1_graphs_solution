// Driver Task
class MinHeap {
    constructor() {
      this.heap = [];
    }
  
    insert(value) {
      this.heap.push(value);
      this.bubbleUp();
    }
  
    bubbleUp() {
      let index = this.heap.length - 1;
  
      while (index > 0) {
        let parentIndex = Math.floor((index - 1) / 2);
  
        if (this.heap[index] < this.heap[parentIndex]) {
          // Swap if the current value is smaller than its parent
          [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
          index = parentIndex;
        } else {
          break;
        }
      }
    }
  
    extractMin() {
      if (this.heap.length === 0) {
        return null;
      }
  
      if (this.heap.length === 1) {
        return this.heap.pop();
      }
  
      const min = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.bubbleDown();
      return min;
    }
  
    bubbleDown() {
      let index = 0;
  
      while (true) {
        let leftChildIndex = 2 * index + 1;
        let rightChildIndex = 2 * index + 2;
        let smallest = index;
  
        if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallest]) {
          smallest = leftChildIndex;
        }
  
        if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallest]) {
          smallest = rightChildIndex;
        }
  
        if (smallest !== index) {
          // Swap if the child is smaller than the parent
          [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
          index = smallest;
        } else {
          break;
        }
      }
    }
  }
  
  // Test MinHeap
  let myHeap = new MinHeap();
  myHeap.insert(10);
  myHeap.insert(20);
  myHeap.insert(5);
  console.log(myHeap.heap); // Outputs [5, 20, 10]
  console.log(myHeap.extractMin()); // Outputs 5
  console.log(myHeap.heap); // Outputs [10, 20]
  