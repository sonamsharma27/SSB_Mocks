const mongoose = require('mongoose')
const {Schema} = mongoose

const PpdtStore = new Schema({
    url: {type:String,default: ''}
})

module.exports = mongoose.model('PpdtStore',PpdtStore)