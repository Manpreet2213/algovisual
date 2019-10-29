let graphList = [];
let stack = [];
let elem = "";
let grid = [];
let num = 1;
var container = document.getElementById("container");
for(var i = 0;i<25;i++){
    var col = [];
    for(var j = 0;j<65;j++){
        col[j] = new cell(num,i,j);
        elem += col[j].createCell();
        num++;
    }
    grid[i] = col;
    col = [];
}
for(var i = 0;i<25;i++){
    for(var j = 0;j<65;j++){
        if((i-1) != -1 ){
            grid[i][j].neighbour.push(grid[i-1][j]);
        }
        if((j+1) != 65)   {
            grid[i][j].neighbour.push(grid[i][j+1]);
        }
        if((i+1) != 25 ){
            grid[i][j].neighbour.push(grid[i+1][j]);
        }
        if((j-1) != -1){
            grid[i][j].neighbour.push(grid[i][j-1]);
        }
    }
}
container.innerHTML += elem;


dfs(0,0);
console.log(stack.length);





