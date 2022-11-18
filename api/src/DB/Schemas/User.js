const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  prode: {
    type: mongoose.SchemaTypes.Mixed,
    required: true
  },
  prodeComplete: {
    type: Boolean,
    required: true
  }
});

module.exports = mongoose.model('User', dataSchema);