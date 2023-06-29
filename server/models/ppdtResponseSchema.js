const mongoose = require('mongoose')
const { Schema } = mongoose

const PpdtResponse = new Schema({
    username: { type: String },
    url: { type: String },
    title: { type: String },
    main_character: { type: String },
    total_characters: { type: Number },
    characters: { type: String },
    story: { type: String },
    users: { type: Array, default: [] },
    createAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('PpdtResponse', PpdtResponse)