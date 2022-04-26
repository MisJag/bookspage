const express = require('express');
let mongoose = require('mongoose');
const  authorRoutes = express.Router(); 
// user Model
let authorSchema = require('../models/author')

// Create user
authorRoutes.post('/add-author', (req, res, next) => {

  authorSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
    
     res.json("inserted")
     console.log("inserted")
    }
  })
})
authorRoutes.route('/show-authors').get((req, res) => {
    authorSchema.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
        console.log(data)
      
      }
    })
  })
  authorRoutes.route('/delete-author/:id').delete((req, res, next) => {
    authorSchema.findByIdAndRemove(req.params.id, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.status(200).json({
          msg: data,
        })
      }
    })
  })
module.exports = authorRoutes;
