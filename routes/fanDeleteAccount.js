const express = require('express');
const router = express.Router();
const Grid = require('gridfs-stream');
const GridFsStorage = require('multer-gridfs-storage').GridFsStorage;
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const { FanModel } = require('../db/models');

const dbUri = process.env.DB_URI;

var conn = mongoose.createConnection(dbUri, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connect(dbUri, {useNewUrlParser: true, useUnifiedTopology: true});

let gfs;

conn.once('open', async () => {
    // Init Stream
    gfs = await Grid(conn.db, mongoose.mongo);
    gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
        bucketName: 'uploads',
    });
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

router.route('/api/delete-fan').delete(async (req, res) => {
    const { _id, avatarId } = req.body;

    try {
        await FanModel.deleteOne({ _id });

        const updatedFan = await FanModel.findOne({ _id }).exec();

        const { _id: bucketAvatarId } = await gfs.files.findOne({ filename: avatarId });
        await gridfsBucket.delete(bucketAvatarId);

        res.status(200).json({ isSuccess: true, message: 'Successfully deleted account!' });

    } catch(e) {
        console.log('There was an error deleting fan!!!!!!!!!');
        console.log(e.message);
        res.status(500).json({ error: e.message, isSuccess: false, message: 'There was an error deleting your account!' });
    }

});

module.exports = router;