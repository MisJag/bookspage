let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let bookSchema = new Schema({
  name: {
    type: String
  },
  
  desc: {
    type: String
  },
  author: {
    type: String
  },
  
}, {
    collection: 'books'
  })

module.exports = mongoose.model('book',bookSchema)