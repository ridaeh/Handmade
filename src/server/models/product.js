
/***********THIS FILE DEFINE THE DATASCHEMA STUCTURE OF AN ARTICLE************/
var mongoose =require('mongoose');
var articleSchema =  mongoose.Schema({
  label:{type:String},
  price:{type:String},
  img:{type:String},
});
module.exports=mongoose.model('article',articleSchema);
