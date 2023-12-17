// Driver Task
class TrieNode {
    constructor() {
      this.children = {};
      this.isEndOfWord = false;
    }
  }
  
  class Trie {
    constructor() {
      this.root = new TrieNode();
    }
  
    insert(word) {
      let node = this.root;
  
      for (let char of word) {
        if (!node.children[char]) {
          node.children[char] = new TrieNode();
        }
        node = node.children[char];
      }
  
      node.isEndOfWord = true;
    }
  
    search(word) {
      let node = this.root;
  
      for (let char of word) {
        if (!node.children[char]) {
          return false;
        }
        node = node.children[char];
      }
  
      return node.isEndOfWord;
    }
  }
  
  // Test Trie
  let myTrie = new Trie();
  myTrie.insert("apple");
  console.log(myTrie.search("apple")); // Outputs true
  console.log(myTrie.search("app"));   // Outputs false
  console.log(myTrie.search("orange")); // Outputs false
  