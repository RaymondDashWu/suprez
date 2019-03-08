const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

// Keyword Model
const KeywordSchema = new Schema({
    word: { type: String, required: true },
});

const Keyword = mongoose.model('Keyword', KeywordSchema);
module.exports = Keyword;