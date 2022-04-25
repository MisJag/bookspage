let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let authorSchema = new Schema({
  name: {
    type: String
  },
  
  author: {
    type: String
  },
  
}, {
    collection: 'authors'
  })

module.exports = mongoose.model('author',authorSchema)