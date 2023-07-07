const express = require('express');
const router = express.Router();
const startDb = require('../db/db');
const { FanModel } = require('../db/models');
const Grid = require('gridfs-stream');
const { GridFsStorage } = require('multer-gridfs-storage');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const dotenv = require('dotenv').config();

const dbUri = process.env.DB_URI;

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

router.route('/api/saveFan').put(uploads.single('avatar'), async (req, res) => {
    const { birthday, firstName, lastName, email, password, gender, phoneNumber } = req.body;
    console.log('The body is:', req.body);

    try {
        const isEmailTaken = await FanModel.findOne({ email });

        if (isEmailTaken) {
            res.status(200).json({ message: 'That email is taken. Select another', success: false });
            return;
        }

        const newFan = {
            avatar: req.file.filename,
            birthday: new Date(birthday),
            email,
            firstName,
            gender,
            lastName,
            likedSongs: [],
            password,
            phoneNumber,
            subscribedArtists: [],
        };

        await FanModel.insertMany([newFan]);

        const user = await FanModel.findOne({ email }).exec();

        res.status(200).json({ success: true, user });
        return;


    } catch(e) {
        console.log(e.message);
        console.log('error saving a new fan in the PUT request');
        res.status(500).json({ success: false, message: 'There was an error saving your profile. Please try again!' });
        return;
    }
});

module.exports = router;