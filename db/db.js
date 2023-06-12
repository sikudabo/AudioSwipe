const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const dbUri = process.env.DB_URI;

async function startDb() {
    await mongoose.connect(dbUri);
}

module.exports = () => startDb();