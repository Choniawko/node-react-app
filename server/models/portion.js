const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const portion = new Schema({
    firstLang: String,
    secondLang: String,
    prompt: String
});

module.exports = mongoose.model('Portion', portion);