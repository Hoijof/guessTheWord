function KeyboardInput(game, blockManager) {
    this.game = game;
    this.blockManager = blockManager;
}

KeyboardInput.prototype.parseInput = function(input) {
    var found = false,
        blockId;

    this.blockManager.blockGrids.forEach(function (blockGrid) {
        if (found) return;
        for (blockId in blockGrid.blocks) {
            if (found) return;
            if (blockGrid.blocks[blockId].answer == input) {
                blockGrid.blocks[blockId].destroy();
                blockGrid.blocks.splice(blockId, 1);
                found = true;
            }
        }
    });
    return found;
};