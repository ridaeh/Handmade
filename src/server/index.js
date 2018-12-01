const config = require('./config/config')
let appServer = require('./server')

//launching server
appServer.listen(config.port, ()=> {
  console.log('Back-end server is running')
})
