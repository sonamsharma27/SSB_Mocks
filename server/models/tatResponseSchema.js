const mongoose = require('mongoose')
const {Schema} = mongoose

const TatResponse = new Schema({
    username: {type:String},
    url1: {type:String},
    s1: {typr:String},
    url2: {type:String},
    s2: {typr:String},
    url3: {type:String},
    s3: {typr:String},
    url4: {type:String},
    s4: {typr:String},
    url5: {type:String},
    s5: {typr:String},
    url6: {type:String},
    s6: {typr:String},
    url7: {type:String},
    s17: {typr:String},
    url8: {type:String},
    s8: {typr:String},
    url9: {type:String},
    s9: {typr:String},
    url10: {type:String},
    s10: {typr:String},
   
})

module.exports = mongoose.model('TatResponse',TatResponse)