const { default: mongoose } = require('mongoose');
const { Schema } = require('mongoose');

const urlSchema = new Schema({
  urlCode: String,
  longUrl: String,
  shortUrl: String,
  date: {
    type: String,
    default: Date.now(),
  },
});

module.exports = mongoose.model('Url', urlSchema);
