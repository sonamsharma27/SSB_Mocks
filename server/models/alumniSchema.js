const mongoose = require('mongoose')
const {Schema} = mongoose

const new1Model = new Schema({
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

const alucollect = mongoose.model("alumni",new1Model)
module.exports = alucollect