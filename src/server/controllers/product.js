'user strict'
var User = require('../models/userModel')
var Product = require('../models/product')
var mongoose = require('mongoose')

exports.addProduct = (req, res) => {
  //Check if the user has upload an avatar so we add it to DB
  if (req.file) {
    req.body['img'] = "http://localhost:3000/uploads/" + req.file.filename
  }
  const product = new Product({
    label: req.body.label,
    price: req.body.price,
    img: req.body.img,
    user:req.user._id
  });
  product.save(function(err,data){
      if(err){
          res.status(401).send(err);
      }
      else{
        res.status(200).json("product Added");
      }
  });
}

exports.getProduct=(req,res)=>{
  if (mongoose.Types.ObjectId.isValid(req.params.id)) {
    Product.findById({
      _id: req.params.id
    }, (err, product) => {
      if (err) throw err
      if (product) {
        User.findById({
          _id: product.user
        },(err,user)=> {
          if(err) throw err
          if(user){
              user.avatar=undefined
              user.hash_password=undefined
              product.user=user
              return res.status(200).json(product)
          }
        })
      } else {
        return res.status(401).json({
          message: 'Product does not existe.'
        })
      }
    })
  } else
    return res.status(401).json({
      message: 'Product does not existe.'
    })
}

exports.updateProduct=(req,res)=>{
  if (req.file) {
    req.body['img'] = "http://localhost:3000/uploads/" + req.file.filename
  }
  Product.findOneAndUpdate({
    _id: req.body._id
  }, req.body, {
    new: true
  }, (err, product) => {
    if (err) throw err
    if (product) {
      return res.status(200).json(product)
    } else {
      return res.status(401).json({
        message: 'Product does not updates.'
      })
    }
  })
}

exports.deleteProduct =(req,res)=>{
  console.log('ee')
  Product.findOneAndRemove({_id:req.body._id},(err,result)=>{
    if(err) return res.status(401).json({ message:'Product do not deleted'})
    return res.status(200).json("Product deleted successfully")
  })
}
