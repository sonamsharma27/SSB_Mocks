const mongoose = require('mongoose')
const {Schema} = mongoose

const newModel = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const collect = mongoose.model("aspirant",newModel)
module.exports = collect