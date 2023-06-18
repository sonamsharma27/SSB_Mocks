const mongoose = require('mongoose')
const {Schema} = mongoose

const AlumniWatResponse = new Schema({
    content: {type:String},
    createAt: {type:Date,default: Date.now}
})

module.exports = mongoose.model('AlumniWatResponse',AlumniWatResponse)