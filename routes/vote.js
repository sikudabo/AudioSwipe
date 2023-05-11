const router = require('express').Router();
const contract = require('../utils/contract');

router.route('/api/vote').post(async (req, res) => {
    const { candidateId, voterId, electionId, votedFor } = req.body;
    const result = await contract.addNewVote(electionId, voterId, votedFor, candidateId).send({ from: '0x0A41C28cf5812418134EbD9b34F2F36B6E9AC6A8e', gas: 6721975, gasPrice: '20000000000' }, (err, response) => {
        if (err) {
            res.status(500).send(err.message);
        }

        console.log('The response was:', response);
        return response;
    });

    res.status(200).send(result);
});

module.exports = router;