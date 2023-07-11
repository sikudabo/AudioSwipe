const express = require('express');
const router = express.Router();
const Grid = require('gridfs-stream');
const GridFsStorage = require('multer-gridfs-storage').GridFsStorage;
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

router.route('/api/get-photo/:photo').get(async (req, res) => {
    console.log('I am being hit!');
    
    let photo = req.params.photo;
    console.log('The photo is:', photo);
    console.log(gfs.files);
    await gfs.files.find({ filename: photo }, async (err, file) => {
        console.log('This is actually being triggered');
        console.log('The file returned is:', file);
        if (err) {
            console.log('Error:', err.message);
        }
        // Check if file
        if (!file || file.length === 0) {
          console.log('Could Not Find The Photo');
          return res.status(404).json({
            err: 'No file exists'
          });
        }
        else {
            let readstream = await gfs.createReadStream(file.filename);
            console.log('The read stream is:', readstream);
            readstream.pipe(res);
        }
    });
});

module.exports = router;