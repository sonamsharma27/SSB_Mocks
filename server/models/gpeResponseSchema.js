const mongoose = require('mongoose')
const {Schema} = mongoose

const GpeResponse = new Schema({
    username: {type:String},
    url: {type:String},
    problem: {type:String},
    solution:  {type:String},
    createAt: {type:Date,default: Date.now}
})

module.exports = mongoose.model('GpeResponse',GpeResponse)