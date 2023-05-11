const mongoose = require('mongoose');
const { artistSchema } = require('../schemas');

const ArtistModel = mongoose.model('ArtistModel', artistSchema);

module.exports = ArtistModel;