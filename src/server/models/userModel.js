'use strict'

var mongoose =require('mongoose');
var userSchema =  mongoose.Schema({
  fullName:{
    type:String,
    trim:true,
    required:true
  },
  email:{
    type:String,
    unique:true,
    lowercase:true,
    trim:true,
    required:true
  },
  hash_password:{
    type:String,
    required:true
  }
});

module.exports=mongoose.model('User',userSchema);
