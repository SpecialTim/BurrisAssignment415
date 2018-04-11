var express = require('express');
var chalk = require('chalk');
var app = express();
const bodyparser = require('body-parser')
const PORT = process.env.PORT || 5000
const EMR = require('./Models/EMR')
var data = {
    emrWasCreated: false
}

app.use(bodyparser.urlencoded({extended: true}))
app.use(express.static(__dirname + '/client/'))

app.set('views', __dirname + '/views/')
app.set('view engine' , 'ejs')

app.get('/', (req,res) =>{
    res.render('index')
})

app.get('/rest/view/', (req,res) => {
    data.emrList = EMR.getList()
    res.render('ViewAllEMR', data)
})

app.get('/rest/emr', (req, res) => {
    data.emrWasCreated = false
    res.render('CreateEMR.ejs', data)
})



app.post('/rest/emr/', (req,res) => {
    let name = req.body.name
    let address = req.body.address
    EMR.createEMR(name,address)
    let emr = EMR.getEMRById(EMR.getListLength() - 1)
    data.emrWasCreated = true
    data.emr = emr
    res.render('CreateEMR.ejs', data)
})

app.listen(PORT, () =>{
    console.log(`Listening on ${PORT}`)
})