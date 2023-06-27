const mongoose = require('mongoose');
const { fanSchema } = require('../schema');

const FanModel = mongoose.model('FanModel', fanSchema);

module.exports = FanModel;