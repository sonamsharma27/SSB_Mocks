const mongoose = require('mongoose')
const db = "mongodb://127.0.0.1:27017/smocks_db"

const connectDB = async () => {
    try {
        mongoose.set('strictQuery',true);
        await mongoose.connect(db,{
            useNewUrlParser: true
        });
        console.log('Successfully connected to mongodb');
    } catch(err){
        console.log('====================================');
        console.log(err.message);
        console.log('====================================');
        process.exit(1)
    }
}

module.exports = connectDB;