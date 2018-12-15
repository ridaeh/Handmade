var express =require('express');
var Product=require('../models/product.js')
let authMiddleware = require('./middlewares/auth')
var imageMiddleware = require('./middlewares/imageUpload')
var productHandlers = require('../controllers/product')
let productsRoutes = express.Router();


productsRoutes.get('/api/v1/products', (req, res)=> {
    res.type('application/json')
    Product.find({}).exec(function (error, documents) {
      if (documents.length > 0) {
        res.json(documents)
        }
    })
  });

//api for Insert data from database
productsRoutes.route("/api/v1/product")
              .post(authMiddleware, imageMiddleware.upload.single('img'), productHandlers.addProduct)
              .put(authMiddleware, imageMiddleware.upload.single('img'), productHandlers.updateProduct)
              .delete(authMiddleware,productHandlers.deleteProduct)

productsRoutes.route("/api/v1/product/:id")
              .get(productHandlers.getProduct)
              
module.exports = productsRoutes
