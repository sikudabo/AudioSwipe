const express = require('express');
const router = express.Router();
const { FanModel } = require('../db/models');

router.route('/api/delete-fan').delete(async (req, res) => {
    const { _id, avatarId } = req.body;

    try {
        await FanModel.deleteOne({ _id });

        const updatedFan = await FanModel.findOne({ _id }).exec();

        const { _id: bucketAvatarId } = await gfs.files.findOne({ filename: avatarId });
        await gridfsBucket.delete(bucketAvatarId);

        res.status(200).json({ isSuccess: true, message: 'Successfully deleted account!' });

    } catch(e) {
        console.log('There was an error deleting fan!!!!!!!!!');
        console.log(e.message);
        res.status(500).json({ error: e.message, isSuccess: false, message: 'There was an error deleting your account!' });
    }

});

module.exports = router;