const express = require('express');
const router = express.Router();
const { SongModel } = require('../db/models');
const Grid = require('gridfs-stream');
const { GridFsStorage } = require('multer-gridfs-storage');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');

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

router.route('/api/upload/song').put(uploads.single('song'), async (req, res) => {
    try {
        const songId = req.file.filename;
        res.status(200).json({ isSuccess: true, message: 'success', songId });
    } catch(e) {
        console.log('Error uploading a song for an artist:', e.message);
        res.status(200).json({ isSuccess: false, message: 'There was an error uploading that song. Please try again!' });
    }
});