const mongoose = require('mongoose')
const { Schema } = mongoose

const TatResponse = new Schema({
    username: { type: String },
    url1: { type: String },
    s1: { type: String },
    url2: { type: String },
    s2: { type: String },
    url3: { type: String },
    s3: { type: String },
    url4: { type: String },
    s4: { type: String },
    url5: { type: String },
    s5: { type: String },
    url6: { type: String },
    s6: { type: String },
    url7: { type: String },
    s7: { type: String },
    url8: { type: String },
    s8: { type: String },
    url9: { type: String },
    s9: { type: String },
    url10: { type: String },
    s10: { type: String },
    users: { type: Array, default: [] },
    createAt: { type: Date, default: Date.now }

})

module.exports = mongoose.model('TatResponse', TatResponse)