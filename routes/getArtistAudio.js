const express = require('express');
const router = express.Router();
const Grid = require('gridfs-stream');
const mongoose = require('mongoose');
const { SongModel } = require('../db/models');

const dbUri = process.env.DB_URI;

var conn = mongoose.createConnection(dbUri, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connect(dbUri, {useNewUrlParser: true, useUnifiedTopology: true});

function addLikesCountToSongs(songs) {
    if (songs.length === 0) {
        return songs;
    }

    const artistSongs = songs.map((song) => {
        const likesNum = song.likes.length;
        const disLikesNum = song.disLikes.length;
        song.likesNum = likesNum;
        song.disLikesNum = disLikesNum;
    });

    return artistSongs;
}

router.route('api/getArtistAudio/:artistId').get(async (req, res) => {
    const { artistId } = req.params;
    
    try {
        const artistSongs = await SongModel.find({ artistId });
        const artistAudio = addLikesCountToSongs(artistSongs);
        res.status(200).json({ artistAudio });
    } catch (e) {
        console.log('There was an error retrieving an artists audio list!!!!!!!!!!!!!!!!!!!!!!!!');
        console.log(e.message);
        res.status(500).json({ error: e.message, isSuccess: false, message: 'Error retrieving songs' });
    }
});

module.exports = router;