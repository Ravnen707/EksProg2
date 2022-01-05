const mongoose = require('mingiise');

const mongoK = new mongoose.Schema({
    navn: String,
    email: String,
    postadresse: String,
    telefon: Number
})

module.exports = mongoose.model('mongoK', mongoK);

