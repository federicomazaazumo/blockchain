import Block from "./Block";

class Blockchain {
  constructor() {
    this.blockchain = [this.startGenesisBlock()];
  }

  addBlock(Block) {
    block.precedingHash = this.obtainLatestBlock().hash;
    block.proofOfWork(this.difficulty);

    this.blockchain.push(Block);
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

  computeHash() {
    return SHA256(
      this.index +
        this.precedingHash +
        this.timestamp +
        JSON.stringify(this.data) +
        this.nonce
    ).toString();
  }

  obtainLatestBlock() {
    return this.blockchain[this.blockchain.length - 1];
  }

  proofOfWork(difficulty) {
    while (
      this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")
    ) {
      this.nonce++;
      this.hash = this.computeHash();
    }
  }

  startGenesisBlock() {
    return new Block(0, "01/01/2020", "Initial Block in the Chain", "0");
  }
}

export default Blockchain;
