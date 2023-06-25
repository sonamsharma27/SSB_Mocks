const mongoose = require('mongoose')
const {Schema} = mongoose

const questionModel = new Schema({
    questions: {type:Array,default: []},
    answers: {type:Array,default: []},
    createAt: {type:Date,default: Date.now}
})

module.exports = mongoose.model('Questions',questionModel)