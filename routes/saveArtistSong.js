const express = require('express');
const router = express.Router();
const Grid = require('gridfs-stream');
const GridFsStorage = require('multer-gridfs-storage').GridFsStorage;
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const { ArtistModel, SongModel } = require('../db/models');
const ObjectId = mongoose.Types.ObjectId;

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

router.route('/api/saveSong').put(uploads.single('song'), async (req, res) => {
    const { 
            album, 
            albumCover, 
            artistId, 
            artistName, 
            genres, 
            name, 
            song, 
            songArtistType } = req.body;

    const utcTime = Date.now();

    const newSong = {
        album,
        albumCover,
        artistId,
        artistName,
        genres,
        name,
        song,
        songArtistType,
        songMediaId: req.file.filename,
        utcTime,
    };
    try {
        await SongModel.insertMany([newSong]);
        const savedSong = await SongModel.findOne({ utcTime }).exec();
        await ArtistModel.updateOne({ _id: artistId }, { $push: { songIds: savedSong._id }});
        const updatedArtist = await ArtistModel.findById(artistId).exec();
        res.status(200).json({ isSuccess: true, message: 'Successfully uploaded song!', updatedArtist: updatedArtist });
    } catch(e) {
        console.log('There was an error saving a new artist');
        console.log('The error message is:', e.message);
        res.status(200).json({ isSuccess: false, message: 'There was an error. Please try again!' });
    }

});

module.exports = router;