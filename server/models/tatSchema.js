const mongoose = require('mongoose')
const {Schema} = mongoose

const TatStore = new Schema({
    url: {type:String,default: ''}
})

module.exports = mongoose.model('TatStore',TatStore)