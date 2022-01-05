const mongoose = require('mongoose');

const mongoI = new mongoose.Schema({
    navn: String,
    pris: String,
    forhandler: String,
    lokation: String
})

module.exports = mongoose.model('mongoI', mongoI);

