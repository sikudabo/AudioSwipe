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

conn.once('open', () => {
    // Init Stream
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection('uploads');
    return 'done';
});

const storage = new GridFsStorage({
    url: dbUri,
    file: (req, file) => {
      return new Promise((resolve, reject) => {
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

router.route('/api/get-photo/:photo').get(async (req, res) => {
    
    let photo = req.params.photo;
    const file = await gfs.files.find({ filename: photo });
    if (!file || file.length === 0) {
        console.log('Could not find photo');
        return res.status(404).json({
            err: 'Could not find the photo!',
        });
    }
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