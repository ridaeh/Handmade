var express = require('express')
var apiServer = express()
var bodyParser = require('body-parser')
let config = require('./config/config')
let productsRoutes = require('./routes/products')
let authRoutes = require('./routes/authRoute')
let userRoutes = require('./routes/userRoutes')
//connect to the database on ATLAS-mongodb
var mongoose = require('mongoose')
mongoose.connect(config.databaseUrl, {
  useNewUrlParser: true
})

// create application/json parser
apiServer.use(bodyParser.json())
// create application/x-www-form-urlencoded parser
apiServer.use(bodyParser.urlencoded({
  extended: false
}))

apiServer.use('/images/', express.static(__dirname + '/../../public/images/'));
apiServer.use('/uploads/', express.static(__dirname + '/../../public/uploads/'));
//defining routes
apiServer.use(authRoutes)
apiServer.use(userRoutes)
apiServer.use(productsRoutes)

module.exports = apiServer
