var listOfEMR = []
function EMR (id,name,address){
    var self = {}
    self.id = id,
    self.name = name,
    self.address = address
    return self
}

function listLength(){
    let length = 0
    for (i in listOfEMR){
        length++
    }
    return length
}

module.exports.getListLength = () => {
    return listLength()
}

module.exports.getEMRById = (id) => {
    return listOfEMR[id]
} 

module.exports.createEMR = (name,address) => {
    let id = listLength()
    var emr = new EMR(id,name,address)
    listOfEMR.push(emr)
}

module.exports.deleteEMR = (emr) => {
    listOfEMR.pop(emr.id)
}

module.exports.getList = () => {
    return listOfEMR
}