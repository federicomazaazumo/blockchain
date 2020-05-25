const Block = require("../classes/Block")
const Blockchain = require("../classes/Blockchain")

const path = require("path");
const fastcsv = require('fast-csv');
const fileSystem = require("fs");

const filePath = path.join(__dirname, "../shared/atix.csv");
const atixchain = new Blockchain()

atixchain.startGenesisBlock()

const readFile = () => {
    const fileStream = fileSystem.createReadStream(filePath)

    fileStream.pipe(fastcsv.parse({ headers: false }))
    .on('error', error => console.error(error))
    .on('data', row => console.log(row))
    .on('end', rowCount => console.log(`Parsed ${rowCount} rows`));
};

const writeFile = (data) => {
    const fileStream = fileSystem.createWriteStream(filePath)
    const formater = fastcsv.format({ headers: false })

    const line = atixchain.addBlock(new Block(atixchain.length + 1, Date.now(), data))

    formater.pipe(fileStream).on('end', process.exit);
    formater.write([line]);
    formater.end();
};

module.exports = { readFile, writeFile };
