const express = require('express');
const router = express.Router();
const { FanModel } = require('../db/models');

router.route('/api/loginFan').post(async (req, res) => {
    const { email, password } = req.body;
    const isValid = await FanModel.findOne({ email, password }).exec();

    try {
        const isValid = await FanModel.findOne({ email, password }).exec();

        console.log(isValid);

        if (!isValid) {
            res.status(200).json({ message: 'Invalid username or password.', success: false});
            return;
        }

        res.status(200).json({ message: 'Welcome back!', success: true, user: isValid });
    } catch(e) {
        console.log('There was an error attempting to log a fan in.');
        console.log(e.message);
        res.status(200).json({ message: 'There was an error logging you in. Please try again!', success: false});
        return;
    }
});

module.exports = router;