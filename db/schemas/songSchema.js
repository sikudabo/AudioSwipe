const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
    album: { required: true, type: String },
    albumCoverId: { required: true },
    artistId: { required: true },
    artistName: { required: true },
    createdOn: { default: Date.now(), required: true, type: Date },
    disLikes: [
        new mongoose.Schema({
            createdOn: { default: Date.now(), required: true, type: Date },
            fanId: { required: true },
            gender: { required: true, type: String },
        }),
    ],
    likes: [
        new mongoose.Schema({
            createdOn: { default: Date.now(), required: true, type: Date },
            fanId: { required: true },
            gender: { required: true, type: String },
        }),
    ],
    name: { required: true, type: String },
    songMediaId: { required: true },
}, {
    collection: 'songs',
});

module.exports = songSchema;