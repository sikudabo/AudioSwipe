const express = require('express');
const router = express.Router();


router.route('/api/test').get(async (req, res) => {
    const data = {
        name: 'Simeon',
        age: 31,
        hobbies: ['Programming', 'Football', 'Trivia', 'Hunting'],
    };

    res.status(200).json({ user: data });
});

module.exports = router;