const mongoose = require('mongoose');
const { config } = require('../../config');

async function dbConnect() {
  await mongoose.connect(config.databaseUrl);
}

module.exports.dbConnect = dbConnect;
