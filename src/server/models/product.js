var mongoose =require('mongoose');
var productSchema =  mongoose.Schema({
  label:{type:String},
  price:{type:String},
  img:{type:String},
});
module.exports=mongoose.model('article',productSchema);
