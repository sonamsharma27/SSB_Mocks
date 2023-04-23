const mongoose = require('mongoose')

exports.connect = async function() {
    await mongoose.connect("mongodb+srv://oirapp:oirapp123@oir.o6vnjzq.mongodb.net/?retryWrites=true&w=majority")
    console.log("Database connected");
}