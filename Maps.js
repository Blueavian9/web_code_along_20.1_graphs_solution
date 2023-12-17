class Map {
    constructor() {
        this.items = {};
    }

    set(key, value) {
        this.items[key] = value;
    }

    get(key) {
        return this.has(key) ? this.items[key] : undefined;
    }
    
    delete(key) {
        if (this.has(key)) {
            delete this.items[key];
            return true;
        }
        return false; 
    }

    has(key) {
        return this.items.hasOwnProperty(key); 
    }

    key() {
        return Object.keys(this.items);
    }

    values() {
        return Object.values(this.items);
    }
}

// Test Map 
let myMap = new Map(); 
myMap.set("name", "Cesar"); 
myMap.set("age", 37); 
console.log(myMap.get("name")); // Outputs Cesar 
console.log(myMap.has("gender")); // Outputs false
myMap.delete("age");
console.log(myMap.keys()); // Outputs ['name']
console.log(myMap.keys()); // Outputs ['Cesar']