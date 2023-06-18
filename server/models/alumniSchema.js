<<<<<<< HEAD
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
=======
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
>>>>>>> 15ce9880dda5b0197b18653a98ab0045fc99e94d
module.exports = alucollect