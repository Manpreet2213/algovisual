class cell {
    constructor(num,i,j) {
        this.i = i;
        this.j = j;
        this.num = num;
        this.neighbour = [];
        this.visited = false;
    }
    createCell(){
        return `
        <div id = "cell${this.num}"></div>
    `;
    }
    chngeClr(brdr,jbrdr,clr){
        var clss = "cell"+this.num;
        var doc = document.getElementById(clss);
        doc.style.backgroundColor = clr;
        if(this.i == brdr && this.j < jbrdr){
            var cln = this.num+1;
            var clss = "cell"+cln;
            var doc = document.getElementById(clss);
            doc.style.borderLeftColor = clr;
        }else if(this.i == brdr){
            doc.style.borderLeftColor = clr;
        }else if(this.i > brdr){
            var cln = this.num-65;
            var clss = "cell"+cln;
            var doc = document.getElementById(clss);
            doc.style.borderBottomColor = clr;
        }else if(this.i < brdr){
            var cln = this.num;
            var clss = "cell"+cln;
            var doc = document.getElementById(clss);
            doc.style.borderBottomColor = clr;
        }       
    }
}


