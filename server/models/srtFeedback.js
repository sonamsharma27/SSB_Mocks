const mongoose = require('mongoose')
const {Schema} = mongoose

const srtFeedback = new Schema({
    username: {type:String},
    result: {type:String},
    alumniname: {type:String},
    feedback: {type:String},
    createAt: {type:Date,default: Date.now}
})

module.exports = mongoose.model('srtFeedback',srtFeedback)