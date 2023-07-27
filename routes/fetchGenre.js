const express = require('express');
const router = express.Router();
const { SongModel } = require('../db/models');

router.route('/api/fetch-genre/:genre').get(async (req, res) => {
    const { genre } = req.params;
    
    try {
        const songs = await SongModel.find({ genres: genre });
        res.status(200).json({ audioClips: songs, isSuccess: true });
    } catch(e) {
        console.log('There was an retrieving a genre of audio clips');
        console.log(e.message);
        res.status(500).json({ error: e.message, isSuccess: false, message: 'There was an error retrieving the songs for a genre.' });
    }
});

module.exports = router;