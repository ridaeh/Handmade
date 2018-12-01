var express = require('express');
var apiServer = express();

let config = require('./config/config')
let productsRoutes =require('./routes/products')

//connect to the database on ATLAS-mongodb
var mongoose = require('mongoose');
mongoose.connect(config.databaseUrl, { useNewUrlParser: true })

//defining routes
apiServer.use(productsRoutes);

module.exports=apiServer
