// class MinHeap {
//     constructor() {
//         this.heap = [];
//     }

//     getPresentIndex(index) {
//         return Math.floor((index - 1) / 2);
//     }

//     getLeftChildIndex(index) {
//         return 2 * index + 1;
//     }

//     getRightChildIndex(index){
//         return 2 * index + 2;
//     }

//     swap(index1, index2) {
//         [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]]
//     }

//     insert(value){
//         this.heap.push(value);
//         this.heapifyUp();
//     }

//     heapifyUp() {
//         let index = this.heap.length - 1;
//         while(this.getPresentIndex(index) >= 0 && this.heap[this.getPresentIndex(index)] > this.heap[index]) {
//             this.swap(this.getPresentIndex(index), index);
//             index = this.getPresentIndex(index)
//         }
//     }

//     extractMin(){
//         if(this.heap.length === 0){
//             return null;
//         }
//         if(this.heap.length === 1){
//             return this.heap.pop();
//         }
//         const min = this.heap[0];
//         this.heap[0] = this.heap.pop();
//         this.heapifyDown(0);
//         return min;
//     }

//     heapifyDown(index) {
//         let smallest = index;
//         const leftChildIndex = this.getLeftChildIndex(index);
//         const rightChildIndex = this.getRightChildIndex(index);

//         if(leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallest]){
//             smallest = leftChildIndex;
//         }

//         if(rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallest]){
//             smallest = rightChildIndex;
//         }

//         if(smallest !== index) {
//             this.swap(index, smallest);
//             this.heapifyDown(smallest);
//         }
//     }
// }

// const minheap = new MinHeap();

// minheap.insert(10);
// minheap.insert(5);
// minheap.insert(14);
// minheap.insert(9);
// minheap.insert(2);

// console.log(minheap.extractMin());
// console.log(minheap.extractMin());
// console.log(minheap.extractMin());
// console.log(minheap.extractMin());
// console.log(minheap.extractMin());


// ============================================================================================

// here using in heap sort method
// -----------------------------------
// class MinHeap {
//     constructor() {
//         this.heap = [];
//     }

//     getPresentIndex(index){
//         return Math.floor((index - 1) / 2);
//     }

//     getLeftChildIndex(index){
//         return 2 * index + 1;
//     }

//     getRightChildIndex(index){
//         return 2 * index + 2;
//     }

//     swap(index1, index2){
//         [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
//     }

//     insert(value) {
//         this.heap.push(value);
//         this.heapifyUp();
//     }

//     heapifyUp(){
//         let index = this.heap.length - 1;
//         while(this.getPresentIndex(index) >= 0 && this.heap[this.getPresentIndex(index)] > this.heap[index]){
//             this.swap(this.getPresentIndex(index), index);
//             index = this.getPresentIndex(index);
//         }
//     }

//     extractMin(){
//         if(this.heap.length === 0){
//             return null;
//         }
//         if(this.heap.length === 1){
//             return this.heap.pop();
//         }
//         let min = this.heap[0];
//         this.heap[0] = this.heap.pop();
//         this.heapifyDown(0);
//         return min;
//     }

//     heapifyDown(index){
//         let smallest = index
//         let leftChildIndex = this.getLeftChildIndex(index);
//         let rightChildIndex = this.getRightChildIndex(index);

//         if(leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallest]){
//             smallest = leftChildIndex;
//         }
//         if(rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallest]){
//             smallest = rightChildIndex
//         }

//         if(smallest !== index){
//             this.swap(index, smallest);
//             this.heapifyDown();
//         }
//     }

//     HeapSort(){
//         let result = []
//         const originalHeap = [...this.heap];
//         while(this.heap.length > 0){
//             result.push(this.extractMin());
//         }
//         this.heap = originalHeap;
//         return result;
//     }

//     display(){
//         console.log(this.heap);
//     }
// }

// const minheap = new MinHeap();

// minheap.insert(10);
// minheap.insert(5);
// minheap.insert(15);
// minheap.insert(3);
// minheap.insert(7);

// minheap.display();
// console.log(minheap.HeapSort());

// // console.log(minheap.HeapSort());



