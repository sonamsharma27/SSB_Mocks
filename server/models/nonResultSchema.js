<<<<<<< HEAD
const mongoose = require('mongoose')
const {Schema} = mongoose

const nonResultModel = new Schema({
    username: {type:String},
    result: {type: Array,default: []},
    attempts: {type: Number,default: 0},
    points: {type: Number,default: 0},
    achived: {type: String,default: ''},
    createAt: {type:Date,default: Date.now}
})

=======
const mongoose = require('mongoose')
const {Schema} = mongoose

const nonResultModel = new Schema({
    username: {type:String},
    result: {type: Array,default: []},
    attempts: {type: Number,default: 0},
    points: {type: Number,default: 0},
    achived: {type: String,default: ''},
    createAt: {type:Date,default: Date.now}
})

>>>>>>> 15ce9880dda5b0197b18653a98ab0045fc99e94d
module.exports = mongoose.model('nonresult',nonResultModel)