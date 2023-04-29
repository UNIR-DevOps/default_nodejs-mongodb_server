const mongoose = require('mongoose');

const tareaSchema = new mongoose.Schema({
  name: String,
  mail: String,
  completada: Boolean,
  created_date: Date
});

module.exports = mongoose.model('users', tareaSchema);