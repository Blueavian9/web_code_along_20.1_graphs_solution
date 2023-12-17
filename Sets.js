// Driver Task
class Set {
    constructor() {
      this.items = {};
    }
  
    add(element) {
      if (!this.has(element)) {
        this.items[element] = true;
        return true;
      }
      return false;
    }
  
    delete(element) {
      if (this.has(element)) {
        delete this.items[element];
        return true;
      }
      return false;
    }
  
    has(element) {
      return this.items.hasOwnProperty(element);
    }
  
    values() {
      return Object.keys(this.items);
    }
  }
  
  // Test Set
  let mySet = new Set();
  mySet.add(10);
  mySet.add(20);
  console.log(mySet.has(10)); // Outputs true
  console.log(mySet.has(30)); // Outputs false
  mySet.delete(20);
  console.log(mySet.values()); // Outputs [ '10' ]
  