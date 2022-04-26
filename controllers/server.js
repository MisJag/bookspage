

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