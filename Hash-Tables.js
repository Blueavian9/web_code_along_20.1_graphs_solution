// Driver Task
class HashTable {
    constructor() {
      this.table = {};
    }
  
    hash(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i);
      }
      return hash % 37; // Modulo to limit the hash within a reasonable range
    }
  
    put(key, value) {
      const index = this.hash(key);
      this.table[index] = value;
    }
  
    get(key) {
      const index = this.hash(key);
      return this.table[index];
    }
  
    remove(key) {
      const index = this.hash(key);
      if (this.table[index] !== undefined) {
        delete this.table[index];
      }
    }
  }
  
  // Test hash table
  let myHashTable = new HashTable();
  myHashTable.put("name", "John");
  myHashTable.put("age", 25);
  console.log(myHashTable.get("name")); // Outputs John
  myHashTable.remove("age");
  console.log(myHashTable.get("age")); // Outputs undefined
  