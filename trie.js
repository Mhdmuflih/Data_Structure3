// Trie Implementation
// ------------------------------
// class TrieNode {
//     constructor() {
//         this.children = {};
//         this.isEndofWord = false;
//     }
// }

// class Trie {
//     constructor() {
//         this.root = new TrieNode();
//     }

//     insert(word) {
//         let node = this.root;
//         for(let char of word) {
//             if(!node.children[char]){
//                 node.children[char] = new TrieNode();
//             }
//             node = node.children[char];
//         }
//         node.isEndofWord = true;
//     }

//     search(word){
//         let node = this.root;
//         for(let char of word){
//             if(!node.children[char]){
//                 return false;
//             }
//             node = node.children[char];
//         }
//         return node.isEndofWord;
//     }

//     startWith(prefix){
//         let node = this.root;
//         for(let char of prefix){
//             if(!node.children[char]){
//                 return false;
//             }
//             node = node.children[char];
//         }
//         return true;
//     }

//     display(){
//         console.log(JSON.stringify(this.root, null, 2));
//     }
// }

// const trie = new Trie();

// trie.insert("apple");
// trie.insert("app");
// trie.insert("banana");
// trie.insert("bat");

// console.log(trie.search("apple"));  // true
// console.log(trie.search("app"));    // true
// console.log(trie.search("appl"));   // false
// console.log(trie.search("banana")); // true
// console.log(trie.search("bat"));    // true
// console.log(trie.search("batman")); // false

// console.log("this all is start with : ");
// console.log(trie.startWith("appl"));
// console.log(trie.startWith("apdfsdf"));
// console.log(trie.startWith("bat"));
// console.log(trie.startWith("ba"));

// trie.display();


// ============================================================================================

// class TrieNode {
//     constructor() {
//         this.children = {};
//         this.EndofWord = false;
//     }
// }

// class Trie {
//     constructor() {
//         this.root = new TrieNode();
//     }

//     insert(word){
//         let node = this.root;
//         for(let char of word){
//             if(!node.children[char]){
//                 node.children[char] = new TrieNode();
//             }
//             node = node.children[char];
//         }
//         node.EndofWord = true;
//     }

//     search(word) {
//         let node = this.root;
//         for(let char of word){
//             if(!node.children[char]){
//                 return false;
//             }
//             node = node.children[char];
//         }
//         return node.EndofWord;
//     }

//     startWith(prefix){
//         let node = this.root;
//         for(let char of prefix){
//             if(!node.children[char]){
//                 return false;
//             }
//             node = node.children[char];
//         }
//         return true;
//     }

//     delete(word){
//         this.deleteWord(this.root, word, 0);
//     }

//     deleteWord(node, word, index){
//         if(index === word.length){
//             if(!node.EndofWord){
//                 return false;
//             }
//             node.EndofWord = false;
//             return Object.keys(node.children).length === 0
//         }

//         let char = word[index];
//         if(!node.chaildren[char]) {
//             return false;
//         }

//         let shouldDeleteChild = this.deleteWord(node.chaildren[char], word, index + 1);
//         if(shouldDeleteChild){
//             delete node.chaildren[char];
//             return Object.keys(node.chaildren).length === 0;
//         }
//         return false;
//     }

//     display(){
//         console.log(JSON.stringify(this.root, null, 2));
//     }
// }

// const trie = new Trie();

// trie.insert("apple");
// trie.insert("app");
// trie.insert("banana");
// trie.insert("bat");

// console.log(trie.search("apple"));  // true
// console.log(trie.search("app"));    // true
// console.log(trie.search("appl"));   // false
// console.log(trie.search("banana")); // true
// console.log(trie.search("bat"));    // true
// console.log(trie.search("batman")); // false

// console.log("this all is start with : ");
// console.log(trie.startWith("appl"));
// console.log(trie.startWith("apdfsdf"));
// console.log(trie.startWith("bat"));
// console.log(trie.startWith("ba"));

// trie.display();


// ==============================================================================================================

