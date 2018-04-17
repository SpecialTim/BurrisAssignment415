var express = require('express')
var route = express.Router()

const EMR = require('../Models/EMR')

EMR.methods(['get', 'put', 'post', 'delete'])
EMR.register(route, '/emr')

module.exports = route