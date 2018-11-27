var mongoose =require('mongoose');
var articleSchema =  mongoose.Schema({
  label:{type:String},
  text:{type:String},
  img:{type:String},
});
module.exports=mongoose.model('article',articleSchema);
