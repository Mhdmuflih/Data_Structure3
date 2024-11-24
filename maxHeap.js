// class MaxHeap {
//     constructor() {
//         this.heap = []
//     }

//     getPresentIndex(index) {
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

//     insert(value){
//         this.heap.push(value);
//         this.heapifyUp();
//     }

//     heapifyUp() {
//         let index = this.heap.length - 1;
//         while(this.getPresentIndex(index) >= 0 && this.heap[this.getPresentIndex(index)] < this.heap[index]){
//             this.swap(this.getPresentIndex(index), index);
//             index = this.getPresentIndex(index);
//         }
//     }

//     extractMax(){
//         if(this.heap.length === 0) {
//             return null;
//         }
//         if (this.heap.length === 1) {
//             return this.heap.pop();
//         }
//         const max = this.heap[0];
//         this.heap[0] = this.heap.pop();
//         this.heapifyDown(0);
//         return max;
//     }

//     heapifyDown(index){
//         let largest = index;
//         const leftChildIndex = this.getLeftChildIndex(index);
//         const rightChildIndex = this.getRightChildIndex(index);

//         if(leftChildIndex < this.heap.length && this.heap[leftChildIndex] > this.heap[largest]) {
//             largest = leftChildIndex;
//         }

//         if(rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[largest]) {
//             largest = rightChildIndex;
//         }

//         if(largest !== index) {
//             this.swap(index, largest);
//             this.heapifyDown(largest)
//         }
//     }
// }

// const maxHeap = new MaxHeap();

// maxHeap.insert(10);
// maxHeap.insert(5);
// maxHeap.insert(14);
// maxHeap.insert(9);
// maxHeap.insert(2);

// console.log(maxHeap.extractMax());
// console.log(maxHeap.extractMax());
// console.log(maxHeap.extractMax());
// console.log(maxHeap.extractMax());
// console.log(maxHeap.extractMax());

// ================================================================================================================

// herer using in heap sort method
// -----------------------------------
// class MaxHeap {
//     constructor() {
//         this.heap = [];
//     }

//     getPresentIndex(index) {
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

//     insert(value){
//         this.heap.push(value);
//         this.heapifyUp();
//     }

//     heapifyUp(){
//         let index = this.heap.length - 1;
//         while(this.getPresentIndex(index) >= 0 && this.heap[this.getPresentIndex(index)] < this.heap[index]){
//             this.swap(this.getPresentIndex(index), index);
//             index = this.getPresentIndex(index);
//         }
//     }

//     extraxtMax(){
//         if(this.heap.length === 0){
//             return null;
//         }
//         if(this.heap.length === 1){
//             return this.heap.pop();
//         }

//         let max = this.heap[0];
//         this.heap[0] = this.heap.pop();
//         this.heapifyDown(0);
//         return max;
//     }

//     heapifyDown(index){
//         let largest = index;
//         let leftChildIndex = this.getLeftChildIndex(index);
//         let rightChildIndex = this.getRightChildIndex(index);

//         if(leftChildIndex < this.heap.length && this.heap[leftChildIndex] > this.heap[largest]){
//             largest = leftChildIndex;
//         }
//         if(rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[largest]){
//             largest = rightChildIndex;
//         }

//         if(largest !== index){
//             this.swap(index, largest);
//             this.heapifyDown();
//         }
//     }

//     heapSort(){
//         let result = [];
//         const originalHeap = [...this.heap];

//         while(this.heap.length > 0){
//             result.push(this.extraxtMax());
//         }

//         this.heap = originalHeap;
//         return result.reverse();
//         // return result
//     }

//     display(){
//         console.log(this.heap);
//     }
// }

// const maxHeap = new MaxHeap();

// maxHeap.insert(10);
// maxHeap.insert(5);
// maxHeap.insert(15);
// maxHeap.insert(3);
// maxHeap.insert(7);

// maxHeap.display();

// console.log(maxHeap.heapSort());


// ================================================================================================================


