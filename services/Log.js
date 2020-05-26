const Block = require("../classes/Block")
const Blockchain = require("../classes/Blockchain")

const fastcsv = require('fast-csv');
const fileSystem = require("fs");
const path = require("path");
const utilities = require('util');

const filePath = path.join(__dirname, "../shared/atix.csv");
const atixchain = new Blockchain()

atixchain.startGenesisBlock()

const writeFile = (data) => {
    try { 
        const stream = fileSystem.createWriteStream(filePath, { flags: 'a', includeEndRowDelimiter: true })
    const formater = fastcsv.format({ headers: true })

    const line = atixchain.addBlock(new Block(atixchain.length + 1, Date.now(), data))

    formater.pipe(stream).on('end', process.exit);
    formater.write([line]);
    formater.end();
} catch(error) { 
    console.log(error) 
}
};

module.exports = { writeFile };
