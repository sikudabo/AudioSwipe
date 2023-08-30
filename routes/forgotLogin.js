const express = require('express');
const router = express.Router();
const nodeMailer = require('nodemailer');
const { mailOptions } = require('./constants');
const { emailSender } = require('../utils/emailSender');

router.route('/api/forgotLogin').post((req, res) => {
    const { email } = req.body;
    let options = mailOptions;
    options.text = email;

    try {
        emailSender.sendMail(options, (err) => {
            if (err) {
                console.log('There was an error when a user tried to send their email to us for a lost username or password');
                res.status(500).json({ isSuccess: false, message: 'Error. Please try again!' });
                return;
            } 

            res.status(200).send({ isSuccess: true, message: 'We will be in touch within 24 hours so that you can get logged in! Check your email today.' });
        });
    } catch(e) {
        console.log('There was an error when a user tried to send their email to us for a lost username or password');
        res.status(500).json({ isSuccess: false, message: 'Error. Please try again!' });
        return;
    }
});

module.exports = router;