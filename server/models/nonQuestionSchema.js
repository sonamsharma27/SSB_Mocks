const mongoose = require('mongoose')
const {Schema} = mongoose

const nonQuestionModel = new Schema({
    nonquestions: {type:Array,default: []},
    nonanswers: {type:Array,default: []},
    createAt: {type:Date,default: Date.now}
})

module.exports = mongoose.model('NonQuestions',nonQuestionModel)