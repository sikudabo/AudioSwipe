const mongoose = require('mongoose');

const fanSchema = new mongoose.Schema({
    avatar: { required: true, type: String },
    birthday: { required: true, type: Date },
    dislikedSongs: [String],
    email: { required: true, type: String, unique: true },
    firstName: { required: true, type: String },
    gender: { required: true, type: String },
    lastName: { required: true, type: String },
    likedSongs: [String],
    password: { required: true, type: String },
    phoneNumber: { required: true, type: String },
    songsHeard: [String],
    subscribedArtists: [mongoose.Schema({
        artistId: String,
        subscribedOn: Date,
    })],
    userType: { default: 'fan', required: true, type: String },
}, {
    collection: 'fans',
});

module.exports = fanSchema;