const fs = require('fs');
const router = require('express').Router();
// const contract = require('../utils/contract');

const Contract = require('web3-eth-contract');

Contract.setProvider('http://127.0.0.1:8545');

const votingAbi = JSON.parse(fs.readFileSync('./build/contracts/VotingExample.json'));

const abi = votingAbi.abi;

const contract = new Contract(abi, '0x0F50D88944E006B106ef0F6A65930Efb99feBf48');

router.route('/api/createElection').post(async (req, res) => {
    const { candidates: newCandidates, electionId, electionName } = req.body;
    console.log('The new candidates are:', newCandidates.length);
    const candidates = [
        {
            name: 'Ronny Morrell',
            id: '1',
            votes: 0,
            voters: [],
        },
        {
            name: 'Brad Luzater',
            id: '2',
            votes: 0,
            voters: [],
        },
        {
            name: 'Kyle Alumbaugh',
            id: '3',
            votes: 1,
            voters: [],
        },
    ];
    const result = await contract.methods.makeNewElection(electionId, electionName, newCandidates).send({ from: '0x0A41C28cf5812418134EbD9b34F2F36B6E9AC6A8', gas: 6721975, gasPrice: '20000000000' }, (error, result) => {
        if (error) {
            res.status(500).send(error);
            return error.message;
        }
        return result;
    });

    if (typeof result.events !== 'undefined' && typeof result.events.ElectionExists !== 'undefined') {
        res.status(405).send('That election already exists');
        return;
    }
    res.status(200).send('successfully created election');
    /* const response = await contract.methods.makeNewElection(electionId, electionName, newCandidates).send({ from: '0x0A41C28cf5812418134EbD9b34F2F36B6E9AC6A8', gas: 6721975, gasPrice: '20000000000' }, (err, result) => {
        if (err) {
            console.log('Error creating an election:', err);
            res.status(500).send('There was an error!');
            return;
        }
        return response;
    }); */
    /* const response = await contract.methods.getVoteCount('1', '2').call({ from: '0x0A41C28cf5812418134EbD9b34F2F36B6E9AC6A8', gas: 6721975, gasPrice: '20000000000' }, (error, result) => {
        if (error) {
            res.status(500).send(error.message);
            return error.message;
        }
        return result;
    }); */
    // res.status(200).send({ success: 'success' });
    // console.log('The response is:', response);
});

module.exports = router;