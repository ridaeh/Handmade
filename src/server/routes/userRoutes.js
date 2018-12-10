'use strict'
var express = require('express')
var Product = require('../models/userModel')
var userHandlers = require('../controllers/userController')
let authMiddleware = require('./middlewares/auth')
var imageMiddleware = require('./middlewares/imageUpload')
let userRoutes = express.Router()


userRoutes.route('/api/v1/user')
  .post(authMiddleware, imageMiddleware.upload.single('avatar'), userHandlers.updateProfile)

userRoutes.route('/api/v1/user/:id')
  .get(userHandlers.getProfile)




module.exports = userRoutes
