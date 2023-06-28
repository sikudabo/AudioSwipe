const mongoose = require('mongoose');

const fanSchema = new mongoose.Schema({
    avatar: { required: true, type: String },
    birthday: { required: true, type: Date },
    email: { required: true, type: String},
    firstName: { required: true, type: String },
    gender: { required: true, type: String },
    lastName: { required: true, type: String },
    likedSongs: [mongoose.Schema({
        songId: String,
        likedOn: Date,
    })],
    password: { required: true, type: String },
    phoneNumber: { required: true, type: String },
    subscribedArtists: [mongoose.Schema({
        artistId: String,
        subscribedOn: Date,
    })],
    userType: { default: 'fan', required: true, type: String },
}, {
    collection: 'fans',
});

module.exports = fanSchema;