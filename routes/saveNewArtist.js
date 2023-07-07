const express = require('express');
const router = express.Router();
const startDb = require('../db/db');
const { ArtistModel } = require('../db/models');
const Grid = require('gridfs-stream');
const { GridFsStorage } = require('multer-gridfs-storage');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const dotenv = require('dotenv').config();

const dbUri = dotenv.parsed.DB_URI;

var conn = mongoose.createConnection(dbUri, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connect(dbUri, {useNewUrlParser: true, useUnifiedTopology: true});

let gfs;

conn.once('open', async () => {
    // Init Stream
    gfs = await Grid(conn.db, mongoose.mongo);
    await gfs.collection('uploads');
    return 'done';
});

const storage = new GridFsStorage({
    url: dbUri,
    file: async (req, file) => {
      return await new Promise((resolve, reject) => {
          const filename = Date.now() + "-" + file.fieldname + path.extname(file.originalname);
          const fileInfo = {
            filename: filename,
            bucketName: 'uploads'
          };
          resolve(fileInfo);
        });
    }
});

const uploads = multer({ storage });



router.route('/api/saveArtist').put(uploads.single('avatar'), async (req, res) => {
    await mongoose.connect('mongodb://localhost:27017/audioswipe');

    const {
        artistType,
        firstName,
        gender,
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
    } = req.body;

    try {
        console.log('The ArtistModel is:', ArtistModel);
        const isUsernameTaken = await ArtistModel.findOne({ username });

        if (isUsernameTaken) {
            res.status(401).json({ isSuccess: false, message: 'Username taken. Select a new one.' });
            return;
        }
        const splitGenres = genres.split(',');
        const newArtist = {
            avatar: req.file.filename,
            artistType,
            gender,
            firstName,
            lastName,
            artistName: stageName,
            username,
            password,
            bio,
            birthday: birthDate,
            email,
            phoneNumber: phone,
            city,
            state,
            genres: splitGenres,
            spotifyLink,
            youtubeLink,
            soundcloudLink,
            fans: [],
            upvotes: [],
            downvotes: [],
        }

        await ArtistModel.insertMany([newArtist]);

        const user = await ArtistModel.findOne({ username }).exec();

        console.log('The user is:', user);

        res.status(200).json({
            isSuccess: true,
            user,
        });
    
    } catch(e) {
        console.log(e.message);
        res.status(500).json({ isSuccess: false, message: 'Error saving the artist into the db on PUT request.'});
        return;
    }
});


module.exports = router;