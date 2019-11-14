const mongoose = require('mongoose')

const searchSchema = new mongoose.Schema({
  userEmail: {
    type: String,
    required: true
  },
  gameName: {
    type: String,
    required: true,
  },
  
})

module.exports = mongoose.model('Search', searchSchema)