const mongoose = require('mongoose');
const customerSchema = require('../schemas/customersSchema');

const CustomerModel = mongoose.model('CustomerModel', customerSchema);

module.exports = CustomerModel;