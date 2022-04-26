let author= require('../models/author')
let book= require('../models/book')
const book_data=()=>{book.aggregate([
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
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
}
module.exports =book_data