const mongoose = require('mongoose');

const songSchema = new mongoose.schema({
    email: { required: true, type: String, unique: true },
    myArray: Array,
    songName: String,
    songArtistName: String,
    songArtistId: String,
    uniqueSongId: String,
    hasVideo: Boolean,
    isPodcast: Boolean,
    isSnippet: Boolean,
    upVotes: [String],
    downVotes: [String],
}, {
    collection: 'songs',
});

module.exports = songSchema;