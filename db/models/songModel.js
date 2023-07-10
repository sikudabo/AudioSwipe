const mongoose = require('mongoose');
const { songSchema } = require('../schemas');

const SongModel = mongoose.model('SongModel', songSchema);


module.exports = SongModel;
