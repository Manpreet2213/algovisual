async function dfs(x,y){
    if(stack.length == 0){
        graphList.push(new graph(grid[x][y].i,grid[x][y].j));
        console.log(graphList);
        stack.push(grid[x][y]);
        // console.log(stack);
        grid[x][y].visited = true;
        //out.push(grid[x][y]);
        grid[x][y].chngeClr(x,y,"black");
        // console.log(out);
    }
    while(stack.length!=0){
    let count = 0;
    for(var i = 0;i<grid[x][y].neighbour.length;i++){
        if(!grid[x][y].neighbour[i].visited){
            count++;
        }
    }
    if(count>0){
        let chkne = randNeigh(x,y);
        graphList[graphList.length-1].adjList(chkne);
        graphList.push(new graph(chkne.i,chkne.j));
        console.log(graphList);
        stack.push(chkne);
        //console.log(stack[stack.length-1].num);
        //console.log(stack);
        //out.push(chkne);
        chkne.chngeClr(x,y,"black");
        // console.log(out);
        let lastElem = stack.length-1;
        await sleep(1);
        await dfs(stack[lastElem].i,stack[lastElem].j);
    }
    else{
        stack.pop(); 
        let lastElem = stack.length-1;
        document.getElementById("len").innerHTML = stack.length;
        await sleep(1);
        if(stack.length!=0)
        await dfs(stack[lastElem].i,stack[lastElem].j);
    }
    document.getElementById("len").innerHTML = stack.length;
}
}
function randNeigh(x,y){
let n = grid[x][y].neighbour[getRndInteger(0,grid[x][y].neighbour.length)];
if(!n.visited){
    n.visited = true;
    return n;
}
else{
    return randNeigh(x,y);
}
}
function getRndInteger(min, max) {
return Math.floor(Math.random() * (max - min) ) + min;
}
function sleep(ms){
return new Promise(resolve => setTimeout(resolve,ms));
}
