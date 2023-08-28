const express = require('express');
const router = express.Router();
const { FanModel } = require('../db/models');

router.route('/api/update-fan').post(async (req, res) => {
    const { email, firstName, _id, lastName, password } = req.body;

    const splitGenres = genres.split(',');

    try {
        await FanModel.updateOne({ _id }, { 
            $set: {
                email,
                firstName,
                lastName,
                password,
            },
        });

        const updatedFan = await FanModel.findOne({ _id }).exec();

        res.status(200).json({ isSuccess: true, message: 'Settings successfully updated!', updatedFan: updatedFan });

    } catch(e) {
        console.log('There was an error updating a fant!!!!!!!!!');
        console.log(e.message);
        res.status(500).json({ error: e.message, isSuccess: false, message: 'There was an error updating your profile. Please try again!' });
    }

});

module.exports = router;