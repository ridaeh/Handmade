'use strict'
// Imports
const jwt = require('jsonwebtoken')

const config = require('../../config/config')

// Auth Middleware
let authMiddleware = function(request, response, next) {
  let token = request.body.token || request.query.token || request.headers['x-access-token']
  if (token && token != 'null') {
    request.user = jwt.verify(token, config.signKey, config.signOptions)
    next()
  } else
    response.json("unauthorize")
}

// Export
module.exports = authMiddleware
