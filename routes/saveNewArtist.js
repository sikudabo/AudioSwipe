const express = require('express');
const router = express.Router();
const startDb = require('../db/db');
const { ArtistModel } = require('../db/models');
// const dotenv = require('dotenv').config();
const Grid = require('gridfs-stream');
const { GridFsStorage } = require('multer-gridfs-storage');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const dotenv = require('dotenv').config();

const dbUri = dotenv.parsed.DB_URI;

var conn = mongoose.createConnection(dbUri, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connect(dbUri, {useNewUrlParser: true, useUnifiedTopology: true});

console.log('conn is:', conn);

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



router.route('/api/saveArtist').post(uploads.single('avatar'), async (req, res) => {
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

    console.log('The file is:', req.file);

    try {
        /* console.log('The ArtistModel is:', ArtistModel);
        const isUsernameTaken = await ArtistModel.findOne({ username: username});

        if (isUsernameTaken) {
            res.status(401).json({ isSuccess: false, message: 'Username taken' });
            return;
        } */
        const newArtist = {
            avatar: req.file.filename,
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
        console.log(e.message);
        res.status(500).json({ isSuccess: false, message: 'Error saving the artist into the db on PUT request.'});
        return;
    }
});


module.exports = router;