var mongoose = require('mongoose');
var songSchema = new mongoose.Schema({
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
