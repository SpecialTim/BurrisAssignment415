var express = require('express')
var route = express.Router()
const EMR = require('../Models/EMR')

route.get('/emr/', (req, res) => {
    res.send(EMR.getList())
})

route.get('/emr/:id', (req, res) => {
    let emrId = req.params.id
    res.send(EMR.getEMRById(emrId))
})

route.post('/emr/', (req,res) => {
    let name = req.body.name
    let address = req.body.address
    EMR.createEMR(name,address)
    let emr = EMR.getEMRById(EMR.getListLength() - 1)
    res.send(emr)
})

module.exports = route