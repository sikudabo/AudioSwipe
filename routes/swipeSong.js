const express = require('express');
const router = express.Router();
const Grid = require('gridfs-stream');
const mongoose = require('mongoose');
const { FanModel, SongModel } = require('../db/models');

router.route('/api/swipe').post(async (req, res) => {
    console.log('I am being hit!');
    const { direction, fanId, gender, songId } = req.body;
    const date = new Date();
    const month = date.getMonth();
    const year = date.getFullYear();

    try {

        if (direction === 'right') {
            await FanModel.updateOne({ _id: fanId }, { $push: { likedSongs: songId }});
            await SongModel.updateOne({ _id: songId }, { $push: { likes: { createOn: new Date().getTime(), fanId, gender, month, year  }}});
            res.status(200).json({ isSuccess: true, message: 'Successfully liked song' });
            return;
        }

        await FanModel.updateOne({ _id: fanId }, { $push: { dislikedSongs: songId }});
        await SongModel.updateOne({ _id: songId }, { $push: { disLikes: { createOn: new Date().getTime(), fanId, gender, month, year  }}});
        res.status(200).json({ isSuccess: true, message: 'Successfully disliked song' });
    } catch(e) {
        console.log('Error swiping on a song!!!!!!!!!!!!!');
        console.log('Error message:', e.message);
        res.status(500).json({ errorMessage: e.message, isError: true, message: 'There was an error swiping that song' });
    }
});

module.exports = router;
