const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
    album: { required: true, type: String },
    albumCoverId: { required: true, type: String },
    artistId: { required: true , type: String },
    artistName: { required: true, type: String },
    createdOn: { default: Date.now(), required: true, type: Date },
    disLikes: [
        {
            createdOn: { default: Date.now(), required: true, type: Date },
            fanId: { required: true, type: String },
            gender: { required: true, type: String },
        },
    ],
    genres: [String],
    likes: [
        {
            createdOn: { default: Date.now(), required: true, type: Date },
            fanId: { required: true, type: String },
            gender: { required: true, type: String },
        },
    ],
    name: { required: true, type: String },
    songMediaId: { required: true, type: String },
}, {
    collection: 'songs',
});

module.exports = songSchema;