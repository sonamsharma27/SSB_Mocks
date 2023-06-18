<<<<<<< HEAD
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
=======
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
>>>>>>> 15ce9880dda5b0197b18653a98ab0045fc99e94d
module.exports = collect