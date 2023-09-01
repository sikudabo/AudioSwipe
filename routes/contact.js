const express = require('express');
const router = express.Router();
const { mailOptions } = require('./constants');
const { emailSender } = require('../utils');

router.route('/api/contact').post((req, res) => {
    const { email, message } = req.body;
    let options = mailOptions;
    options.subject = "General Contact";
    options.text = `Message from ${email} \n ${message}`;
    emailSender.sendMail(options, (err) => {
        if (err) {
            console.log('There was an error when a user tried to send their email to us for a lost username or password');
            res.status(500).json({ isSuccess: false, message: "There was an error sending that message. Please try again!" });
            return;
        } 

        res.status(200).send({ isSuccess: true, message: 'Thank you for reaching out. We will be in contact with you soon!' });
    });
});

module.exports = router;