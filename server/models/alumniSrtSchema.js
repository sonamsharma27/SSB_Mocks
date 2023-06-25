const mongoose = require('mongoose')
const {Schema} = mongoose

const AlumniSrtResponse = new Schema({
    situation: {type:String},
    createAt: {type:Date,default: Date.now}
})

module.exports = mongoose.model('AlumniSrtResponse',AlumniSrtResponse)