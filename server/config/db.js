const mongoose = require('mongoose')
const db = "mongodb://127.0.0.1:27017/smocks_db"

const connectDB = async () => {
    try {
        mongoose.set('strictQuery',true);
        await mongoose.createConnection(db,{
            // useNewUrlParser: true
        reconnectInterval: 5000,
        reconnectTries: 60
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