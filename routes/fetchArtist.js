const express = require('express');
const router = express.Router();
const { ArtistModel, SongModel } = require('../db/models');

router.route('/api/fetch-artist/:artistId').get(async (req, res) => {
    
    const { artistId } = req.params;

    try {
        const artist = await ArtistModel.findOne({ _id: artistId });
        const artistSongs = await SongModel.find({ artistId });
        res.status(200).json({ isSuccess: true, artist, artistSongs });
    } catch (e) {
        console.log('There was an error fetching an artist!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
        console.log('Error message:', e.message);
        res.status(500).json({ isSuccess: false, message: 'There was an error finding that artist. Please try again!' });
    }
});

module.exports = router;