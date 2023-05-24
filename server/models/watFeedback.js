const mongoose = require('mongoose')
const {Schema} = mongoose

const watFeedback = new Schema({
    feedback: {type:String},
    username: {type:String},
    createAt: {type:Date,default: Date.now}
})

module.exports = mongoose.model('watFeedback',watFeedback)