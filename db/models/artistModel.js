var mongoose = require('mongoose');
var artistSchema = require('../schemas').artistSchema;

var ArtistModel = mongoose.model('ArtistModel', artistSchema);

module.exports = ArtistModel;
