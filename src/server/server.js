//const http = require('http');
//const app = require('./');

//const port = 3000;

//const server = http.createServer(app);

//server.listen(port);

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  console.log('Received request for beers from', req.ip)
  res.send('Hello world');
});


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Listening at http://%s:%s', host, port);
});
