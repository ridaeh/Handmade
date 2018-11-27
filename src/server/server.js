
var express = require('express');
var app = express();
var mongoose=require('mongoose');
var articles=require('./MongoDB/dataSchema.js')
//connect to mongoose
mongoose.connect('mongodb://localhost/articles');
//var db=mongoose.connection;
app.get('/api/v1/article', function (req, res) {
  console.log('Received request for beers from', req.ip)
  //  res.json(p);

  articles.find({},(err,article)=>{
    if(err){
      res.status(500).json({errmsg:err});
    }  res.status(200).json({msg:article});
  });
});

//    var p =   require('./articles.json')   ;
//    console.log("articles", p);
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Back-end server listening at http://%s:%s', host, port);
});
