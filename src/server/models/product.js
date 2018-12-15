var mongoose =require('mongoose');
var productSchema =  mongoose.Schema({

  label:{type:String},
  price:{type:String},
  img:{type:String},
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});
module.exports=mongoose.model('article',productSchema);
