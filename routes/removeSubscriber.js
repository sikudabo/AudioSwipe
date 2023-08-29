const express = require('express');
const router = express.Router();
const { ArtistModel, FanModel } = require('../db/models');

router.route('/api/add-subscriber').post(async (req, res) => {
    const { artistId, fanId } = req.body

    try {
        await ArtistModel.updateOne({ _id: artistId }, { $pull: { subscribers: fanId }});
        await FanModel.updateOne({ _id: fanId }, { $pull: { subscribedArtists: { artistId }}});
        const updatedFan = await FanModel.findOne({ _id: fanId });
        res.status(200).json({ isSuccess: true, message: 'Unsubscribed!', updatedFan });

    } catch(e) {
        console.log('Error removing a subscriber!!!!!!!!!');
        console.log('Error message:', e.message);
        res.status(500).json({ isSuccess: false, message: e.message });
    }

});

module.exports = router;