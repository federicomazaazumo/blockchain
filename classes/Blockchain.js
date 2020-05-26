const Block = require("../classes/Block");

class Blockchain {
  constructor() {
    this.blockchain = [this.startGenesisBlock()];
    this.difficulty = 2;
  }

  addBlock(block) {
    block.precedingHash = this.obtainLatestBlock().hash;
    block.proofOfWork(this.difficulty);

    this.blockchain.push(Block);

    return [block.hash, block.data, block.nonce];
  }

  checkChainValidity() {
    for (let index = 1; index < this.blockchain.length; index++) {
      const currentBlock = this.blockchain[index];
      const precedingBlock = this.blockchain[index - 1];

      if (currentBlock.hash !== currentBlock.computeHash()) return false;
      if (currentBlock.precedingHash !== precedingBlock.hash) return false;
    }

    return true;
  }

  obtainLatestBlock() {
    return this.blockchain[this.blockchain.length - 1];
  }

  startGenesisBlock() {
    return new Block(
      0,
      Date.now(),
      "Atix Labs Blockchain Line Logger Implementation",
      "0"
    );
  }
}

module.exports = Blockchain;
