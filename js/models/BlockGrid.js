function BlockGrid(id, position){
    this.id = id;
    this.blocks = [];
    this.timeSinceLastBlock = 0;
    this.position = position;
}

BlockGrid.prototype.addBlock = function() {
    return new Block(this.id);
};