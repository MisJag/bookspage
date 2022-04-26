let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let bookSchema = new Schema({
 book_id: {
    type: String
  },

  
  
}, {
    collection: 'books'
  })

module.exports = mongoose.model('book',bookSchema)