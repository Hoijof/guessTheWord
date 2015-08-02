function BlockManager() {
    this.blockGrids = [];
}

BlockManager.prototype.initializeBlockGrid = function(nBlocks, worldHeight) {
    var i;
    for (i = 0; i < nBlocks; i++) {
        this.blockGrids.push(new BlockGrid(i, parseInt(worldHeight/nBlocks) * i));
    }
    this.blockGrids.size = nBlocks;
};

// This takes into account the time since last block. MORE IS BETTER
BlockManager.prototype.getRandomBlockGrid = function() {
    var maximum = {
        number : 0,
        id : 0
    };

    this.blockGrids.forEach(function(blockGrid) {
        if (blockGrid.timeSinceLastBlock > maximum.number) {
            maximum.number = blockGrid.timeSinceLastBlock;
            maximum.id = blockGrid.id;
        }
    });

    return this.blockGrids[maximum.id];
};

BlockManager.prototype.addBlock = function() {
    var blockGrid = this.getRandomBlockGrid();
    return blockGrid.addBlock();
};

BlockManager.prototype.updateTimes = function() {
  this.blockGrids.forEach(function(blockGrid) {
     blockGrid.timeSinceLastBlock++;
  });
};