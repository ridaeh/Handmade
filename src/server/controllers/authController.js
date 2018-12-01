'user strict'
var User =require('../models/userModel')
var bcrypt = require('bcrypt')
var jwt =require('jsonwebtoken')
var config =require('../config/config')
exports.register = (req, res) => {
  var newUser = new User(req.body)
  newUser.hash_password = bcrypt.hashSync(req.body.password, 10)
  newUser.save(function(err, user) {
   if (err) {
     return res.status(400).send({message: err})
   } else {
    user.hash_password = undefined
    return res.status(200).json({token: jwt.sign({ email: user.email,
       fullName: user.fullName, _id: user._id}, config.signKey,config.signOptions)})
   }
 })
}
exports.signIn = (req, res) => {
  User.findOne({
      email: req.body.email
    }, (err, user)=> {
      if (err) throw err
      if (!user) {
        res.status(401).json({ message: 'Authentication failed. User not found.' })
      } else if (user) {
        if (!user.comparePassword(req.body.password)) {
          res.status(401).json({ message: 'Authentication failed. Wrong password.' })
        } else {
          return res.status(200).json({token: jwt.sign({ email: user.email,
             fullName: user.fullName, _id: user._id}, config.signKey,config.signOptions)})
        }
      }
    });
}
