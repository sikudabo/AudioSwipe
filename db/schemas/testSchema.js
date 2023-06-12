const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
    name: String,
    age: Number,
}, {
    collection: 'audioswipe',
});

module.exports = testSchema;