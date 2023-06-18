<<<<<<< HEAD
const mongoose = require('mongoose')
const {Schema} = mongoose

const nonQuestionModel = new Schema({
    nonquestions: {type:Array,default: []},
    nonanswers: {type:Array,default: []},
    createAt: {type:Date,default: Date.now}
})

=======
const mongoose = require('mongoose')
const {Schema} = mongoose

const nonQuestionModel = new Schema({
    nonquestions: {type:Array,default: []},
    nonanswers: {type:Array,default: []},
    createAt: {type:Date,default: Date.now}
})

>>>>>>> 15ce9880dda5b0197b18653a98ab0045fc99e94d
module.exports = mongoose.model('NonQuestions',nonQuestionModel)