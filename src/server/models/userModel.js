'use strict'

var mongoose =require('mongoose');
var bcrypt = require('bcrypt')

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
userSchema.methods.comparePassword=function (password){
  return bcrypt.compareSync(password,this.hash_password)
}
module.exports=mongoose.model('User',userSchema);
