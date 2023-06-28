const mongoose = require('mongoose');
const { fanSchema } = require('../schemas');

const FanModel = mongoose.model('FanModel', fanSchema);

module.exports = FanModel;