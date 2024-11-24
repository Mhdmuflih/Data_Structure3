// Adjancy Metrix
// -----------------------------
// const Metrix = [
//     [0,1,0],
//     [1,0,1],
//     [0,1,0]
// ]

// console.log(Metrix[1][0]);


// ==========================================================================

// Adjancy List
// ----------------------------------
// const adjancyList = {
//     'A':['B'],
//     'B':['A','C'],
//     'C':['B']
// }

// console.log(adjancyList['A']);
// console.log(adjancyList['B']);
// console.log(adjancyList['C']);


// ==========================================================================

// graph implementaion and edge setting, vertex setting, display and edge checking
// --------------------------------------------------------------------
// class Graph {
//     constructor() {
//         this.adjacencyList = {}
//     }

//     addVertex(vertex){
//         if(!this.adjacencyList[vertex]){
//             this.adjacencyList[vertex] = new Set();
//         }
//     }

//     addEdge(vertex1, vertex2) {
//         if (!this.adjacencyList[vertex1]) {
//             this.addVertex(vertex1);
//         }
//         if (!this.adjacencyList[vertex2]) {
//             this.addVertex(vertex2);
//         }
//         this.adjacencyList[vertex1].add(vertex2);
//         this.adjacencyList[vertex2].add(vertex1);
//     }

//     hasEdge(vertex1,vertex2){
//         return (
//             this.adjacencyList[vertex1].has(vertex2) &&
//             this.adjacencyList[vertex2].has(vertex1)
//         )
//     }
    
//     display(){
//         for(let vertex in this.adjacencyList){
//             console.log(vertex + "->" + [...this.adjacencyList[vertex]]);
//         }
//     }
// }

// const graph = new Graph();

// graph.addVertex('A');
// graph.addVertex('B');
// graph.addVertex('C');

// graph.addEdge('A','B');
// graph.addEdge('B','C');

// graph.display();

// console.log(graph.hasEdge('A','B'));
// console.log(graph.hasEdge('A','C'));


// ==========================================================================

// graph remove the edge and remove the vertex in the graph
// --------------------------------------------------------------------
// class Graph {
//     constructor() {
//         this.adjacencyList = {};
//     }

//     addVertex(vertex){
//         if(!this.adjacencyList[vertex]){
//             this.adjacencyList[vertex] = new Set();
//         }
//     }

//     addEdge(vertex1,vertex2){
//         if(!this.adjacencyList[vertex1]){
//             this.addVertex(vertex1)
//         }
//         if(this.adjacencyList[vertex2]){
//             this.addVertex(vertex2)
//         }
//         this.adjacencyList[vertex1].add(vertex2);
//         this.adjacencyList[vertex2].add(vertex1);
//     }

//     removeEdge(vertex1,vertex2){
//         this.adjacencyList[vertex1].delete(vertex2);
//         this.adjacencyList[vertex2].delete(vertex1);
//     }

//     removeVertex(vertex){
//         if(!this.adjacencyList[vertex]){
//             return
//         }
//         for(let adjacentVertex of this.adjacencyList[vertex]){
//             this.removeEdge(vertex, adjacentVertex);
//         }
//         delete this.adjacencyList[vertex]
//     }

//     hasEdge(vertex1,vertex2){
//         return (
//             this.adjacencyList[vertex1].has(vertex2) &&
//             this.adjacencyList[vertex2].has(vertex1)
//         )
//     }

//     display(){
//         for(let vertex in this.adjacencyList){
//             console.log(vertex + "->" + [...this.adjacencyList[vertex]])
//         }
//     }
// }

// const graph = new Graph();

// graph.addVertex("A");
// graph.addVertex("B");
// graph.addVertex("C");

// graph.addEdge("A","B");
// graph.addEdge("B","C");

// graph.display();

// console.log(graph.hasEdge("A","B"));
// console.log(graph.hasEdge("A","C"));
// console.log("remove the edes :");
// graph.removeEdge("A","B");
// graph.display();

// console.log("remove the vertex :");
// graph.removeVertex('A');
// graph.display();


// ==========================================================================

