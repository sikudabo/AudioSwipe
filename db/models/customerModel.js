var mongoose = require('mongoose');
var customerSchema = require('../schemas/customersSchema');
var CustomerModel = mongoose.model('CustomerModel', customerSchema);
module.exports = CustomerModel;
