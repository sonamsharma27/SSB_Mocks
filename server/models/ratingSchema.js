const mongoose = require('mongoose')
const {Schema} = mongoose

const ratingModel = new Schema({
    rating: {type: Number},
    resp_id: {type: String},
    users_email: {type: Array, defaultValue: []},
    createAt: {type:Date,default: Date.now}
})

module.exports = mongoose.model('Rating',ratingModel)