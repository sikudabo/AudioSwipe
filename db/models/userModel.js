const mongoose = require('mongoose');
const userSchema = require('../schemas/userSchema');

const UserModel = mongoose.model('UserModal', userSchema);

module.exports = UserModel;