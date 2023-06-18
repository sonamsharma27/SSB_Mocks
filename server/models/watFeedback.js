<<<<<<< HEAD
const mongoose = require('mongoose')
const {Schema} = mongoose

const watFeedback = new Schema({
    word1: {type:String},
    s1: {type:String},
    word2: {type:String},
    s2: {type:String},
    word3: {type:String},
    s3: {type:String},
    word4: {type:String},
    s4: {type:String},
    word5: {type:String},
    s5: {type:String},
    word6: {type:String},
    s6: {type:String},
    word7: {type:String},
    s7: {type:String},
    word8: {type:String},
    s8: {type:String},
    word9: {type:String},
    s9: {type:String},
    word10: {type:String},
    s10: {type:String},
    alumniname: {type:String},
    feedback: {type:String},
    username: {type:String},
    createAt: {type:Date,default: Date.now}
})

=======
const mongoose = require('mongoose')
const {Schema} = mongoose

const watFeedback = new Schema({
    word1: {type:String},
    s1: {type:String},
    word2: {type:String},
    s2: {type:String},
    word3: {type:String},
    s3: {type:String},
    word4: {type:String},
    s4: {type:String},
    word5: {type:String},
    s5: {type:String},
    word6: {type:String},
    s6: {type:String},
    word7: {type:String},
    s7: {type:String},
    word8: {type:String},
    s8: {type:String},
    word9: {type:String},
    s9: {type:String},
    word10: {type:String},
    s10: {type:String},
    alumniname: {type:String},
    feedback: {type:String},
    username: {type:String},
    createAt: {type:Date,default: Date.now}
})

>>>>>>> 15ce9880dda5b0197b18653a98ab0045fc99e94d
module.exports = mongoose.model('watFeedback',watFeedback)