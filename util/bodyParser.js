const bodyParser = require('body-parser')
const express = require('express')
const body = express()


// parse application/x-www-form-urlencoded
body.use(bodyParser.urlencoded({
    extended: false
}))


// parse application/json
body.use(bodyParser.json())

module.exports = body