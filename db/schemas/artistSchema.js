var mongoose = require('mongoose');
var artistSchema = new mongoose.Schema({
    avatar: { required: true, type: String },
    artistName: { required: true, type: String },
    bio: String,
    birthday: { required: true, type: Date },
    city: { required: true, type: String },
    createdOn: { default: Date.now, required: true, type: Date },
    email: { required: true, type: String },
    firstName: { require: true, type: String },
    genres: { required: true, type: [String] },
    lastName: { required: true, type: String },
    phoneNumber: { required: true, type: String },
    soundcloudLink: String,
    spotifyLink: String,
    state: { required: true, type: String },
    youtubeLink: String,
}, {
    collection: 'artists',
});
module.exports = artistSchema;
