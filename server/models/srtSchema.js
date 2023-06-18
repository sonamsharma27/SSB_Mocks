const mongoose = require('mongoose')
const {Schema} = mongoose

const srtQuestionModel = new Schema({
    questions: {type:Array,default: []},
    createAt: {type:Date,default: Date.now}
})

module.exports = mongoose.model('srtQuesti',srtQuestionModel)