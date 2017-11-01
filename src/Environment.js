function Environment(dimx,dimy){

    this.x = dimx;
    this.y = dimy;

    this.Blocked = [];
    for(var i = 0; i < this.x*this.y; i++)
    {
        this.Blocked[i] = false;
    }
}

Environment.prototype.setEnv = function setEnv(x,y){
    this.x = x;
    this.y = y;
};

Environment.prototype.block = function block(pos){
    this.Blocked[pos] = true;
};

Environment.prototype.unblock = function unblock(pos){
    this.Blocked[pos] = false;
};

Environment.prototype.isBlocked = function isBlocked(pos){
    return this.Blocked[pos];
};

Environment.prototype.toString = function toString(){
    var addText = "Environment:\n";
    addText += "\tWidth: "+this.x+"\n";
    addText += "\tHeight: "+this.y+"\n";
    return addText;
};

Environment.prototype.genTable = function genTable(){
    var addText = "<table>";
    for(var i = 0; i < this.y; i++){
        addText += "<tr>";
        for(var j = 0; j < this.x; j++){
            addText+="<td id='cell"+(i*this.x+j)+"'></td>";
        }
        addText += "</tr>";
    }
    addText += "</table>";
    return addText;
};


module.exports = Environment;
