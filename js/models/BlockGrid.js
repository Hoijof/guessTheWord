function BlockGrid(id, position){
    this.id = id;
    this.blocks = [];
    this.timeSinceLastBlock = 0;
    this.position = position;
}

BlockGrid.prototype.addBlock = function() {
    var block = new Block(this.id);
    this.blocks.push(block);

    return block;
};