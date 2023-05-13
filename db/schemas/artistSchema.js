var mongoose = require('mongoose');
var artistSchema = new mongoose.Schema({
    avatar: { required: true, type: String },
    artistName: { required: true, type: String },
    bio: String,
    birthday: { required: true, type: Date },
    city: { required: true, type: String },
    createdOn: { default: Date.now, required: true, type: Date },
    downVotes: [
        {
            fanId: String,
            swipeDate: Date,
        },
    ],
    downVoteCount: Number,
    email: { required: true, type: String },
    fans: [
        {
            fanAvatar: String,
            fanName: String,
            fanId: String,
        }
    ],
    gender: { required: true, type: String },
    firstName: { require: true, type: String },
    genres: { required: true, type: [String] },
    lastName: { required: true, type: String },
    phoneNumber: { required: true, type: String },
    soundcloudLink: String,
    spotifyLink: String,
    state: { required: true, type: String },
    youtubeLink: String,
    upVotes: [
        {
            fanId: String,
            swipeDate: Date,
        },
    ],
    upVoteCount: Number,
}, {
    collection: 'artists',
});
module.exports = artistSchema;
