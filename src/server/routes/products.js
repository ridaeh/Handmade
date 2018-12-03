var express =require('express')
var Product=require('../models/product.js')
var jwt =require('jsonwebtoken')
let productsRoutes = express.Router()

productsRoutes.get('/api/v1/products', (req, res)=> {
    res.type('application/json')
    Product.find({}).exec(function (error, documents) {
      if (documents.length > 0) {
        res.json(documents)
        }
    })
  });

  //api for Insert data from database
  productsRoutes.post("/api/v1/sellers",function(req,res){

      var mod = new Product(req.body);
          mod.save(function(err,data){
              if(err){
                  res.send(err);
              }
              else{
                console.log("record added")
                res.status(200).json({token: jwt.sign({label: data.label,img: data.img,price: data.price, _id: data._id})})
              }
          });


      /*      let product = new Product({
              label:req.body.label,
              price:req.body.price,
              img: req.body.img,

            });

            product.save()
              .then((result) => {
                res.json(
                {
                    _id: result._id,
                    label: result.label,
                    price: result.price,
                    img: result.img
                  }
                });
              })*/

          });



module.exports = productsRoutes
