const rest = require('node-restful')
const mongoose = rest.mongoose

let emrSchema = new mongoose.Schema({
    name: String,
    address: String
})

module.exports = rest.model('emrs', emrSchema)