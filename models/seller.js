let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let sellerSchema = new Schema({
  book_id: {
    type: String
  },
  
  seller: {
    type: String
  },
  
}, {
    collection: 'sellers'
  })
  
module.exports = mongoose.model('seller',sellerSchema)