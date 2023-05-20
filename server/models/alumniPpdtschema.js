const mongoose = require('mongoose')
const {Schema} = mongoose

const AlumniPpdtResponse = new Schema({
    url: {type:String},
    createAt: {type:Date,default: Date.now}
})

module.exports = mongoose.model('AlumniPpdtResponse',AlumniPpdtResponse)