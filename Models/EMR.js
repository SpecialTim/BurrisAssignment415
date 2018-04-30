const rest = require('node-restful')
const mongoose = rest.mongoose
var status = Boolean

let emrSchema = new mongoose.Schema({
    name: String,
    address: String,
    locked: {type: Boolean, default: false}
})



//returns the instance of the emr Model 
module.exports = rest.model('emrs', emrSchema)

//allows access to the setLocked function to change locked attribute
//module.exports = setLocked(status)