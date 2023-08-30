const express = require('express');
const router = express.Router();
const { mailOptions } = require('./constants');
const { emailSender } = require('../utils');

router.route('/api/general-contact').post((req, res) => {
    const { email, subject, text } = req.body;
    const formattedText = `Message from ${email} \n${text}`;
    let options = mailOptions;
    options.text = formattedText;
    options.subject = subject;
        emailSender.sendMail(options, (err) => {
            if (err) {
                console.log('Message successfully sent!');
                res.status(500).json({ isSuccess: false, message: "There was an error sending that message! Please try again." });
                return;
            } 

            res.status(200).send({ isSuccess: true, message: 'We will be in touch within 24 hours so that you can get logged in! Check your email today.' });
        });
});

module.exports = router;