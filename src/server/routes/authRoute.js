'use strict'
var express =require('express')
var Product=require('../models/userModel')
var authHandlers= require('../controllers/authController')
let authRoutes = express.Router()

authRoutes.route('/api/v1/auth/register')
          .get(authHandlers.register)

authRoutes.route('/api/v1/auth/sign-in')
          .get(authHandlers.signIn)


module.exports = authRoutes
