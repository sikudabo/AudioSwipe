const fs = require('fs');
const Contract = require('web3-eth-contract');

Contract.setProvider('http://127.0.0.1:8545');

const votingAbi = JSON.parse(fs.readFileSync('./build/contracts/VotingExample.json'));

const abi = votingAbi.abi;

const contract = new Contract(abi, '0x68Ba10461f06b6Fc8c9bacbB3dAE3439C6DADF2c');

module.exports = contract.methods;