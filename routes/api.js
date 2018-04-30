var express = require('express')
var route = express.Router()
const EMR = require('../Models/EMR')
const Client = require('node-rest-client').Client
const url = 'https://hidden-ocean-33929.herokuapp.com/rest/emr'
var cl = new Client()

let args = {
    data: {
        id: String,
        name: String,
        address: String,
        locked: Boolean
    }
}



//defining the methods available
EMR.methods(['get', 'put', 'post', 'delete'])
//registering the route
EMR.register(route, '/emr')


EMR.after('get', lockRecord)
EMR.before('put', unlockRecord)

//function to set the EMR as locked whenever called
function lockRecord(req, res, next){
    let bundle = res.locals.bundle
    let id = bundle.id
    if(id === undefined){
        next()
    } else {
        if(bundle.locked){
            res.send('Object is locked')
        }
        else{
            args.data.name = bundle.name
            args.data.address = bundle.address
            args.data.locked = true
            bundle.locked = true
            cl.put(url+id, args, (req, res) => {})
            next()

        }
    }
}

function unlockRecord(res, req, next){
    if(res.body.locked){
        next()
    } else {
        res.body.locked = false
        next()
    }
}

//returns route from module
module.exports = route