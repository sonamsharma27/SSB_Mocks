const mongoose = require('mongoose')
const {Schema} = mongoose

const PpdtResponse = new Schema({
    username: {type:String},
    url: {type:String},
    title: {type:String},
    main_character:  {type:String},
    total_characters:  {type:Number},
    characters:  {type:String},
    story:  {type:String},
    rating: {type:Number, default: 0},
    users: {type:Array, default: []},
    createAt: {type:Date,default: Date.now}
})

module.exports = mongoose.model('PpdtResponse',PpdtResponse)