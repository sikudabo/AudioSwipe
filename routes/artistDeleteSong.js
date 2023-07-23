const express = require('express');
const router = express.Router();
const Grid = require('gridfs-stream');
const mongoose = require('mongoose');
const { SongModel } = require('../db/models');

const dbUri = process.env.DB_URI;

var conn = mongoose.createConnection(dbUri, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connect(dbUri, {useNewUrlParser: true, useUnifiedTopology: true});

let gfs;
let gridfsBucket;

conn.once('open', () => {
    // Init Stream
    gfs = Grid(conn.db, mongoose.mongo);
    gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
        bucketName: 'uploads',
    });
    gfs.collection('uploads');
    return 'done';
});

router.route('/api/delete-song/:songId/:songMediaId').delete(async () => {
    const { songId, songMediaId } = req.params;

    try {
        SongModel.deleteMany({ _id: songId });

        await gfs.remove({ filename: songMediaId });

        res.status(200).json({ isSuccess: true, message: 'Successfully deleted that song.' });

    } catch(e) {
        console.log('There was an error deleting a song!!!!!!!!');
        console.log(e.message);
        res.status(500).json({ isSuccess: false, error: e.message, message: 'There was an error deleting a song!' });
    }
});

module.exports = router;