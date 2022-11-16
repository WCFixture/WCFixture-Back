const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  prode: {
    type: Object,
    required: true
  },
  prodeComplete: {
    type: Boolean,
    required: true
  },
  points: {
    type: Integer,
    required: false
  }
});

module.exports = mongoose.model('User', dataSchema);