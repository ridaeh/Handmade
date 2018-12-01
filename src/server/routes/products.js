var express =require('express')
var Product=require('../models/product.js')

let productsRoutes = express.Router()

productsRoutes.get('/api/v1/products', (req, res)=> {
    res.type('application/json')
    Product.find({}).exec(function (error, documents) {
      if (documents.length > 0) {
        res.json(documents)
        }
    })
  })

module.exports = productsRoutes
