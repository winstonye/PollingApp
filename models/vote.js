const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VoteSchema = new Schema({
    os:{
        type: String,
        required: true
    },
    points:{
        type: String,
        required: true
    }
});

// Create colelction and add Schema
const Vote = mongoose.model('vote', VoteSchema);

module.exports = Vote;