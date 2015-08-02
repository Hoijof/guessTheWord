function KeyboardInput(game, blockManager) {
    this.game = game;
    this.blockManager = blockManager;
}

KeyboardInput.prototype.parseInput = function(input) {
    var found = false;
    this.blockManager.blockGrids.forEach(function (blockGrid) {
        if (found) return;
        blockGrid.blocks.forEach(function(block) {
            if (found) return;
            if (block.answer == input) {
                block.destroy();
                blockGrid.blocks[block.id] = undefined;
                found = true;
            }
        })
    });
    return found;
};