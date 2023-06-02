const mongoose = require('mongoose')
const {Schema} = mongoose

const srtResultModel = new Schema({
    username: {type:String},
    result:  {type:String},
    question: {type:String},
    createAt: {type:Date,default: Date.now}
})

module.exports = mongoose.model('srtres',srtResultModel)