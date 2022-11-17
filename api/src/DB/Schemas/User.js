const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  prode: {
    type: Object,
    required: false
  },
  prodeComplete: {
    type: Boolean,
    required: true
  },
  points: {
    type: Number,
    required: false
  }
});

module.exports = mongoose.model('User', dataSchema);