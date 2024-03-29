const express = require('express');
const router = express.Router();
const { mailOptions } = require('./constants');
const { emailSender } = require('../utils');

router.route('/api/forgot-login').post((req, res) => {
    const { email } = req.body;
    let options = mailOptions;
    options.subject = "Forgot username or password";
    options.text = email;
        emailSender.sendMail(options, (err) => {
            if (err) {
                console.log('There was an error when a user tried to send their email to us for a lost username or password');
                res.status(500).json({ isSuccess: false, message: "There was an error sending your email to us! Please try again." });
                return;
            } 

            res.status(200).send({ isSuccess: true, message: 'We will be in touch within 24 hours so that you can get logged in! Check your email today.' });
        });
});

module.exports = router;