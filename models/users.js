const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  mail: String,
  completada: Boolean,
  created_date: Date
});

module.exports = mongoose.model('users', userSchema);