const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  mail: String,
  finished: Boolean,
  created_date: Date,
  modified_date: Date
});

module.exports = mongoose.model('users', userSchema);