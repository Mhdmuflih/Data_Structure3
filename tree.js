// Normal Implemation in Binary search tree
// ---------------------------------------------
// class Node {
//     constructor(value) {
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }

// class BinarySearchTree {
//     constructor() {
//         this.root = null;
//     }

//     isEmpty(){
//         return this.root === null;
//     }
// }

// const bst = new BinarySearchTree();

// console.log("binary is empty or not:", bst.isEmpty());


// ====================================================================================================================

// Binary search tree insertion
// ---------------------------------------------
// class Node {
//     constructor(value){
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }

// class BinarySearchTree {
//     constructor() {
//         this.root = null;
//     }

//     isEmpty(){
//         return this.root === null;
//     }

//     insert(value){
//         const newNode = new Node(value);
//         if(this.isEmpty()){
//             this.root = newNode
//         }else {
//             this.insertNode(this.root, newNode)
//         }
//     }

//     insertNode(root,newNode){
//         if(newNode.value < root.value){
//             if(root.left === null){
//                 root.left = newNode;
//             }else{
//                 this.insertNode(root.left,newNode)
//             }
//         }else{
//             if(root.right === null){
//                 root.right = newNode;
//             }else{
//                 this.insertNode(root.right,newNode);
//             }
//         }
//     }
// }

// const bst = new BinarySearchTree();

// bst.insert(10);
// bst.insert(5);
// bst.insert(15);
// bst.insert(3);
// bst.insert(7);


// ====================================================================================================================

// Binary search here searching that tree that value.
// ---------------------------------------------
// class Node {
//     constructor(value) {
//         this.value = value
//         this.left = null;
//         this.right = null;
//     }
// }

// class BinarySearchTree {
//     constructor() {
//         this.root = null;
//     }

//     isEmpty(){
//         return this.root === null;
//     }

//     insert(value){
//         const newNode = new Node(value);
//         if(this.isEmpty()){
//             this.root = newNode
//         }else {
//             this.insertNode(this.root,newNode);
//         }
//     }

//     insertNode(root, newNode){
//         if(newNode.value < root.value){
//             if(root.left === null){
//                 root.left = newNode
//             }else{
//                 this.insertNode(root.left,newNode);
//             }
//         }else{
//             if(root.right === null){
//                 root.right = newNode;
//             }else{
//                 this.insertNode(root.right,newNode)
//             }
//         }
//     }

//     search(root,value){
//         if(!root){
//             return false;
//         }else{
//             if(root.value === value){
//                 return true;
//             }else if(value < root.value){
//                 return this.search(root.left,value);
//             }else{
//                 return this.search(root.right,value);
//             }
//         }
//     }
// }

// const bst = new BinarySearchTree();

// console.log("binary is empty or not:", bst.isEmpty());

// bst.insert(10);
// bst.insert(5);
// bst.insert(15);
// bst.insert(3);
// bst.insert(7);

// console.log(bst.search(bst.root,10));
// console.log(bst.search(bst.root,54656));
// console.log(bst.search(bst.root,15));
// console.log(bst.search(bst.root,3));
// console.log(bst.search(bst.root,7));


// ====================================================================================================================

// Depth first search (DFS)    traversal 3 methods. Preorder, Inorder, PostOrder
// ---------------------------------------------
// class Node {
//     constructor(value){
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }

// class BinarySearchTree {
//     constructor() {
//         this.root = null;
//     }

//     isEmpty(){
//         return this.root === null;
//     }

//     insert(value){
//         const newNode = new Node(value);
//         if(this.isEmpty()){
//             this.root = newNode;
//         }else{
//             this.insertNode(this.root, newNode);
//         }
//     }

//     insertNode(root,newNode){
//         if(newNode.value < root.value){
//             if(root.left === null){
//                 root.left = newNode;
//             }else{
//                 return this.insertNode(root.left, newNode);
//             }
//         }else {
//             if(root.right === null){
//                 root.right = newNode;
//             }else {
//                 return this.insertNode(root.right,newNode);
//             }
//         }
//     }

//     search(root,value){
//         if(!root){
//             return false;
//         }else{
//             if(root.value === value){
//                 return true;
//             }else if(value < root.value){
//                 return this.search(root.left,value);
//             }else {
//                 return this.search(root.right, value);
//             }
//         }
//     }

//     PreOrder(root){
//         if(root){
//             console.log(root.value);
//             this.PreOrder(root.left);
//             this.PreOrder(root.right);
//         }
//     }

//     InOrder(root){
//         if(root){
//             this.InOrder(root.left)
//             console.log(root.value);
//             this.InOrder(root.right);
//         }
//     }

//     PostOrder(root){
//         if(root){
//             this.PostOrder(root.left);
//             this.PostOrder(root.right);
//             console.log(root.value);
//         }
//     }
// }

// const bst = new BinarySearchTree()

// console.log("binary is empty or not:", bst.isEmpty());

// bst.insert(10);
// bst.insert(5);
// bst.insert(15);
// bst.insert(3);
// bst.insert(7);

