const express = require('express');
const router = express.Router();
const { ArtistModel } = require('../db/models');

router.route('/api/fetch-artist/:artistId').get(async (req, res) => {
    const { artistId } = req.params;

    try {
        const artist = await ArtistModel.findOne({ _id: artistId });
        res.status(200).json({ isSuccess: true, artist });
    } catch (e) {
        console.log('There was an error fetching an artist!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
        console.log('Error message:', e.message);
        res.status(500).json({ isSuccess: false, message: 'There was an error finding that artist. Please try again!' })
    }
});

module.exports = router;