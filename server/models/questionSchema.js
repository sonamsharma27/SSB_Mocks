<<<<<<< HEAD
const mongoose = require('mongoose')
const {Schema} = mongoose

const questionModel = new Schema({
    questions: {type:Array,default: []},
    answers: {type:Array,default: []},
    createAt: {type:Date,default: Date.now}
})

=======
const mongoose = require('mongoose')
const {Schema} = mongoose

const questionModel = new Schema({
    questions: {type:Array,default: []},
    answers: {type:Array,default: []},
    createAt: {type:Date,default: Date.now}
})

>>>>>>> 15ce9880dda5b0197b18653a98ab0045fc99e94d
module.exports = mongoose.model('Questions',questionModel)