// console.log(bst.search(bst.root,10));
// console.log(bst.search(bst.root,54656));
// console.log(bst.search(bst.root,15));
// console.log(bst.search(bst.root,3));
// console.log(bst.search(bst.root,7));

// console.log("preOrder:");
// bst.PreOrder(bst.root);

// console.log("inOrder:");
// bst.InOrder(bst.root);

// console.log('postOrder:');
// bst.PostOrder(bst.root);


// ====================================================================================================================

// Breath First Search (BFS)
// ---------------------------------------------
// class Node {
//     constructor(value){
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }

// class BinarySearchTree {
//     constructor() {
//         this.root = null;
//     }

//     isEmpty(){
//         return this.root === null;
//     }

//     insert(value){
//         const newNode = new Node(value);
//         if(this.isEmpty()){
//             this.root = newNode;
//         }else{
//             this.insertNode(this.root, newNode);
//         }
//     }

//     insertNode(root,newNode){
//         if(newNode.value < root.value){
//             if(root.left === null){
//                 root.left = newNode;
//             }else{
//                 return this.insertNode(root.left, newNode);
//             }
//         }else {
//             if(root.right === null){
//                 root.right = newNode;
//             }else {
//                 return this.insertNode(root.right,newNode);
//             }
//         }
//     }

//     search(root,value){
//         if(!root){
//             return false;
//         }else{
//             if(root.value === value){
//                 return true;
//             }else if(value < root.value){
//                 return this.search(root.left,value);
//             }else {
//                 return this.search(root.right, value);
//             }
//         }
//     }

//     PreOrder(root){
//         if(root){
//             console.log(root.value);
//             this.PreOrder(root.left);
//             this.PreOrder(root.right);
//         }
//     }

//     InOrder(root){
//         if(root){
//             this.InOrder(root.left)
//             console.log(root.value);
//             this.InOrder(root.right);
//         }
//     }

//     PostOrder(root){
//         if(root){
//             this.PostOrder(root.left);
//             this.PostOrder(root.right);
//             console.log(root.value);
//         }
//     }

//     // BFS
//     levelOrder(){
//         // Use the optimised queue implementation
//         const queue = []
//         queue.push(this.root);
//         while(queue.length){
//             let curr = queue.shift();
//             console.log(curr.value);
//             if(curr.left){
//                 queue.push(curr.left);
//             }
//             if(curr.right){
//                 queue.push(curr.right)
//             }
//         }
//     }
// }

// const bst = new BinarySearchTree()

// console.log("binary is empty or not:", bst.isEmpty());

// bst.insert(10);
// bst.insert(5);
// bst.insert(15);
// bst.insert(3);
// bst.insert(7);

// console.log(bst.search(bst.root,10));
// console.log(bst.search(bst.root,54656));
// console.log(bst.search(bst.root,15));
// console.log(bst.search(bst.root,3));
// console.log(bst.search(bst.root,7));

// console.log("preOrder:");
// bst.PreOrder(bst.root);

// console.log("inOrder:");
// bst.InOrder(bst.root);

// console.log('postOrder:');
// bst.PostOrder(bst.root);

// console.log("BFS:")
// bst.levelOrder()


// ====================================================================================================================

// min & max in Binary search tree
// ---------------------------------------------
// class Node {
//     constructor(value) {
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }

// class BinarySearchTree {
//     constructor() {
//         this.root = null;
//     }

//     isEmpty(){
//         return this.root === null;
//     }

//     insert(value){
//         const newNode = new Node(value);
//         if(this.isEmpty()){
//             this.root = newNode;
//         }else{
//             this.insertNode(this.root, newNode);
//         }
//     }

//     insertNode(root,newNode){
//         if(newNode.value < root.value){
//             if(root.left === null){
//                 root.left = newNode
//             }else {
//                 return this.insertNode(root.left, newNode);
//             }
//         }else {
//             if(root.right === null){
//                 root.right = newNode;
//             }else {
//                 return this.insertNode(root.right,newNode);
//             }
//         }
//     }

//     search(root,value){
//         if(!root){
//             return false;
//         }else {
//             if(root.value === value){
//                 return true;
//             }else if(value < root.value){
//                 return this.search(root.left,value);
//             }else{
//                 return this.search(root.right, value);
//             }
//         }
//     }

//     PreOrder(root){
//         if(root){
//             console.log(root.value);
//             this.PreOrder(root.left);
//             this.PreOrder(root.right);
//         }
//     }

//     InOrder(root){
//         if(root){
//             this.InOrder(root.left);
//             console.log(root.value);
//             this.InOrder(root.right);
//         }
//     }

//     PostOrder(root){
//         if(root){
//             this.PostOrder(root.left);
//             this.PostOrder(root.right);
//             console.log(root.value);
//         }
//     }

//     levelOrder(){
//         if(!this.root){
//             return null;
//         }else {
//             let queue = [];
//             queue.push(this.root)
//             while(queue.length){
//                 let curr = queue.shift();
//                 console.log(curr.value);
//                 if(curr.left){
//                     queue.push(curr.left);
//                 }
//                 if(curr.right){
//                     queue.push(curr.right);
//                 }
//             }
//         }
//     }

