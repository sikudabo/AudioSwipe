const express = require('express');
const router = express.Router();
const nodeMailer = require('nodemailer');
const { mailOptions } = require('./constants');

const transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'placeholder',
        pass: 'placeholder',
    }
});

router.route('/api/forgotLogin').post((req, res) => {
    const { email } = req.body;
    let options = mailOptions;
    options.text = email;

    res.status(200).json({ isSuccess: true, message: 'We will be in touch soon!' });

   /* try {
        transporter.sendMail(options, (err) => {
            if (err) {
                console.log('There was an error when a user tried to send their email to us for a lost username or password');
                res.status(500).json({ isSuccess: false, message: 'Error. Please try again!' });
                return;
            } 

            res.status(200).send({ isSuccess: true, message: 'We will reach out to you shortly' });
        });
    } catch(e) {
        console.log('There was an error when a user tried to send their email to us for a lost username or password');
        res.status(500).json({ isSuccess: false, message: 'Error. Please try again!' });
        return;
    } */
});

module.exports = router;