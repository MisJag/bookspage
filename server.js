let express = require('express')
let mongoose = require('mongoose')
let cors = require('cors')
const Schema = mongoose.Schema;
let author= require('./models/author')
let book= require('./models/book')


const createError = require('http-errors');
var matchbookSchema = new Schema({}, {strict: false});
var MatchBook = mongoose.model('Matchbook', matchbookSchema);

// Express Route
const authorRoute = require("./routes.js/author.route");
const bookRoute = require("./routes.js/book.route");
const sellerRoute=require("./routes.js/seller.route");

// Connecting mongoDB Database
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/bookdata');

var db = mongoose.connection;
db.on("error", () => {console.log("Error connecting db.")});
db.once("open", () => { console.log("Connected successfully")});

const app = express()
app.use(express.json());
app.use(cors())
app.options('*', cors());
app.use('/authors', authorRoute);
app.use('/books', bookRoute);
app.use('/sellers',sellerRoute)

// PORT
const port = process.env.PORT || 4000
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})
//----------------------------------------with match stage-------------------------------------------------//
// const enquired_book= "book1";
//  book.aggregate([

//    { $match : { book_id : enquired_book} } ,
  
//   {  
    
//     $lookup: {
   
//       from: "authors",
//       localField: "book_id",
//       foreignField: "book_id",
//       as: "author_info",
//     },
//   },
//   {
//     $lookup: {
//       from: "sellers",
//       localField: "book_id",
//       foreignField: "book_id",
//       as: "seller_info",
//     },
//   },
//   // Deconstructs the array field from the
//   // input document to output a document
//   // for each element
//   {
//     $unwind: "$author_info",
//   },
//   {
//     $unwind: "$seller_info",
//   },
  
// ])
//   .then((result) => {
//     var thing = new Thing(result);
//     thing.save() 
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
  

  
 
  //------------------------------------------without match stage----------------------------------------------------------//


 const enquired_book= "book1";
 book.aggregate([
  {  
   $lookup: {
      from: "authors",
      localField: "book_id",
      foreignField: "book_id",
      as: "author_info",
    },
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
    $unwind: "$author_info",
  },
  {
    $unwind: "$seller_info",
  },
  
])
  .then((result) => {
    var matchbook = new MatchBook(result);
    matchbook.save(result) 
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
});
  

  
