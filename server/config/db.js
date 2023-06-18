const mongoose = require('mongoose')
const db = "mongodb://127.0.0.1:27017/smocks_db"

exports.connectDB = async function() {
    
        mongoose.set('strictQuery',true);
        await mongoose.createConnection(db,{useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('Connected Successfully'))
        .catch((err) => { console.error(err); });
}

// exports.connectDB = async function () {
//     const db1 = mongoose.createConnection(db, {useNewUrlParser: true, useUnifiedTopology: true });
//     db1.on(`error`, console.error.bind(console, `connection error:`));
//     db1.once(`open`, function () {
//       // we`re connected!
//       console.log("MongoDB connected on db");
//     });
//   };
/*exports.connectDB = async function() {
    mongoose.set('strictQuery', false)
    await mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true } )
    .then(() => console.log('Connected Successfully database'))
    .catch((err) => { console.error(err) });
    
}*/
//module.exports = connectDB