<<<<<<< HEAD
const mongoose = require('mongoose')
const {Schema} = mongoose

const srtFeedback = new Schema({
    situation: {type:String},
    username: {type:String},
    result: {type:String},
    alumniname: {type:String},
    feedback: {type:String},
    createAt: {type:Date,default: Date.now}
})

=======
const mongoose = require('mongoose')
const {Schema} = mongoose

const srtFeedback = new Schema({
    situation: {type:String},
    username: {type:String},
    result: {type:String},
    alumniname: {type:String},
    feedback: {type:String},
    createAt: {type:Date,default: Date.now}
})

>>>>>>> 15ce9880dda5b0197b18653a98ab0045fc99e94d
module.exports = mongoose.model('srtFeedback',srtFeedback)