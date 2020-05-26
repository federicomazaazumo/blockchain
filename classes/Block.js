const SHA256 = require("crypto-js/sha256");

class Block {
  constructor(index, timestamp, data, precedingHash = " ") {
    this.data = data;
    this.hash = this.computeHash();
    this.index = index;
    this.nonce = 0;
    this.precedingHash = precedingHash;
    this.timestamp = timestamp;
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

  proofOfWork(difficulty) {
    while (
      this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")
    ) {
      this.nonce++;
      this.hash = this.computeHash();
    }
  }
}

module.exports = Block;
