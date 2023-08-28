const express = require('express');
const router = express.Router();
const { ArtistModel, FanModel } = require('../db/models');

router.route('/api/add-subscriber').post(async (req, res) => {
    const { artistId, fanId } = req.body;
    const newData = {
        artistId,
        subscribedOn: Date.now(),
    };

    try {
        await ArtistModel.updateOne({ _id: artistId }, { $push: { subscribers: fanId }});
        await FanModel.updateOne({ _id: fanId }, { $push: { subscribedArtists: newData }});
        const updatedFan = await FanModel.findOne({ _id: fanId });
        res.status(200).json({ isSuccess: true, message: 'Subscribed!', updatedFan });

    } catch(e) {
        console.log('Error adding a new subscriber!!!!!!!!!');
        console.log('Error message:', e.message);
        res.status(500).json({ isSuccess: false, message: e.message });
    }

});

module.exports = router;