const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var matchbookSchema = new Schema({}, {strict: false});
  var matchbook = mongoose.model('matchbook', matchbookSchema);

module.exports = { matchbook };