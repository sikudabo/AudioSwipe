const mongoose = require('mongoose');
const { songSchema } = require('../schema');

const SongModel = mongoose.model('SongModel', songSchema);

module.exports = SongModel;