const mongoose = require('mongoose')
const {Schema} = mongoose

const WatStore = new Schema({
    word: {type:String,default: ''}
})

module.exports = mongoose.model('WatStore',WatStore)