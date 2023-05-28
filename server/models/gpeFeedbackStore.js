const mongoose = require('mongoose')
const {Schema} = mongoose

const gpeFeedbackStore = new Schema({
    problem: {type:String},
    url: {type:String},
    result: {type:String},
    feedback: {type:String},
    createAt: {type:Date,default: Date.now}
})

module.exports = mongoose.model('gpeFeedbackStore',gpeFeedbackStore)