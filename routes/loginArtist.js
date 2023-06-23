const express = require('express');
const router = express.Router();
const { ArtistModel } = require('../db/models');

router.route('/api/loginArtist').post(async (req, res) => {
    const { username, password } =  req.body;

    try {
        const isAuthenticated = await ArtistModel.findOne({ password, username }).exec();

        if (isAuthenticated) {
            res.status(200).json({ isAuthenticated: true , message: 'Successfully Logged in!', user: isAuthenticated });
            return;
        }

        res.status(200).json({ isAuthenticated: false, message: 'Incorrect username or password' });
        return;
    } catch(e) {
        console.log('Error logging in artist:', e.message);
        res.status(500).json({ isAuthenticated: false, message: 'Error! Please try again' });
        throw new Error(e);
        return;
    }
});

module.exports = router;