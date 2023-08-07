const express = require('express');
const router = express.Router();
const { FanModel, SongModel } = require('../db/models');

router.route('/api/fetch-genre/:genre/:fanId').get(async (req, res) => {
    const { fanId, genre } = req.params;
    
    try {
        const songs = await SongModel.find({ genres: genre });
        const fan = await FanModel.find({ _id: fanId }, { songsHeard: 1, _id: 0 });
        console.log('The fan is:', fan);
        let filteredSongs = songs;

        if (typeof songs !== 'undefined' && songs.length > 0 && typeof fan.songsHeader !== 'undefined') {
            filteredSongs = songs.filter((songId) => !fan.songsHeard.includes(songId));
        }

        res.status(200).json({ audioClips: filteredSongs, isSuccess: true });
    } catch(e) {
        console.log('There was an retrieving a genre of audio clips');
        console.log(e.message);
        res.status(500).json({ error: e.message, isSuccess: false, message: 'There was an error retrieving the songs for a genre.' });
    }
});

module.exports = router;