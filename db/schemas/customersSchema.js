const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    age: Number,
    createdOn: { default: Date.now, type: Date },
    firstName: String,
    lastName: { require: true, type: String },
    likedSongs: [
        {
            songArtist: String,
            songId: String,
            songName: String,
        },
    ],
    mixedUp: mongoose.SchemaTypes.Mixed,
    songsListenedToIds: [String],
}, {
    collection: 'customers',
});

module.exports = customerSchema;