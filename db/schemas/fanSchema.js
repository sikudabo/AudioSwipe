const mongoose = require('mongoose');

const fanSchema = new mongoose.Schema({
    avatar: { required: true, type: String },
    birthDay: { required: true, type: Date },
    firstName: { required: true, type: String },
    gender: { required: true, type: String },
    lastName: { required: true, type: String },
    likedSongs: mongoose.Schema({
        songId: String,
        likedOn: Date,
    }),
    password: { required: true, type: String },
    subscribedArtists: mongoose.Schema({
        artistId: String,
        subscribedOn: Date,
    }),
});

module.exports = fanSchema;