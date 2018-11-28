
var express = require('express');
var app = express();
//var mongoose=require('mongoose');
var articles=require('./MongoDB/dataSchema.js')
//connrction to the database on ATLAS-mongodb
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://yahya:yahya@cluster0-shard-00-00-iky7n.mongodb.net:27017,"+
"cluster0-shard-00-01-iky7n.mongodb.net:27017,"+
"cluster0-shard-00-02-iky7n.mongodb.net:27017/articles?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true";

//defining routes
app.get('/api/v1/articles', function (req, res) {


  MongoClient.connect(url,  function(err, db) {
    if (err) throw err;
    var dbo = db.db("articles");
    dbo.collection("articles").find({}).toArray(function(err, result) {
      if (err) throw err;
    //  console.log(result);     // here result contains the data of article label /price/img
       res.json("hey");

      db.close();
    });

  });
});

//launching server
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Back-end server listening at http://%s:%s', host, port);
});
