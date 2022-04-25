let express = require('express')
let mongoose = require('mongoose')
let cors = require('cors')

let author= require('./models/author')
let book= require('./models/book')

const createError = require('http-errors');

// Express Route
const authorRoute = require("./routes.js/author.route");

const bookRoute = require("./routes.js/book.route");



// Connecting mongoDB Database
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/bookdata');

var db = mongoose.connection;

db.on("error", () => {console.log("Error connecting db.")});
db.once("open", () => { console.log("COnnected succesfully")});

const app = express()
app.use(express.json());



app.use(cors())
app.options('*', cors());
app.use('/authors', authorRoute);
app.use('/books', bookRoute);



// PORT
const port = process.env.PORT || 4000
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})
// ---------------------------------------------------//
book.aggregate([
  {
    $lookup: {
      from: "authors",
      
      localField: "name",
      foreignField: "name",
      as: "book_info",
    },
  },
  // Deconstructs the array field from the
  // input document to output a document
  // for each element
  {
    $replaceRoot: { newRoot: { $mergeObjects: [ { $arrayElemAt: [ "$book_info", 0 ] }, "$$ROOT" ] } }
 },
 { $project: { book_info: 0 } }
] )
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });