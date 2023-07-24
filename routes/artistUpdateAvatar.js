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

router.route('/api/update-avatar/:artistId/:avatarId').post(uploads.single('avatar'), async (req, res) => {
    const { artistId, avatarId } = req.params;
    const filename = req.file.filename;

    try {
        await ArtistModel.updateOne({ _id: artistId }, {$set: { avatar: filename }});
        
        if (avatarId) {
            const { _id } = await gfs.files.findOne({ filename: avatarId });
        
            await gridfsBucket.delete(_id)
        }

        const updatedArtist = await ArtistModel.findOne({ _id: artistId }).exec();

        res.status(200).json({ isSuccess: true, message: 'Avatar successfully updated.', updatedArtist: updatedArtist });

    } catch(e) {
        console.log('Error updating an artists avatar!!!!!!!!!!!');
        console.log(e.message);
        res.status(500).json({ error: e.message, isSuccess: false, message: 'Error updating an artists avatar' });
    }
});

module.exports = router;