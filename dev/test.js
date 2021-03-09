const Blockchain = require('./blockchain');
const bitcoin = new Blockchain();
const bitcoin2 = new Blockchain();

bitcoin.createNewBlock(555,"@00000","@222");
bitcoin.createNewBlock(556,"@00100","@232");
bitcoin.createNewBlock(575,"@01000","@223");
console.log(bitcoin);
console.log(bitcoin2);