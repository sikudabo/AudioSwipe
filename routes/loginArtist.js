const express = require('express');
const router = express.Router();
const { ArtistModel } = require('../db/models');

router.route('/api/loginArtist').post(async (req, res) => {
    const { username, password } =  req.body;

    try {
        const isAuthenticated = await ArtistModel.findOne({ password, username }).exec();

        if (isAuthenticated) {
            res.status(200).json({ isAuthenticated: true , user: isAuthenticated });
            return;
        }

        res.status(401).json({ isAuthenticated: false, message: 'Incorrect username or password' });
        return;
    } catch(e) {
        console.log('Error logging in artist:', e.message);
        throw new Error(e);
    }
});