const express = require('express');
const router = express.Router();
const Grid = require('gridfs-stream');
const mongoose = require('mongoose');
const { FanModel } = require('../db/models');

router.route('/api/swipe').post(async (req, res) => {
    const { direction, fanId, songId } = req.body;

    try {

        if (direction === 'right') {
            await FanModel.updateOne({ _id: fanId }, { $push: { likedSongs: songId }});
            res.status(200).json({ isSuccess: true, message: 'Successfully liked song' });
            return;
        }

        await FanModel.updateOne({ _id: fanId }, { $push: { disLikedSongs: songId }});
        res.status(200).json({ isSuccess: true, message: 'Successfully disliked song' });
    } catch(e) {
        console.log('Error swiping on a song!!!!!!!!!!!!!');
        console.log('Error message:', e.message);
        res.status(500).json({ errorMessage: e.message, isError: true, message: 'There was an error swiping that song' });
    }
});

module.exports = router;
