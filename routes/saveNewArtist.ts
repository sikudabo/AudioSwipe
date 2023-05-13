import { Request, Response } from 'express';
const express = require('express');
const router = express.Router();
const startDb = require('../db/db');
const uploads = require('../db/uploads');
const { ArtistModel } = require('../db/models');

router.route('/api/saveArtist').put(uploads.single('avatar'), async (req: Request, res: Response) => {
    await startDb();
    const {
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
        res.status(401).send('Username has been taken');
        return;
    }

    try {
        const newArtist = {
            avatar: (req as any).files.filename,
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
            success: true,
            user,
        });
    
    } catch(e: any) {
        console.log('Error saving a new artist to the DB!!!!');
        res.status(500).send('Error saving artist to the DB');
        return;
    }
});


module.exports = router;