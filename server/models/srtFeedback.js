const mongoose = require('mongoose')
const {Schema} = mongoose

const srtFeedback = new Schema({
    feedback: {type:String},
    createAt: {type:Date,default: Date.now}
})

module.exports = mongoose.model('srtFeedback',srtFeedback)