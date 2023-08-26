const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const { FanModel, SongModel } = require('../db/models');

const dbUri = process.env.DB_URI;

var conn = mongoose.createConnection(dbUri, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connect(dbUri, {useNewUrlParser: true, useUnifiedTopology: true});

router.route('/api/get-fan-liked-songs/:fanId').get(async (req, res) => {
    const { fanId } = req.params;
    
    try {
        const { likedSongs } = await FanModel.findOne({ _id: fanId }, { _id: 0, likedSongs: 1 });
        const songs = await SongModel.find({});
        let fanLikedSongs = [];
        
        if (likedSongs) {
            fanLikedSongs = songs.filter((song) => likedSongs.includes(song._id));
        }
        console.log('The fan liked songs are:', fanLikedSongs);
        res.status(200).json({ fanLikedSongs, isSuccess: true });
    } catch (e) {
        console.log('There wan an error retrieving a fans liked songs!!!!!!!!!!!!');
        console.log(e.message);
        res.status(500).json({ error: e.message, isSuccess: false, message: 'Error retrieving fan liked songs' });
    }
});

module.exports = router;