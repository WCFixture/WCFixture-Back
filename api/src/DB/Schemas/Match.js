const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['pendient', 'ongoing', 'finished'],
    required: true
  },
  countries: {
    type: Array,
    required: true
  },
  date: {
    type: String,
    required: false
  }, 
  instance: {
    type: String,
    required: true
  } 
});

module.exports = mongoose.model('Match', dataSchema);