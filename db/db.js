const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const dbUri = dotenv.parsed.DB_URI;

async function startDb() {
    await mongoose.connect(dbUri);
}

module.exports = () => startDb();