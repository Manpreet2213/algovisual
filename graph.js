class graph{
    constructor(i,j){
        this.i = i;
        this.j = j;
        this.adj = [];
        this.visited = false;
    }
    adjList(ad){
        this.adj.push(ad);
    }
    isVisited(visit){
        this.visited = visit;
    }
}
