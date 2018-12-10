var express =require('express');
var Product=require('../models/product.js')
const  multer = require('multer');
let productsRoutes = express.Router();
//const upload = multer({dest : './uploads'});

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function(req, file, cb) {
    cb(null,file.originalname);
  }
});
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },

});

productsRoutes.get('/api/v1/products', (req, res)=> {
    res.type('application/json')
    Product.find({}).exec(function (error, documents) {
      if (documents.length > 0) {
        res.json(documents)
        }
    })
  });

  //api for Insert data from database
          productsRoutes.post("/api/v1/sellers", upload.single('img'), (req, res, next) => {
            const product = new Product({

              label: req.body.label,
              price: req.body.price,
              img: req.file.path
            });
            product.save(function(err,data){
                if(err){
                    res.send(err);
                }
                else{
                  console.log("record added")
                  res.status(200).json("added");
                }
            });
          });

  //api for Insert data from database
/*  productsRoutes.post("/api/v1/sellers",function(req,res){

      var mod = new Product(req.body);
          mod.save(function(err,data){
              if(err){
                  res.send(err);
              }
              else{
                console.log("record added")
                res.status(200).end();
              }
          });
          });

*/

module.exports = productsRoutes
