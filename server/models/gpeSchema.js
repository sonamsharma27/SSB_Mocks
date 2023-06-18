const mongoose = require('mongoose')
const {Schema} = mongoose

const GpeStore = new Schema({
    url: {type:String, default: ''}
})

module.exports = mongoose.model('GpeStore',GpeStore)