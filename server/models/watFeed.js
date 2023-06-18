const mongoose = require('mongoose')
const {Schema} = mongoose

const watFeed = new Schema({
    respId:   {type:String},
    feedback: {type:String},
    username: {type:String},
    createAt: {type:Date,default: Date.now}
})

module.exports = mongoose.model('watFeed',watFeed)