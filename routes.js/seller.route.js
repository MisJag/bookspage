const express = require('express');
let mongoose = require('mongoose');
const  sellerRoutes = express.Router(); 
// user Model
let sellerSchema = require('../models/seller')

// Create user
sellerRoutes.post('/add-seller', (req, res, next) => {

  sellerSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
     
     res.json("inserted")
     console.log("inserted")
    }
  })
})
sellerRoutes.route('/show-sellers').get((req, res) => {
    sellerSchema.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
        console.log(data)
     
      }
    })
  })
  sellerRoutes.route('/delete-seller/:id').delete((req, res, next) => {
    sellerSchema.findByIdAndRemove(req.params.id, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.status(200).json({
          msg: data,
        })
      }
    })
  })
module.exports = sellerRoutes;