//     min(root){
//         if(!root.left){
//             return root.value;
//         }else{
//             return this.min(root.left);
//         }
//     }

//     max(root){
//         if(root.right === null){
//             return root.value;
//         }else{
//             return this.max(root.right)
//         }
//     }
// }

// const bst = new BinarySearchTree();

// console.log("is it empty : ", bst.isEmpty());

// bst.insert(10);
// bst.insert(5);
// bst.insert(15);
// bst.insert(3);
// bst.insert(7);

// console.log(bst.search(bst.root,10));
// console.log(bst.search(bst.root,5));
// console.log(bst.search(bst.root,15));
// console.log(bst.search(bst.root,3));
// console.log(bst.search(bst.root,7));
// console.log(bst.search(bst.root,54));

// console.log("preOrder :");
// bst.PreOrder(bst.root);

// console.log("InOrder :");
// bst.InOrder(bst.root);

// console.log("PostOrder :");
// bst.PostOrder(bst.root)

// console.log("BFS :");
// bst.levelOrder();

// console.log("Min Value :", bst.min(bst.root));
// console.log("Max Value :", bst.max(bst.root));


// ====================================================================================================================

// Delete node in Binary tree
// ---------------------------------------------
// class Node {
//     constructor(value) {
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }

// class BinarySearchTree {
//     constructor() {
//         this.root = null;
//     }

//     isEmpty() {
//         return this.root === null;
//     }

//     insert(value) {
//         const newNode = new Node(value);
//         if (this.isEmpty()) {
//             this.root = newNode;
//         } else {
//             this.insertNode(this.root, newNode);
//         }
//     }

//     insertNode(root, newNode) {
//         if (newNode.value < root.value) {
//             if (root.left === null) {
//                 root.left = newNode
//             } else {
//                 return this.insertNode(root.left, newNode);
//             }
//         } else {
//             if (root.right === null) {
//                 root.right = newNode;
//             } else {
//                 return this.insertNode(root.right, newNode);
//             }
//         }
//     }

//     search(root, value) {
//         if (!root) {
//             return false;
//         } else {
//             if (root.value === value) {
//                 return true;
//             } else if (value < root.value) {
//                 return this.search(root.left, value);
//             } else {
//                 return this.search(root.right, value);
//             }
//         }
//     }

//     PreOrder(root) {
//         if (root) {
//             console.log(root.value);
//             this.PreOrder(root.left);
//             this.PreOrder(root.right);
//         }
//     }

//     InOrder(root) {
//         if (root) {
//             this.InOrder(root.left);
//             console.log(root.value);
//             this.InOrder(root.right);
//         }
//     }

//     PostOrder(root) {
//         if (root) {
//             this.PostOrder(root.left);
//             this.PostOrder(root.right);
//             console.log(root.value);
//         }
//     }

//     levelOrder() {
//         if (!this.root) {
//             return null;
//         } else {
//             let queue = [];
//             queue.push(this.root)
//             while (queue.length) {
//                 let curr = queue.shift();
//                 console.log(curr.value);
//                 if (curr.left) {
//                     queue.push(curr.left);
//                 }
//                 if (curr.right) {
//                     queue.push(curr.right);
//                 }
//             }
//         }
//     }

//     min(root) {
//         if (!root.left) {
//             return root.value;
//         } else {
//             return this.min(root.left);
//         }
//     }

//     max(root) {
//         if (root.right === null) {
//             return root.value;
//         } else {
//             return this.max(root.right)
//         }
//     }

//     delete(value){
//         this.root = this.deleteNode(this.root,value)
//     }

//     deleteNode(root,value){
//         if(root === null){
//             return root
//         }
//         if(value < root.value){
//             root.left = this.deleteNode(root.left, value);
//         }else if(value > root.value){
//             root.right = this.deleteNode(root.right, value);
//         }else {
//             if(!root.left && !root.right){
//                 return null;
//             }
//             if(!root.left){
//                 return root.right
//             }
//             if(!root.right){
//                 return root.left;
//             }

//             root.value = this.min(root.right);
//             root.right = this.deleteNode(root.right, root.value);
//         }
//         return root
//     }
// }

// const bst = new BinarySearchTree();

// console.log("is it empty : ", bst.isEmpty());

// bst.insert(10);
// bst.insert(5);
// bst.insert(15);
// bst.insert(3);
// bst.insert(7);

// console.log(bst.search(bst.root, 10));
// console.log(bst.search(bst.root, 5));
// console.log(bst.search(bst.root, 15));
// console.log(bst.search(bst.root, 3));
// console.log(bst.search(bst.root, 7));
// console.log(bst.search(bst.root, 54));

// console.log("preOrder :");
// bst.PreOrder(bst.root);

// console.log("InOrder :");
// bst.InOrder(bst.root);

// console.log("PostOrder :");
// bst.PostOrder(bst.root)

// console.log("BFS :");
// bst.levelOrder();

// console.log("Min Value :", bst.min(bst.root));
// console.log("Max Value :", bst.max(bst.root));

// bst.delete(34);
// console.log("after deleting the order :");
// bst.levelOrder();


// ====================================================================================================================



