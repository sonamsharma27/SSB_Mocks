const mongoose = require('mongoose')
const { Schema } = mongoose

const srtResultModel = new Schema({
    username: { type: String },
    result: { type: String },
    questions: { type: String },
    users: { type: Array, default: [] },
    createAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('srtres', srtResultModel)