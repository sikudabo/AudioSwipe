const express = require('express');
const router = express.Router();
const startDb = require('../db/db');
const uploads = require('../db/uploads');
const { ArtistModel } = require('../db/models');

router.route('/api/saveArtist').put(uploads.single('avatar'), async (req, res) => {
    await startDb();
    const {
        artistType,
        firstName,
        lastName,
        stageName,
        username,
        password,
        bio,
        birthDate,
        email,
        phone,
        city,
        state,
        genres,
        spotifyLink,
        youtubeLink,
        userType,
        soundcloudLink,
    } = req.body;

    const isUsernameTaken = await ArtistModel.findOne({ username: username})

    if (isUsernameTaken) {
        res.status(401).json({ isSuccess: false, message: 'Username taken' });
        return;
    }

    try {
        const newArtist = {
            avatar: req.files.filename,
            artistType,
            firstName,
            lastName,
            stageName,
            username,
            password,
            bio,
            birthDate,
            email,
            phone,
            city,
            state,
            genres,
            spotifyLink,
            youtubeLink,
            soundcloudLink,
            fans: [],
            upvotes: [],
            downvotes: [],
            userType,
        }

        await ArtistModel.insertOne(newArtist);

        const user = await ArtistModel.findOne({ username: username });

        res.status(200).json({
            isSuccess: true,
            user,
        });
    
    } catch(e) {
        console.log('Error saving a new artist to the DB!!!!');
        res.status(500).json({ isSuccess: false, message: 'Error saving the artist into the db on PUT request.'});
        return;
    }
});


module.exports = router;