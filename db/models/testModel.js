const mongoose = require('mongoose');
const { testSchema } = require('../schemas');

const TestModel = mongoose.model('TestModel', testSchema);

module.exports = TestModel;