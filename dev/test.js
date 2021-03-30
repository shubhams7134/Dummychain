const Blockchain = require('./blockchain');
const bitcoin = new Blockchain();
// const bitcoin2 = new Blockchain();

// bitcoin.createNewBlock(555,"@00000","@222");
// bitcoin.createNewBlock(556,"@00100","@232");
// bitcoin.createNewBlock(575,"@01000","@223");
// bitcoin.createNewTransaction(1000,"Shubham","Vivek");
// bitcoin.createNewBlock(575,"@01000","@223");
const previousBlockHash='58511abe2d7fa1a6fd51a140b474baef65a8aa91a800d01a7b7541716d1eebe1';
const currentBlockData= [
    {
        amount: 101,
        sender:'Shubham',
        recipient:'Ram'
    },
    {
        amount: 102,
        sender:'Shubham',
        recipient:'Shyam'
    },
    {
        amount: 102,
        sender:'Shubham',
        recipient:'Abdul'
    }
];
console.log(bitcoin.proofOfWork(previousBlockHash,currentBlockData));
console.log(bitcoin.hashBlock(previousBlockHash,currentBlockData,32644));
console.log(bitcoin);