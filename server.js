var express = require('express')
var app = express()
const bodyparser = require('body-parser')
const PORT = process.env.PORT || 5000

app.use(bodyparser.json())
app.use(express.static(__dirname + '/client/'))

app.set('views', __dirname + '/views/')
app.set('view engine' , 'ejs')

app.get('/', (req,res) =>{
    res.render('index')
})

app.use('/rest', require('./routes/api'))

app.listen(PORT, () =>{
    console.log(`Listening on ${PORT}`)
})