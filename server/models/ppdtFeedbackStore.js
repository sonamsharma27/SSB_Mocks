const mongoose = require('mongoose')
const {Schema} = mongoose

const ppdtFeedbackStore = new Schema({
    story: {type:String},
    url: {type:String},
    feedback: {type:String},
    createAt: {type:Date,default: Date.now}
})

module.exports = mongoose.model('ppdtFeedbackStore',ppdtFeedbackStore)