const express = require('express');
const router = express.Router();


router.route('/api/test').get(async (req, res) => {
    const data = [
        {
            name: "Simeon",
            age: 30,
        },
        {
            name: "Jackie",
            age: 40,
        },
        {
            name: "Terry",
            age: 50,
        },
    ];

    res.status(200).json({ data: data });
});

module.exports = router;