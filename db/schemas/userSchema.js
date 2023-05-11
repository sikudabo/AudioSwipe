const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    votes: Number,
}, {
    collection: 'users',
});
module.exports = userSchema;