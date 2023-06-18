<<<<<<< HEAD
const mongoose = require('mongoose')
const {Schema} = mongoose

const AlumniSrtResponse = new Schema({
    situation: {type:String},
    createAt: {type:Date,default: Date.now}
})

=======
const mongoose = require('mongoose')
const {Schema} = mongoose

const AlumniSrtResponse = new Schema({
    situation: {type:String},
    createAt: {type:Date,default: Date.now}
})

>>>>>>> 15ce9880dda5b0197b18653a98ab0045fc99e94d
module.exports = mongoose.model('AlumniSrtResponse',AlumniSrtResponse)