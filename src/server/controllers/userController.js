'user strict'
var User = require('../models/userModel')
var Product = require('../models/product')
var bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken')
var config = require('../config/config')
var mongoose = require('mongoose')

exports.getProfile = (req, res) => {
  //Check if the id is valid to avoid "CastError: Cast to ObjectId failed"
  if (mongoose.Types.ObjectId.isValid(req.params.id)) {
    User.findById({
      _id: req.params.id
    }, (err, user) => {
      if (err) throw err
      if (user) {
        user.hash_password = undefined
        return res.status(200).json(user)
      } else {
        return res.status(401).json({
          message: 'User does not existe.'
        })
      }
    })
  } else
    return res.status(401).json({
      message: 'User does not existe.'
    })
}

exports.updateProfile = (req, res, next) => {
  //Check if the user has upload an avatar so we add it to DB
  if (req.file) {
    req.body['avatar'] = "http://localhost:3000/uploads/" + req.file.filename
  }
  // Check https://mongoosejs.com/docs/api.html#model_Model.findOneAndUpdate
  User.findOneAndUpdate({
    _id: req.user._id
  }, req.body, {
    new: true
  }, (err, user) => {
    if (err) throw err
    if (user) {
      user.hash_password = undefined
      return res.status(200).json(user)
    } else {
      return res.status(401).json({
        message: 'User does not updates.'
      })
    }
  })
}

exports.getProducts = (req, res) => {
  User.findById({
    _id: req.params.id
  }, (err, user) => {
    if (err) throw err
    if (user) {
      user.hash_password = undefined
      Product.find({
        user: req.params.id
      }).exec((error, documents) => {
        return res.status(200).json({
          user: user,
          products: documents
        })
      })
    }
  })
}
