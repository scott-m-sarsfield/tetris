
function Vector(x,y){
    this.x = x;
    this.y = y;
}

Vector.prototype.setVect = function setVect(nx,ny){
    this.x = nx;
    this.y = ny;
};

Vector.prototype.pos = function pos(map){
    return this.y * map.x + this.x;
};

Vector.prototype.left = function left(){
    this.x--;
};

Vector.prototype.right = function right(){
    this.x++;
};

Vector.prototype.up = function up(){
    this.y--;
};

Vector.prototype.down = function down(){
    this.y++;
};

Vector.prototype.rotateLeftAbout = function rotateLeftAbout(origin){
    var dX = this.y - origin.y;
    var dY = this.x - origin.x;

    this.x = origin.x + dX;
    this.y = origin.y - dY;
};

Vector.prototype.rotateRightAbout = function rotateRightAbout(origin){
    var dX = this.y - origin.y;
    var dY = this.x - origin.x;

    this.x = origin.x - dX;
    this.y = origin.y + dY;
};

Vector.prototype.toString = function toString(){
    var addText = "Vector (";
    addText += this.x + ",";
    addText += this.y + ")";
    return addText;
};

module.exports = Vector;
