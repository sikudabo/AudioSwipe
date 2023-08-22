const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
    album: { required: true, type: String },
    albumCover: { required: true, type: String },
    artistId: { required: true , type: String },
    artistName: { required: true, type: String },
    createdOn: { default: Date.now(), required: true, type: Date },
    disLikes: [
        {
            createdOn: { default: Date.now(), required: true, type: Date },
            fanId: { required: true, type: String },
            gender: { required: true, type: String },
            month: Number,
            year: Number,
        },
    ],
    genres: [String],
    likes: [
        {
            createdOn: { default: Date.now(), required: true, type: Date },
            fanId: { required: true, type: String },
            gender: { required: true, type: String },
            month: Number,
            year: Number,
        },
    ],
    name: { required: true, type: String },
    songArtistType: { required: true, type: String },
    songMediaId: { required: true, type: String },
    utcTime: Date,
}, {
    collection: 'songs',
});

module.exports = songSchema;