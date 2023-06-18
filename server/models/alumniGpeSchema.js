const mongoose = require('mongoose')
const {Schema} = mongoose

const AlumniGpeResponse = new Schema({
    url: {type:String},
    problem: {type:String},
    createAt: {type:Date,default: Date.now}
})

module.exports = mongoose.model('AlumniGpeResponse',AlumniGpeResponse)