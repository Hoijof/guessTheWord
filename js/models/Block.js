function Block(blockGridId, id) {
    var value = this.getRandomValue();
    this.id = id;
    this.blockGridId = blockGridId;
    this.text = value[0];
    this.answer = value[1];
    this.element = null;

}

Block.prototype.getRandomValue = function() {
    return DICTIONARY[Math.floor(Math.random() * DICTIONARY.length)];
};

Block.prototype.destroy = function() {
    this.element.destroy();
};
