const express = require('express');
const router = express.Router();
const { ArtistModel } = require('../db/models');

router.route('/api/update-artist').post(async (req, res) => {
    const {
        artistName,
        artistType,
        bio,
        city,
        email,
        firstName,
        genres,
        lastName,
        password,
        spotifyLink,
        soundcloudLink,
        state,
        username,
        youtubeLink,
        _id,
    } = req.body;

    const splitGenres = genres.split(',');

    try {
        await ArtistModel.updateOne({ _id }, { 
            $set: {
                artistName,
                artistType,
                bio,
                city,
                email,
                firstName,
                genres: splitGenres,
                lastName,
                password,
                spotifyLink,
                soundcloudLink,
                state,
                username,
                youtubeLink,
            },
        });

        const updatedArtist = await ArtistModel.findOne({ _id }).exec();

        res.status(200).json({ isSuccess: true, message: 'Settings successfully updated!', updatedArtist: updatedArtist });

    } catch(e) {
        console.log('There was an error updating an artist!!!!!!!!!');
        console.log(e.message);
        res.status(500).json({ error: e.message, isSuccess: false, message: 'There was an error updating your profile. Please try again!' });
    }

});

module.exports = router;