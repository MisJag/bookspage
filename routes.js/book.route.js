const express = require('express');
let mongoose = require('mongoose');
const  bookRoutes = express.Router(); 
// user Model
let bookSchema = require('../models/book')

// Create user
bookRoutes.post('/add-book', (req, res, next) => {
 // console.log(req.body);//just for checking
 // console.log(res.body);//just for---------
  bookSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
     
     res.json("inserted")
     console.log("inserted")
    }
  })
})
bookRoutes.route('/show-books').get((req, res) => {
    bookSchema.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
        console.log(data)
     
      }
    })
  })
module.exports = bookRoutes;