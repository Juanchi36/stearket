const mongoose = require('mongoose');

const searchSchema = new mongoose.Schema({
    userEmail: {
        type: String
    },
    gameSearched: {
        type: String
    },
})

module.exports = mongoose.model('Search', searchSchema);