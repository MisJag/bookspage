let mongoose = require('mongoose')
const Schema = mongoose.Schema;
let book= require('./models/book')


//matchbook schema
var matchbookSchema = new Schema({}, {strict: false});
var MatchBook = mongoose.model('Matchbook', matchbookSchema);
// database connection
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/bookdata');

var db = mongoose.connection;
db.on("error", () => {console.log("Error connecting db.")});
db.once("open", () => { console.log("Connected successfully")});



//const enquired_book= "book1";

book.aggregate([
//  { $match : { book_id : "book1"} } ,
  {
   $lookup: {
      from: "authors",
      localField: "book_id",
      foreignField: "book_id",
      as: "author_info",
    }

  },
      {
        $unwind: "$author_info",
      },
  {
    $lookup: {
      from: "sellers",
      localField: "book_id",
      foreignField: "book_id",
      as: "seller_info",
    },
  },
      {
        $unwind: "$seller_info",
      },
 

    {$project:{"author_info._id":0,"seller_info._id":0,"author_info.__v":0,"seller_info.__v":0}}
    ]).then((results)=>{
      results.map((result)=>{
      console.log(result)
      var matchbook =  MatchBook({result} );
      matchbook.save()
  })
     
});












