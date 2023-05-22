const mongoose = require('mongoose')
const {Schema} = mongoose

const WatResponse = new Schema({
    username: {type:String},
    word1: {type:String},
    s1: {typr:String},
    word2: {type:String},
    s2: {typr:String},
    word3: {type:String},
    s3: {typr:String},
    word4: {type:String},
    s4: {typr:String},
    word5: {type:String},
    s5: {typr:String},
    word6: {type:String},
    s6: {typr:String},
    word7: {type:String},
    s17: {typr:String},
    word8: {type:String},
    s8: {typr:String},
    word9: {type:String},
    s9: {typr:String},
    word10: {type:String},
    s10: {typr:String},
   
})

module.exports = mongoose.model('WatResponse',WatResponse)