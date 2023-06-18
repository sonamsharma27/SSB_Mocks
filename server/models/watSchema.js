<<<<<<< HEAD
const mongoose = require('mongoose')
const {Schema} = mongoose

const WatStore = new Schema({
    word: {type:String,default: ''}
})

=======
const mongoose = require('mongoose')
const {Schema} = mongoose

const WatStore = new Schema({
    word: {type:String,default: ''}
})

>>>>>>> 15ce9880dda5b0197b18653a98ab0045fc99e94d
module.exports = mongoose.model('WatStore',WatStore)