const express = require('express');
const router = express.Router();
const { FanModel, SongModel } = require('../db/models');

router.route('/api/fetch-genre/:genre/:fanId').get(async (req, res) => {
    const { fanId, genre } = req.params;
    
    try {
        const songs = await SongModel.find({ genres: genre });
        const fan = await FanModel.findOne({ _id: fanId }, { dislikedSongs: 1, likedSongs: 1, _id: 0 }).sort({ createdOn: -1 });
        const { dislikedSongs, likedSongs } = fan;
        let filteredSongs = songs;

        if (typeof songs !== 'undefined' && songs.length > 0) {
            filteredSongs = songs.filter((song) => !likedSongs.includes(song._id.toString()) && !dislikedSongs.includes(song._id.toString()));
        }

       const testSongs = songs.filter((song) => !likedSongs.includes(song._id.toString()) && !dislikedSongs.includes(song._id.toString()));
       console.log('The test songs are:', testSongs);

        res.status(200).json({ audioClips: filteredSongs, isSuccess: true });
    } catch(e) {
        console.log('There was an retrieving a genre of audio clips');
        console.log(e.message);
        res.status(500).json({ error: e.message, isSuccess: false, message: 'There was an error retrieving the songs for a genre.' });
    }
});

module.exports = router;