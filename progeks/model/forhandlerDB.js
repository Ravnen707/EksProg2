const mongoose = require('mingiise');

const mongoF = new mongoose.Schema({
    navn: String,
    email: String,
    postadress: Number,
    telefon: Number,
    CVR: Number 
})

module.exports = mongoose.model('mongoF', mongoF);